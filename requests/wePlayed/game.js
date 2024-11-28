const fetch = require("node-fetch")
const { baseURL, version, tenant, gameID } = require('../../config')

const getGame = async () => {
    const queryString = new URLSearchParams({
        ['gameId']: gameID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/WePlayed/game?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getGameWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['gameId']: gameID,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/WePlayed/game?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getGame_invalidGameId = async () => {
    const queryString = new URLSearchParams({
        ['gameId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/WePlayed/game?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getGame_missingGameId = async () => {
    return await fetch(`${baseURL}/${version}/WePlayed/game`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getGame,
    getGameWithSingleQuery,
    getGame_invalidGameId,
    getGame_missingGameId
};