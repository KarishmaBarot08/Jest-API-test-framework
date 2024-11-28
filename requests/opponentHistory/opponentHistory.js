const fetch = require('node-fetch')
const { baseURL, tenant, version, sportID } = require('../../config')

const getOpponentHistory = async () => {
    const queryparam = new URLSearchParams({
        ['SportId']: sportID
    })
    const response = await fetch(`${baseURL}/${version}/OpponentHistory?${queryparam}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getOpponentHistory_invalidSportId = async () => {
    const queryparam = new URLSearchParams({
        ['SportId']: 'a'
    })
    const response = await fetch(`${baseURL}/${version}/OpponentHistory?${queryparam}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getOpponentHistoryWithSingleQuery = async (param, value) => {
    const queryparam = new URLSearchParams({
        ['SportId']: sportID,
        [param]: value
    })
    const response = await fetch(`${baseURL}/${version}/OpponentHistory?${queryparam}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getOpponentHistory,
    getOpponentHistoryWithSingleQuery,
    getOpponentHistory_invalidSportId
};