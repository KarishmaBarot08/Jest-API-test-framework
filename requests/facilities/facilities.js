const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getFacilities = async () => {
    return await fetch(`${baseURL}/${version}/Facilities`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getFacilitiesWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Facilities?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getFacilities,
    getFacilitiesWithSingleQuery
};