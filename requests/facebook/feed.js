const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getFeed = async () => {
    return await fetch(`${baseURL}/${version}/Facebook/feed`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFeed
};