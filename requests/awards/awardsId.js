const fetch = require('node-fetch')
const { baseURL, tenant, awardID, version } = require('../../config')

const getAwardsId = async () => {
    return await fetch(`${baseURL}/${version}/Awards/${awardID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getAwardsId_invalidAwardId = async () => {
    return await fetch(`${baseURL}/${version}/Awards/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getAwardsId,
    getAwardsId_invalidAwardId,
};