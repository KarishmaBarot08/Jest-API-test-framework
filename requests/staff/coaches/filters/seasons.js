const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../../../config')

const getSeasons = async () => {
    return await fetch(`${baseURL}/${version}/Staff/coaches/filters/seasons`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getSeasons_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Staff/coaches/filters/seasons`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getSeasons,
    getSeasons_invalidTenant
};