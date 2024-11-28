const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getTags = async () => {
    return await fetch(`${baseURL}/${version}/Tags`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTags
};