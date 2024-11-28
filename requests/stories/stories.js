const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getStories = async () => {
    return await fetch(`${baseURL}/${version}/Stories`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getStories_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};

const getStoriesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Stories?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};

module.exports = {
    getStories,
    getStories_invalidTenant,
    getStoriesWithSingleQuery
};