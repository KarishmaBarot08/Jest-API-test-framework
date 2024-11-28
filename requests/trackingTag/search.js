const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSearch = async () => {
    return await fetch(`${baseURL}/${version}/TrackingTag/search`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSearch
};