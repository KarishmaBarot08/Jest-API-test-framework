const fetch = require('node-fetch')
const { baseURL, tenant, storyID, version } = require('../../config')

const getNextGame = async () => {
    return await fetch(`${baseURL}/${version}/Stories/${storyID}/next-game`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getNextGame_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories/${storyID}/next-game`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getNextGame_invalidStoryId = async () => {
    return await fetch(`${baseURL}/${version}/Stories/a/next-game`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getNextGame,
    getNextGame_invalidTenant,
    getNextGame_invalidStoryId
};