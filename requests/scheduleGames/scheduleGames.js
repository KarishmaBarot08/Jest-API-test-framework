const fetch = require("node-fetch")
const { baseURL, tenant, version, gameID } = require('../../config')

const getScheduleGames = async () => {
    return await fetch(`${baseURL}/${version}/ScheduleGames/${gameID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getScheduleGames_invalidGameId = async () => {
    return await fetch(`${baseURL}/${version}/ScheduleGames/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getScheduleGames,
    getScheduleGames_invalidGameId
};