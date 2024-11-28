const fetch = require('node-fetch')
const { baseURL, tenant, rosterID, version } = require('../../config')

const getRosterId_invalidRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/${rosterID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterId_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/${rosterID}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getRosterId,
    getRosterId_invalidRosterId,
    getRosterId_invalidTenant
};