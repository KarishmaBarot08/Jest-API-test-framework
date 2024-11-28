const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getGlobal = async () => {
    return await fetch(`${baseURL}/${version}/ConferenceStandings/global`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getGlobal
};