const fetch = require('node-fetch')
const { baseURL, tenant, version, rosterID } = require('../../config')

const getRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Hidden/rosters/${rosterID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterId_invalidRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Hidden/rosters/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRosterId,
    getRosterId_invalidRosterId
};