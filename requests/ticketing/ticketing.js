const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getTicketing = async () => {
    return await fetch(`${baseURL}/${version}/Ticketing`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTicketing
};