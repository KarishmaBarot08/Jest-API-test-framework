const fetch = require('node-fetch')
const { baseURL, tenant, version, startDATE, endDATE } = require('../../config')

const getEventsByDateRange = async () => {
    const queryString = new URLSearchParams({
        ['startDate']: startDATE,
        ['endDate']: endDATE
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/events/date-range?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getEventsByDateRangeWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        ['startDate']: startDATE,
        ['endDate']: endDATE,
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Calendar/events/date-range?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getEventsByDateRange,
    getEventsByDateRangeWithSingleQuery
}