const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getLiveStats = async () => {
    return await fetch(`${baseURL}/${version}/LiveStats`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getLiveStats
};