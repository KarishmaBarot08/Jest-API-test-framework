const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSettings = async () => {
    return await fetch(`${baseURL}/${version}/Mobile/settings`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSettings
};