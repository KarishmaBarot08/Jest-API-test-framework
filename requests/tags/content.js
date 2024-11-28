const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getContent = async () => {
    return await fetch(`${baseURL}/${version}/Tags/content`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getContentWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Tags/content?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getContent,
    getContentWithSingleQuery
};