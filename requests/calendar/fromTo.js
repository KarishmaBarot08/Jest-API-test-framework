const fetch = require('node-fetch')
const { baseURL, tenant, version, startDATE, endDATE } = require('../../config')

const getFromTo = async () => {
    return await fetch(`${baseURL}/${version}/Calendar/from/${startDATE}/to/${endDATE}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getFromToWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/from/${startDATE}/to/${endDATE}?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getFromTo,
    getFromToWithSingleQuery
}