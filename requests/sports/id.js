const fetch = require('node-fetch')
const { baseURL, tenant, version, sportID } = require('../../config')

const getId = async () => {
    return await fetch(`${baseURL}/${version}/Sports/${sportID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getId_invalidSportId = async () => {
    return await fetch(`${baseURL}/${version}/Sports/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getId,
    getId_invalidSportId
}