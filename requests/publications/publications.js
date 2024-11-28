const fetch = require("node-fetch")
const { baseURL, tenant, version } = require('../../config')

const getPublications = async () => {
    return await fetch(`${baseURL}/${version}/Publications`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getPublications
};