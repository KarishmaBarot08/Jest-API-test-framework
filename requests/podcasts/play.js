const fetch = require('node-fetch')
const { baseURL, tenant, version, podcastID } = require('../../config')

const getPlay = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/${podcastID}/play`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
const getPlay_invalidPodcastId = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/a/play`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getPlay,
    getPlay_invalidPodcastId
};