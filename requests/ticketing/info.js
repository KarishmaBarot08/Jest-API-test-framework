const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getInfo = async () => {
    return await fetch(`${baseURL}/${version}/Ticketing/info`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getInfo
}