const fetch = require('node-fetch')
const { baseURL, tenant, rosterPlayerID, version } = require('../../config')

const getRosterBio = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/bio/${rosterPlayerID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterBio_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/bio/${rosterPlayerID}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getRosterBio_invalidRosterPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/bio/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterBio_missingRosterPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/bio`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRosterBio,
    getRosterBio_invalidTenant,
    getRosterBio_invalidRosterPlayerId,
    getRosterBio_missingRosterPlayerId
}