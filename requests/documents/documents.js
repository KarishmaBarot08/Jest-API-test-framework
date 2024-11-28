const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getDocuments = async () => {
    return await fetch(`${baseURL}/${version}/Documents`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getDocumentsWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Documents?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getDocuments,
    getDocumentsWithSingleQuery
};