const fetch = require('node-fetch');
const { sportID, baseURL, version, tenant, seasonID } = require('../../config')

const getStandingsBySportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getStandings_missingSportId_missingSeasonId = async () => {
    return await fetch(`${baseURL}/${version}/Season/standings`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getStandingsBySeasonId = async () => {
    const queryString = new URLSearchParams({
        ['seasonId']: seasonID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getStandingsByInvalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getStandingsByInvalidSeasonId = async () => {
    const queryString = new URLSearchParams({
        ['seasonId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getStandingsBySportIdWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getStandingsBySeasonIdWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['seasonId']: seasonID,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Season/standings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getStandingsBySportId,
    getStandings_missingSportId_missingSeasonId,
    getStandingsBySeasonId,
    getStandingsByInvalidSportId,
    getStandingsByInvalidSeasonId,
    getStandingsBySportIdWithSingleQuery,
    getStandingsBySeasonIdWithSingleQuery
}