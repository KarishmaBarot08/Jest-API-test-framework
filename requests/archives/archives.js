const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getArchives = async () => {
    return await fetch(`${baseURL}/${version}/Archives`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    });
};
const getArchives_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Archives`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getArchivesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Archives?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    });
    return response;
};
module.exports = {
    getArchives,
    getArchives_invalidTenant,
    getArchivesWithSingleQuery
}