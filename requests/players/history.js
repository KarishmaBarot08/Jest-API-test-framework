const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getHistory = async () => {
    return await fetch(`${baseURL}/${version}/Players/history`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getHistoryWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Players/history?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getHistory,
    getHistoryWithSingleQuery
};