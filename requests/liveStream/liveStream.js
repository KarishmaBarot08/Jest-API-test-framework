const fetch = require('node-fetch')
const { baseURL, version, tenant, sportID } = require('../../config')

const getLiveStream = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/LiveStream?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getLiveStreamWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/LiveStream?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getLiveStream_invalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/LiveStream?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getLiveStream_missingSportId = async () => {
    return await fetch(`${baseURL}/${version}/LiveStream`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getLiveStream,
    getLiveStreamWithSingleQuery,
    getLiveStream_invalidSportId,
    getLiveStream_missingSportId
};