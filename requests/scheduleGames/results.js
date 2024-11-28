const fetch = require("node-fetch")
const { baseURL, tenant, version, gameID } = require('../../config')

const getResults = async () => {
    return await fetch(`${baseURL}/${version}/ScheduleGames/${gameID}/results`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getResults_invalidGameId = async () => {
    return await fetch(`${baseURL}/${version}/ScheduleGames/a/results`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getResults,
    getResults_invalidGameId
};