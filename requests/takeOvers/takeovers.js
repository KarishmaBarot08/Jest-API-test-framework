const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getTakeOvers = async () => {
    return await fetch(`${baseURL}/${version}/Takeovers`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTakeOvers
};