const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getFiltersOpponents = async () => {
    return await fetch(`${baseURL}/${version}/OpponentHistory/filters/opponents`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getFiltersOpponents
}