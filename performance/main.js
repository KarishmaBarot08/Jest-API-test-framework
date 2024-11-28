import { appendFile } from 'fs'
import { resolve } from 'path'

import * as config from './config.js'

const args = process.argv.slice(2)
const env = args[0]
const scope = args[1] ?? 'all'
const testMode = args[args.length - 1] && args[args.length - 1].toLowerCase() === '--test'

// Check if the environment is valid
if (!config.envs.includes(env)) {
  console.error(`Invalid environment: ${env}`)
  process.exit(1)
}

// Check if the scope is valid
if (!config.scopes.includes(scope)) {
  console.error(`Invalid scope: ${scope}`)
  process.exit(1)
}

const baseURL = config.baseURL[env]
const tenants = config.tenants[env]

for (const tenant in tenants) {
  tenants[tenant] = await config.init(baseURL, tenant)
}

const results = {}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const log = (tenant, log, result = false) => {
  const filename = `${env}.${tenant}${result ? '.result' : ''}.log`;
  const logEntry = `[${new Date().toISOString()}] ${log}\n`;
  console.log(`[${tenant}]\t${log}`)

  appendFile(resolve('.', 'log', filename), logEntry, (err) => {
    if (err) {
      console.error(`Failed to write log to file: ${err}`);
    }
  })
}

const API = async (req, tenant) => {
  const { baseURL, endpoint, params = {}, method = 'GET' } = req
  const headers = { tenant }
  const query = new URLSearchParams(params).toString()
  const url = baseURL + endpoint + (query ? `?${query}` : '')
  
  try {  
    const start = Date.now()

    const res = await fetch(url, {
      method,
      headers
    }).then(res => {
      res.stop = Date.now()
      res.start = start
      res.cached = res.headers.get('x-redis-cache') === 'HIT'
      return res
    })
    
    return { tenant, endpoint: endpoint + (query ? `?${query}` : ''), res }
  } catch (err) {
    console.error(err)
    return { tenant, endpoint: endpoint + (query ? `?${query}` : ''), res: null, error: err }
  }
}

const handleRequest = async (tenant, endpoint, params, delay = 15) => {
  const hitTarget = testMode ? 2 : 20
  let directHit = 0

  let fullEndpoint = endpoint

  while (directHit < hitTarget) {
    const req = { baseURL, endpoint, params }
    const out = await API(req, tenant)
    fullEndpoint = out.endpoint
    if (!results[tenant][out.endpoint]) {
      results[tenant][out.endpoint] = []
    }
    await handleResponse(out.tenant, out.endpoint, out.res)

    if (!out.res.cached) {
      directHit++
    } else if (!out.res.ok) {
      break
    }

    await sleep(delay * 1000)
  }

  return { tenant, endpoint: fullEndpoint, data: results[tenant][fullEndpoint] }
}

const handleResponse = async (tenant, endpoint, res) => {
  const { status, statusText, cached, start, stop } = res
  const duration = stop - start

  results[tenant][endpoint].push({ ts: start, status, duration, cached })

  log(tenant, `${endpoint} - ${status} ${statusText} - ${duration}ms - cache: ${cached ? 'hit' : 'miss'}`)
}

const getMetrics = async (input) => {
  const { tenant, endpoint, data } = input

  const dataCached = data.filter(d => d.cached)
  const dataDirect = data.filter(d => !d.cached)

  const totalCached = dataCached.length
  const totalDirect = dataDirect.length

  const avgCached = totalCached > 0 ? Math.round(dataCached.reduce((acc, curr) => acc + curr.duration, 0) / totalCached) : 0
  const avgDirect = totalDirect > 0 ? Math.round(dataDirect.reduce((acc, curr) => acc + curr.duration, 0) / totalDirect) : 0

  log(tenant, `RESULTS - CACHED :: ${endpoint}: ${totalCached} requests, avg: ${avgCached}ms`, true)
  log(tenant, `RESULTS - DIRECT :: ${endpoint}: ${totalDirect} requests, avg: ${avgDirect}ms`, true)
}

const main = async () => {
  const promises = []

  for (const tenant in tenants) {
    results[tenant] = {}

    if (scope === 'all' || scope === 'stories') {
      promises.push(handleRequest(tenant, '/v2/Stories').then(getMetrics))

      promises.push(handleRequest(tenant, '/v2/Stories/related').then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/Stories/related', { storyId: tenants[tenant].storyID }).then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/Stories/related', { sportId: tenants[tenant].sportID }).then(getMetrics))

      promises.push(handleRequest(tenant, '/v2/Stories/games', { storiesIds: tenants[tenant].storyID }).then(getMetrics))
      promises.push(handleRequest(tenant, `/v2/Stories/${tenants[tenant].storyID}/next-game`).then(getMetrics))

      promises.push(handleRequest(tenant, '/v2/Archives', { sportId: tenants[tenant].sportID }).then(getMetrics))
    }
    
    if (scope === 'all' || scope === 'schedule') {
      promises.push(handleRequest(tenant, '/v2/Ticketing/next-events', { sportId: tenants[tenant].sportID }).then(getMetrics))

      promises.push(handleRequest(tenant, `/v2/Calendar/previews/from/${config.date.start}/to/${config.date.end}`, {}, 60 * 5).then(getMetrics))

      promises.push(handleRequest(tenant, '/v2/EventsResults/results', {}, 60 * 5).then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/EventsResults/upcoming', { sportId: tenants[tenant].sportID }, 60 * 5).then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/EventsResults/upcoming', {}, 60 * 5).then(getMetrics))
    }
    
    if (scope === 'all' || scope === 'roster') {
      promises.push(handleRequest(tenant, '/v2/Rosters', { sportId: tenants[tenant].sportID }, 60 * 5).then(getMetrics))
      promises.push(handleRequest(tenant, `/v2/Rosters/bySport/${tenants[tenant].sportSlug}`, {}, 60 * 5).then(getMetrics))  
      promises.push(handleRequest(tenant, `/v2/Rosters/${tenants[tenant].rosterID}`, {}, 60 * 5).then(getMetrics))

      promises.push(handleRequest(tenant, `/v2/Players/roster/bio/${tenants[tenant].rosterPlayerID}`, {}).then(getMetrics))

      promises.push(handleRequest(tenant, `/v2/Stats/${tenants[tenant].sportSlug}/game-leaders`, { storyId: tenants[tenant].storyID }).then(getMetrics))

      promises.push(handleRequest(tenant, '/v2/Staff', {}).then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/Staff/supportStaff', {}).then(getMetrics))
      promises.push(handleRequest(tenant, '/v2/Staff/coaches/filters/seasons', {}).then(getMetrics))
      promises.push(handleRequest(tenant, `/v2/Staff/coaches/history/overall/${tenants[tenant].sportID}`, {}).then(getMetrics))
    }
  }

  await Promise.all(promises)

  console.log('DONE')
}

await main()
