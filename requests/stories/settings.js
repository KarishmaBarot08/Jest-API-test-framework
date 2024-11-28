const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSettings = async () => {
    return await fetch(`${baseURL}/${version}/Stories/settings`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getSettings_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories/settings`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getSettings,
    getSettings_invalidTenant
};