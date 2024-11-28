import { getStoryID, getSportIDandSlug, getRosterIDandPlayerID } from './helpers.js'

export const envs = ['staging', 'prod']

export const scopes = ['all', 'stories', 'schedule', 'roster']

export const baseURL = {
  staging: 'https://api.staging.sidearmdev.com/api',
  prod: 'https://api.launch.sidearmdev.com/api'
}

export const tenants = {
  staging: {
    'umichigan-th': {},
    'libertyuni-th': {}
  },
  prod: {
    'olemiss': {},
    'iub': {},
    'syracuse': {},
    'libertyuni': {},
    'umichigan': {},
    'uillinois': {}
  }
}

export const init = async (baseURL, tenant) => {
  const { sportID, sportSlug } = await getSportIDandSlug(baseURL, tenant)
  const storyID = await getStoryID(baseURL, tenant, sportID)
  const { rosterID, rosterPlayerID } = await getRosterIDandPlayerID(baseURL, tenant)

  return { storyID, sportID, sportSlug, rosterID, rosterPlayerID }
}

export const date = {
  start: '2024-06-01',
  end: '2024-12-31'
}
