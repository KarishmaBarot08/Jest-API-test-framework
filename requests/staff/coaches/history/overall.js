const fetch = require('node-fetch')
const { baseURL, tenant, sportID, version } = require('../../../../config')

const getOverall = async () => {
    return await fetch(`${baseURL}/${version}/Staff/coaches/history/overall/${sportID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getOverall_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Staff/coaches/history/overall/${sportID}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getOverall,
    getOverall_invalidTenant
};