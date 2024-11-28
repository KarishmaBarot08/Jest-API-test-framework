const fetch = require('node-fetch')
const { baseURL, tenant, version, startDATE } = require('../../config')

const getMonth = async () => {
    const queryString = new URLSearchParams({
        ['date']: startDATE
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/month?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getMonthWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['date']: startDATE,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/month?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getMonth,
    getMonthWithSingleQuery
};