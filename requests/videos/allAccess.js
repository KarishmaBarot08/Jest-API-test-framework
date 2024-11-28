const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getAllAccess = async () => {
    return await fetch(`${baseURL}/${version}/Videos/all-access`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getAllAccessWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/Videos/all-access?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getAllAccess,
    getAllAccessWithSingleQuery
};