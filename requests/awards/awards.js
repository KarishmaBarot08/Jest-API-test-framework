const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getAwards = async () => {
    return await fetch(`${baseURL}/${version}/Awards`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getAwardsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Awards?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getAwards,
    getAwardsWithSingleQuery
};