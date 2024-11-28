const fetch = require('node-fetch')
const { baseURL, tenant, version, podcastID } = require('../../config')

const getRecordProgress = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/${podcastID}/recordProgress`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
const getRecordProgress_invalidPodcastId = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/a/recordProgress`, {
        method: 'POST',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRecordProgress,
    getRecordProgress_invalidPodcastId
};