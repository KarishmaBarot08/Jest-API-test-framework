const fetch = require("node-fetch")
const { baseURL, version, rosterPlayerID, sportSLUG, seasonYEAR, tenant } = require('../../config')

const getBio = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: rosterPlayerID,
        ['sport']: sportSLUG,
        ['year']: seasonYEAR
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/bio?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getBio_invalidRosterPlayerId = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: 'a',
        ['sport']: sportSLUG,
        ['year']: seasonYEAR
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/bio?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getBio_invalidSportSlug = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: rosterPlayerID,
        ['sport']: 'a',
        ['year']: seasonYEAR
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/bio?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getBio_invalidYear = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: rosterPlayerID,
        ['sport']: sportSLUG,
        ['year']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/bio?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getBio_missingQueryParams = async () => {
    return await fetch(`${baseURL}/${version}/Stats/bio`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getBio,
    getBio_invalidRosterPlayerId,
    getBio_invalidSportSlug,
    getBio_invalidYear,
    getBio_missingQueryParams
};