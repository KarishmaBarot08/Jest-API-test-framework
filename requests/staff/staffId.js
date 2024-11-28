const fetch = require('node-fetch')
const { baseURL, tenant, version, staffID } = require('../../config')

const getStaffId = async () => {
    return await fetch(`${baseURL}/${version}/Staff/${staffID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getStaffId_invalidStaffId = async () => {
    return await fetch(`${baseURL}/${version}/Staff/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getStaffId,
    getStaffId_invalidStaffId
};