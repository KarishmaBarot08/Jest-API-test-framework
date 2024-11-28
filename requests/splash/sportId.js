const fetch = require("node-fetch")
const { baseURL, version, sportID, tenant } = require('../../config')

const getSportId = async () => {
    return await fetch(`${baseURL}/${version}/Splash/${sportID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getSportId_invalidSportId = async () => {
    return await fetch(`${baseURL}/${version}/Splash/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSportId,
    getSportId_invalidSportId
};