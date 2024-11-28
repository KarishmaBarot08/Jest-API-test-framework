const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getFilters = async () => {
    return await fetch(`${baseURL}/${version}/Tags/filters`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFilters
};