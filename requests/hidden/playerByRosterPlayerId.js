const fetch = require('node-fetch')
const { baseURL, tenant, version, rosterPlayerID } = require('../../config')

const getPlayerByRosterPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Hidden/players/roster/bio/${rosterPlayerID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPlayerByRosterPlayerId_invalidRosterPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Hidden/players/roster/bio/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getPlayerByRosterPlayerId,
    getPlayerByRosterPlayerId_invalidRosterPlayerId
};