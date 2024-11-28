const fetch = require('node-fetch')
const { baseURL, version, tenant } = require("../../config")

const getFiltersSeasons = async () => {
    return await fetch(`${baseURL}/${version}/PressClips/filters/seasons`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFiltersSeasons
};