const fetch = require('node-fetch')
const { baseURL, tenant, version, sportID } = require('../../config')

const getOpponentList = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/list/${sportID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getOpponentList_invalidSportId = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/list/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getOpponentListWithSingleQuery = async (param, value) => {
    const queryString = new URLSearchParams({
        [param]: value
    }).toString();
    const response = await fetch(`${baseURL}/${version}/OpponentHistory/list/${sportID}?${queryString}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    });
    return response;
};
module.exports = {
    getOpponentList,
    getOpponentList_invalidSportId,
    getOpponentListWithSingleQuery
};