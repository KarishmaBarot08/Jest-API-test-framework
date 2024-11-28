const fetch = require('node-fetch')
const { baseURL, tenant, rosterID, version } = require('../../config')

const getRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/${rosterID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterId_invalidRosterId = async () => {
    return await fetch(`${baseURL}/${version}/Players/roster/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRosterIdWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Players/roster/${rosterID}?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getRosterId,
    getRosterId_invalidRosterId,
    getRosterIdWithSingleQuery
};