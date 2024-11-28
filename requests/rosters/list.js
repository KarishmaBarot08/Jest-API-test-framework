const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getList = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/list`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getList_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/list`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getListWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Rosters/list?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response
};
module.exports = {
    getList,
    getList_invalidTenant,
    getListWithSingleQuery
};