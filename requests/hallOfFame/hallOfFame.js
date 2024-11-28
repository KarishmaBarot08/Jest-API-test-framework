const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getHallOfFame = async () => {
    return await fetch(`${baseURL}/${version}/HallOfFame`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getHallOfFame
};