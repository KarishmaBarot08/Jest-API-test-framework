const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../../config')

const getPageLocation = async () => {
    return await fetch(`${baseURL}/${version}/Ticketing/settings/page-location`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getPageLocation
};