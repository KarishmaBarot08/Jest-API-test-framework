const fetch = require("node-fetch")
const { baseURL, version, tenant } = require('../../config')

const getLatest = async () => {
    return await fetch(`${baseURL}/${version}/WePlayed/latest`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getLatestWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/WePlayed/latest?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getLatest,
    getLatestWithSingleQuery
};