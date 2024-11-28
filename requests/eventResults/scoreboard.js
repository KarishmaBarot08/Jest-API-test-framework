const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')


const getScoreboard = async () => {
    return await fetch(`${baseURL}/${version}/EventsResults/scoreboard`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getScoreboardWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/EventsResults/scoreboard?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getScoreboardWithMultiQuery = async (param1, value1, param2, value2) => {
    const queryString = new URLSearchParams({
        [param1]: value1,
        [param2]: value2
    }).toString();
    const response = await fetch(`${baseURL}/${version}/EventsResults/scoreboard?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getScoreboard,
    getScoreboardWithSingleQuery,
    getScoreboardWithMultiQuery
};