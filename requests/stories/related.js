const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getStoriesRelated = async () => {
    return await fetch(`${baseURL}/${version}/Stories/related`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};

const getStoriesRelated_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories/related`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getStoriesRelatedWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Stories/related?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getStoriesRelated,
    getStoriesRelated_invalidTenant,
    getStoriesRelatedWithSingleQuery
};