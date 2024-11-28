const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSupportStaff = async () => {
    return await fetch(`${baseURL}/${version}/Staff/supportStaff`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getSupportStaff_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Staff/supportStaff`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getSupportStaffWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Staff/supportStaff?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getSupportStaff,
    getSupportStaff_invalidTenant,
    getSupportStaffWithSingleQuery
}