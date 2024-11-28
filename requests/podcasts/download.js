const fetch = require('node-fetch')
const { baseURL, tenant, version, podcastID } = require('../../config')

const getDownload = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/${podcastID}/download`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
const getDownload_invalidPodcastId = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/a/download`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getDownload,
    getDownload_invalidPodcastId
};