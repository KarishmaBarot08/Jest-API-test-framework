const fetch = require('node-fetch')
const { baseURL, version, tenant, playerID } = require('../../config')

const getMedia = async () => {
    return await fetch(`${baseURL}/${version}/Players/${playerID}/media`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getMedia_invalidPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Players/a/media`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getMediaWithSingleQuery = async (param,value) => {
    const queryString = new URLSearchParams({
            [param]:value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Players/${playerID}/media?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getMedia,
    getMedia_invalidPlayerId,
    getMediaWithSingleQuery
};