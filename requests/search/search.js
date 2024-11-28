const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getSearch = async () => {
    return await fetch(`${baseURL}/${version}/Search`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSearch
};