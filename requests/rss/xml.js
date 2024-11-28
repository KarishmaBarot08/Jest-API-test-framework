const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getXml = async () => {
    return await fetch(`${baseURL}/${version}/Rss/xml`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getXml
};