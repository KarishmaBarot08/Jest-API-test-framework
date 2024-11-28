const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../../config')

const getSports = async () => {
    return await fetch(`${baseURL}/${version}/Archives/filters/sports`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSports
};