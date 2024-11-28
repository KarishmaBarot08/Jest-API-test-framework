const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSeo = async () => {
    return await fetch(`${baseURL}/${version}/Seo`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSeo
};