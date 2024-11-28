const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getArchives = async () => {
    return await fetch(`${baseURL}/${version}/Hidden/archives`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getArchivesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Hidden/archives?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getArchives,
    getArchivesWithSingleQuery
};