const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getGroupings = async () => {
    return await fetch(`${baseURL}/${version}/AllAmerican/groupings`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getGroupings
};