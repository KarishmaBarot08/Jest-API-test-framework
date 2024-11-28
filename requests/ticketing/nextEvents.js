const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getNextEvents = async () => {
    return await fetch(`${baseURL}/${version}/Ticketing/next-events`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getNextEvents
};