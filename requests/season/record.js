const fetch = require("node-fetch")
const { baseURL, version, seasonID, tenant } = require("../../config")

const getRecord = async () => {
    return await fetch(`${baseURL}/${version}/Season/${seasonID}/record`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRecord_invalidSeasonId = async () => {
    return await fetch(`${baseURL}/${version}/Season/a/record`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRecord,
    getRecord_invalidSeasonId
};