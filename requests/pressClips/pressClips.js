const fetch = require('node-fetch')
const { baseURL, version, tenant } = require('../../config')

const getPressClips = async () => {
    return await fetch(`${baseURL}/${version}/PressClips`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPressClipsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/PressClips?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getPressClips,
    getPressClipsWithSingleQuery
};