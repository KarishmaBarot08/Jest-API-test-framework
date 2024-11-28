const fetch = require('node-fetch')
const { baseURL, tenant, sportTITLE, version } = require('../../config')

const getBySport = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/bySport/${sportTITLE}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getBySport_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Rosters/bySport/${sportTITLE}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};

module.exports = {
    getBySport,
    getBySport_invalidTenant
};