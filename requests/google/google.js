const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getGoogle = async () => {
    return await fetch(`${baseURL}/${version}/Google`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getGoogle
};