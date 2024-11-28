const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config')

const getUpcoming = async () => {
    return await fetch(`${baseURL}/${version}/EventsResults/upcoming`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getUpcoming_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/EventsResults/upcoming`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getUpcomingWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/EventsResults/upcoming?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getUpcomingWithMultiQuery = async (param1, value1, param2, value2) => {
    const queryString = new URLSearchParams({
        [param1]: value1,
        [param2]: value2
    }).toString();
    const response = await fetch(`${baseURL}/${version}/EventsResults/upcoming?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getUpcoming,
    getUpcoming_invalidTenant,
    getUpcomingWithSingleQuery,
    getUpcomingWithMultiQuery
};