const fetch = require('node-fetch')
const { baseURL, tenant, storyDate, storyName, version } = require('../../config')

const getDateStoryName = async () => {
    return await fetch(`${baseURL}/${version}/Stories/${storyDate}/${storyName}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getDateStoryName_invalidTenant = async () => {
    return await fetch(`${baseURL}/${version}/Stories/${storyDate}/${storyName}`, {
        method: 'GET',
        headers: {
            'tenant': 'abc'
        }
    })
};
module.exports = {
    getDateStoryName,
    getDateStoryName_invalidTenant
};