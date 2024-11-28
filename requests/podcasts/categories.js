const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getCategories = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/categories`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getCategories
};