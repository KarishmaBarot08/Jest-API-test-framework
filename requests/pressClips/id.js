const fetch = require("node-fetch")
const { baseURL, version, pressClipID, tenant } = require("../../config")

const getPressClipById = async () => {
    return await fetch(`${baseURL}/${version}/PressClips/${pressClipID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getPressClipById_invalidPressClipId = async () => {
    return await fetch(`${baseURL}/${version}/PressClips/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getPressClipById,
    getPressClipById_invalidPressClipId
};