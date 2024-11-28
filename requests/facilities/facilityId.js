const fetch = require('node-fetch')
const { baseURL, tenant, version, facilityID, } = require('../../config')

const getFacilityId = async () => {
    return await fetch(`${baseURL}/${version}/Facilities/${facilityID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getFacilityId_invalidFacilityId = async () => {
    return await fetch(`${baseURL}/${version}/Facilities/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFacilityId,
    getFacilityId_invalidFacilityId
};