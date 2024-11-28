const fetch = require('node-fetch')
const { baseURL, tenant, version, sportID, opponentID } = require('../../config')

const getOpponentBySportId = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/opponent/${sportID}/${opponentID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getOpponentBySportId_invalidSportId = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/opponent/a/${opponentID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getOpponentBySportId_invalidOpponentId = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/opponent/${sportID}/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getOpponentBySportId,
    getOpponentBySportId_invalidSportId,
    getOpponentBySportId_invalidOpponentId
}