const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getRSS = async () => {
    return await fetch(`${baseURL}/${version}/Rss`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getRSS
};