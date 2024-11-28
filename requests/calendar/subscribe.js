const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSubscribe = async () => {
    const queryString = new URLSearchParams({
        ['type']: 'CSV'
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Calendar/subscribe?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getSubscribe_invalidType = async () => {
    const queryString = new URLSearchParams({
        ['sportId']: 1
    }).toString();

    const response = await fetch(`${baseURL}/${version}/Calendar/subscribe?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getSubscribe,
    getSubscribe_invalidType
};