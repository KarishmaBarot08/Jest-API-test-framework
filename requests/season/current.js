const fetch = require("node-fetch");
const { sportID, baseURL, version, tenant } = require("../../config")

const getCurrent = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/current?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getCurrent_invalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/current?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getCurrent,
    getCurrent_invalidSportId
};