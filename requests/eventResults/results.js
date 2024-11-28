const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')


const getResults = async () => {
    return await fetch(`${baseURL}/${version}/EventsResults/results`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })

};
const getResults_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/EventsResults/results`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })

};
const getResultsWithMultiQuery = async (param1, value1, param2, value2) => {
    const queryString = new URLSearchParams({
        [param1]: value1,
        [param2]: value2
    }).toString();

    const response = await fetch(`${baseURL}/${version}/EventsResults/results?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};

const getResultsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();

    const response = await fetch(`${baseURL}/${version}/EventsResults/results?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};



module.exports = {
    getResults,
    getResults_invalidTenant,
    getResultsWithMultiQuery,
    getResultsWithSingleQuery
};