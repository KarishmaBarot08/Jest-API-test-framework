const fetch = require('node-fetch')
const { baseURL, tenant, sportID, version } = require('../../config')

const getSub = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Navigation/sub?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getSub_invalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Navigation/sub?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getSub,
    getSub_invalidSportId
};