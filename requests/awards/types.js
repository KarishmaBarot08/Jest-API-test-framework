const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getTypes = async () => {
    return await fetch(`${baseURL}/${version}/Awards/types`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTypes
};