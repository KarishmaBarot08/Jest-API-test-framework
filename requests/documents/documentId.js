const fetch = require('node-fetch')
const { baseURL, tenant, version, documentID } = require('../../config')

const getDocumentId = async () => {
    return await fetch(`${baseURL}/${version}/Documents/${documentID}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getDocumentId
};