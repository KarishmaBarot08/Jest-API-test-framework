const fetch = require('node-fetch')
const { baseURL, tenant, scheduleID, version } = require('../../config')

const getRecord = async () => {
    return await fetch(`${baseURL}/${version}/Schedule/${scheduleID}/Record`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getRecord_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Schedule/${scheduleID}/Record`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
const getRecord_invalidScheduleId = async () => {
    return await fetch(`${baseURL}/${version}/Schedule/a/Record`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRecord,
    getRecord_invalidTenant,
    getRecord_invalidScheduleId
};