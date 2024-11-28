const fetch = require("node-fetch")
const { baseURL, version, tenant } = require('../../config')

const getSocialAccounts = async () => {
    return await fetch(`${baseURL}/${version}/SocialAccounts`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSocialAccounts
};