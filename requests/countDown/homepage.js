const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getHomepage = async () => {
    return await fetch(`${baseURL}/${version}/Countdown/homepage`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getHomepage
};