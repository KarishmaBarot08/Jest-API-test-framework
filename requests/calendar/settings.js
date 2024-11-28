const fetch = require('node-fetch')
const { baseURL, tenant, version, startDATE } = require('../../config')

const getSettings = async () => {
    const queryString = new URLSearchParams({
        ['date']: startDATE
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/settings?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getSettings
};