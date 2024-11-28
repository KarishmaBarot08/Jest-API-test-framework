const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getRandom = async () => {
    return await fetch(`${baseURL}/${version}/Players/random`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRandomWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Players/random?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getRandom,
    getRandomWithSingleQuery
};