const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getPodcasts = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPodcastsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Podcasts?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getPodcasts,
    getPodcastsWithSingleQuery
};