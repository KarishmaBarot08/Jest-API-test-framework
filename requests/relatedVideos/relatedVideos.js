const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getRelatedVideos = async () => {
    return await fetch(`${baseURL}/${version}/RelatedVideos`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRelatedVideosWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();

    const response = await fetch(`${baseURL}/${version}/RelatedVideos?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
}
module.exports = {
    getRelatedVideos,
    getRelatedVideosWithSingleQuery
};