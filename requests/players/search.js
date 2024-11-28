const fetch = require('node-fetch')
const { baseURL, tenant, version, searchTEXT } = require('../../config')

const getSearch = async () => {
    const queryString = new URLSearchParams({
        ['searchText']: searchTEXT
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Players/search?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getSearch_missingSearchText = async () => {
    return await fetch(`${baseURL}/${version}/Players/search`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSearch,
    getSearch_missingSearchText
};