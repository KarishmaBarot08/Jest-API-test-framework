const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getYoutube = async () => {
    return await fetch(`${baseURL}/${version}/Videos/youtube`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getYoutubeWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Videos/youtube?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getYoutube,
    getYoutubeWithSingleQuery
};