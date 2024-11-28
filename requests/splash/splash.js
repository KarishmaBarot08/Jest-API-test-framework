const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getSplash = async () => {
    return await fetch(`${baseURL}/${version}/Splash`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSplash
};