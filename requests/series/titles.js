const fetch = require("node-fetch")
const { baseURL, version, tenant } = require('../../config')

const getTitles = async () => {
    return await fetch(`${baseURL}/${version}/Series/titles`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTitles
};