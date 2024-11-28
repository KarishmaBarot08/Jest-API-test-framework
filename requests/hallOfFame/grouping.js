const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getGrouping = async () => {
    return await fetch(`${baseURL}/${version}/HallOfFame/grouping`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getGrouping
};