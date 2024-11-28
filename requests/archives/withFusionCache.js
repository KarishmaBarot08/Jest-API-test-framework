const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getWithFusionCache = async () => {
    return await fetch(`${baseURL}/${version}/Archives/with-fusion-cache`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getWithFusionCacheWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Archives/with-fusion-cache?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getWithFusionCache,
    getWithFusionCacheWithSingleQuery
};