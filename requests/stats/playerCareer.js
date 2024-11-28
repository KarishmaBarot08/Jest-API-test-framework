const fetch = require("node-fetch")
const { baseURL, version, sportNameSlug, tenant, rosterPlayerID } = require('../../config')

const getPlayerCareer_noPlayerId_noRosterPlayerId = async () => {
    return await fetch(`${baseURL}/${version}/Stats/${sportNameSlug}/player/career`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPlayerCareerByRosterPlayerId = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: rosterPlayerID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/${sportNameSlug}/player/career?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getPlayerCareerByRosterPlayerId_invalidRosterPlayerId = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/${sportNameSlug}/player/career?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getPlayerCareerByPlayerId = async () => {
    const queryString = new URLSearchParams({
        ['playerId']: 1445
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/soccer/player/career?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getPlayerCareerByPlayerId_invalidPlayerId = async () => {
    const queryString = new URLSearchParams({
        ['playerId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/soccer/player/career?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getPlayerCareerByRosterPlayerId_invalidSportSlug = async () => {
    const queryString = new URLSearchParams({
        ['rosterPlayerId']: rosterPlayerID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Stats/swimming/player/career?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getPlayerCareer_noPlayerId_noRosterPlayerId,
    getPlayerCareerByRosterPlayerId,
    getPlayerCareerByPlayerId,
    getPlayerCareerByRosterPlayerId_invalidSportSlug,
    getPlayerCareerByPlayerId_invalidPlayerId,
    getPlayerCareerByRosterPlayerId_invalidRosterPlayerId
};