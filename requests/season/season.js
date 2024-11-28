const fetch = require("node-fetch")
const { baseURL, version, tenant, sportID } = require("../../config")

const getSeason_missingSportId = async () => {
    return await fetch(`${baseURL}/${version}/Season`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getSeason = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
}
const getSeason_invalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
}
module.exports = {
    getSeason,
    getSeason_missingSportId,
    getSeason_invalidSportId
};