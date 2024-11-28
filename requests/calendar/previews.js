const fetch = require('node-fetch')
const { baseURL, tenant, startDATE, endDATE, version } = require('../../config')

const getPreviews = async () => {
    return await fetch(`${baseURL}/${version}/Calendar/previews/from/${startDATE}/to/${endDATE}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPreviews_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Calendar/previews/from/${startDATE}/to/${endDATE}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getPreviewsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/previews/from/${startDATE}/to/${endDATE}?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getPreviews,
    getPreviews_invalidTenant,
    getPreviewsWithSingleQuery
};