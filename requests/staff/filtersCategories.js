const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getFiltersCategories = async () => {
    return await fetch(`${baseURL}/${version}/Staff/filters/categories`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFiltersCategories
};