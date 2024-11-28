const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getGalleries = async () => {
    return await fetch(`${baseURL}/${version}/ImageGalleries`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getGalleriesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/ImageGalleries?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response
};
module.exports = {
    getGalleries,
    getGalleriesWithSingleQuery
};