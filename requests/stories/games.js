const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getGames = async () => {
    return await fetch(`${baseURL}/${version}/Stories/games`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getGames_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories/games`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getGamesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stories/games?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getGames,
    getGames_invalidTenant,
    getGamesWithSingleQuery
};