export const getStoryID = async (baseURL, tenant, sportID) => {
  const headers = { tenant }
  const url = baseURL + '/v2/Stories'

  const params = new URLSearchParams({ SportId: sportID })
  
  try {  
    const res = await fetch(url + `?${params.toString()}`, {
      method: 'GET',
      headers
    })
    const data = await res.json()

    const storyID = data.items[0].id
    return storyID
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const getSportIDandSlug = async (baseURL, tenant) => {
  const headers = { tenant }
  const url = baseURL + '/v2/Sports'
  
  try {  
    const res = await fetch(url, {
      method: 'GET',
      headers
    })
    const data = await res.json()

    const sportID = data[1].id
    const sportSlug = data[1].shortName
    return { sportID, sportSlug }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export const getRosterIDandPlayerID = async (baseURL, tenant) => {
  const headers = { tenant }
  const url = baseURL
  
  try {  
    const rosterRes = await fetch(url + '/v2/Rosters/active/list', {
      method: 'GET',
      headers
    })
    const rosterData = await rosterRes.json()

    const rosterID = rosterData[1].rosterId

    const playerRes = await fetch(url + '/v2/Players/roster/' + rosterID, {
      method: 'GET',
      headers
    })
    const playerData = await playerRes.json()

    const rosterPlayerID = playerData.items[0].rosterPlayerId

    return { rosterID, rosterPlayerID }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
