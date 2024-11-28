const fetch = require('node-fetch')
const { baseURL, tenant, sportID, version } = require('../../config')

const getRosters = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Rosters?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getRosters_invalidTenant = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Rosters?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
    return response;
};
const getRosters_missingTenant = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Rosters?${queryString}`)
    return response;
};
const getRosters_missingSportId = async () => {
    return await fetch(`${baseURL}/${version}/Rosters`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })

};
const getRostersWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Rosters?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getRosters,
    getRosters_invalidTenant,
    getRosters_missingTenant,
    getRosters_missingSportId,
    getRostersWithSingleQuery
}