const fetch = require("node-fetch");
const { sportID, baseURL, version, tenant } = require("../../config")

const getRelated = async () => {
    const response = await fetch(`${baseURL}/${version}/Season/${sportID}/related`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getRelated_invalidSportId = async () => {
    const response = await fetch(`${baseURL}/${version}/Season/a/related`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getRelated,
    getRelated_invalidSportId
};