const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getStaff = async () => {
    return await fetch(`${baseURL}/${version}/staff`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getStaff_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/staff`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getStaffWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Staff?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
}
module.exports = {
    getStaff,
    getStaff_invalidTenant,
    getStaffWithSingleQuery
};