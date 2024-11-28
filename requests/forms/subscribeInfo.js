const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSubscribeInfo = async () => {
    return await fetch(`${baseURL}/${version}/Forms/subscribe/info`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSubscribeInfo
};