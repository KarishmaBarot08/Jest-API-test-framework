const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getInstagram = async () => {
    return await fetch(`${baseURL}/${version}/Instagram`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getInstagramWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Instagram?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response
};
module.exports = {
    getInstagram,
    getInstagramWithSingleQuery
};