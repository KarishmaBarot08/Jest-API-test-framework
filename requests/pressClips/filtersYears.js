const fetch = require('node-fetch')
const { baseURL, version, tenant } = require("../../config")

const getFiltersYears = async () => {
    return await fetch(`${baseURL}/${version}/PressClips/filters/years`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFiltersYears
};