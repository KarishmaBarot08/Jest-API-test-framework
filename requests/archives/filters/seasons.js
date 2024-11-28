const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../../config')

const getSeasons = async () => {
    return await fetch(`${baseURL}/${version}/Archives/filters/seasons`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSeasons
};