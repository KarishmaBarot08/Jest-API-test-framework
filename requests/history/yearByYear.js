const { baseURL, tenant, version, sportID } = require('../../config')
const fetch = require('node-fetch')

const getYearByYear = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: sportID
    }).toString();
    const response = await fetch(`${baseURL}/${version}/History/YearByYear?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response
};
const getYearByYear_invalidSportId = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 'a'
    }).toString();
    const response = await fetch(`${baseURL}/${version}/History/YearByYear?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response
};
module.exports = {
    getYearByYear,
    getYearByYear_invalidSportId
};