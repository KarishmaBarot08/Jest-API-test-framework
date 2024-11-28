import { resolve } from 'path'
import { existsSync } from 'fs'
import { readFile } from 'fs/promises'

import { envs, tenants } from './config.js'

const args = process.argv.slice(2)
const env = args[0]
const path = args[1]

// Check if the environment is valid
if (!envs.includes(env)) {
  console.error(`Invalid environment: ${env}`)
  process.exit(1)
}

const patterns = {
  'archive.sport': /^\/v2\/Archives\?sportId=/,
  'calendar.previews': /^\/v2\/Calendar\/previews\/from\/2024-06-01\/to\/2024-12-31$/,
  'eventresults.results': /^\/v2\/EventsResults\/results$/,
  'eventresults.upcoming-sport': /^\/v2\/EventsResults\/upcoming\?sportId=/,
  'eventresults.upcoming': /^\/v2\/EventsResults\/upcoming$/,
  'players.roster-bio': /^\/v2\/Players\/roster\/bio\/\d+$/,
  'rosters.sport': /^\/v2\/Rosters\?sportId=/,
  'rosters.id': /^\/v2\/Rosters\/\d+/,
  'roster.sport': /^\/v2\/Rosters\/bySport\/\w+/,
  'staff.coaches': /^\/v2\/Staff\/coaches\/history\/overall\/\d+$/,
  'staff.seasons': /^\/v2\/Staff\/coaches\/filters\/seasons$/,
  'staff.support': /^\/v2\/Staff\/supportStaff$/,
  'staff.list': /^\/v2\/Staff$/,
  'stats.game-leaders': /^\/v2\/Stats\/\w+\/game-leaders\?storyId=/,
  'stories.next-game': /^\/v2\/Stories\/\d+\/next-game$/,
  'stories.games': /^\/v2\/Stories\/games\?storiesIds=/,
  'stories.related-sport': /^\/v2\/Stories\/related\?sportId=/,
  'stories.related-story': /^\/v2\/Stories\/related\?storyId=/,
  'stories.related': /^\/v2\/Stories\/related$/,
  'stories.list': /^\/v2\/Stories$/,
  'ticketing.next-event': /^\/v2\/Ticketing\/next-events\?sportId=/
}

const main = async () => {
  const data = {}

  for (const tenant in tenants[env]) {
    const filePath = resolve(path, `${env}.${tenant}.result.log`)
    
    if (!existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`)
    }

    const content = await readFile(filePath, 'utf-8')
    const lines = content.split('\n')

    for (const line of lines) {
      if (line === '') {
        continue
      }
      const cols = line.split(' ')

      const endpoint = cols[5].slice(0, -1)
      let api = ''
      for (const [key, pattern] of Object.entries(patterns)) {
        if (pattern.test(endpoint)) {
          api = key
          break
        }
      }
      if (api === '') {
        console.error(`API not found for endpoint: ${endpoint}`)
        continue
      }

      const cacheStatus = cols[3]
      const requests = parseInt(cols[6])
      const responseTime = parseInt(cols[9].slice(0, -2))

      if (!data[api]) {
        data[api] = {}
      }

      if (!data[api][tenant]) {
        data[api][tenant] = {}
      }

      data[api][tenant][cacheStatus] = { tenant, cacheStatus, endpoint, requests, responseTime }
    }
  }

  const apiList = Object.keys(data)
  const tenantList = Object.keys(tenants[env])

  let header = 'Endpoint'
  for (const tenant of tenantList) {
    header += `,,Tenant,Path,"Req Cache Hit","Res Time Cache Hit","Req Cache Miss","Res Time Cache Miss"`
  }
  console.log(header)

  for (const api of apiList) {
    let row = `${api}`
    for (const tenant of tenantList) {
      const cacheHit = data[api][tenant]['CACHED']
      const cacheMiss = data[api][tenant]['DIRECT']

      row += `,,"${tenant}","${data[api][tenant]['DIRECT'].endpoint}",${cacheHit.requests},${cacheHit.responseTime},${cacheMiss.requests},${cacheMiss.responseTime}`
    }
    console.log(row)
  }
}

await main()
