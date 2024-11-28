const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getActiveList = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/active/list`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getActiveList_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/active/list`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getActiveList,
    getActiveList_invalidTenant
};