const fetch = require('node-fetch')
const { baseURL, tenant, version, startDATE } = require('../../config')

const getPrint = async () => {
    const queryString = new URLSearchParams({
        ['date']: startDATE
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/print?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getPrintWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['date']: startDATE,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/print?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getPrint,
    getPrintWithSingleQuery
};