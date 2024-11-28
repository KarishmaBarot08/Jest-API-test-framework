const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getNavigation = async () => {
    return await fetch(`${baseURL}/${version}/Navigation`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getNavigation
};