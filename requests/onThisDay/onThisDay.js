const fetch = require('node-fetch')
const { baseURL, version, tenant } = require("../../config")

const getOnThisDay = async () => {
    return await fetch(`${baseURL}/${version}/OnThisDay`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getOnThisDay
};