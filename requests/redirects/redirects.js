const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getRedirects = async () => {
    return await fetch(`${baseURL}/${version}/Redirects`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRedirects
};