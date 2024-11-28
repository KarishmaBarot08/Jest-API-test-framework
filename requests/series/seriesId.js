const fetch = require("node-fetch");
const { baseURL, version, tenant, seriesID } = require("../../config")

const getSeriesId = async () => {
    const response = await fetch(`${baseURL}/${version}/Series/${seriesID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
const getSeriesId_invalidSeriesId = async () => {
    const response = await fetch(`${baseURL}/${version}/Series/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
    return response;
};
module.exports = {
    getSeriesId,
    getSeriesId_invalidSeriesId
};