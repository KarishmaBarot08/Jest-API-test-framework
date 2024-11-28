const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getRss = async () => {
    return await fetch(`${baseURL}/${version}/Podcasts/rss`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRss
};