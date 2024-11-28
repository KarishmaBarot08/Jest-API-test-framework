const fetch = require('node-fetch')
const { baseURL, tenant, version } = require('../../config')

const getSlideShows = async () => {
    return await fetch(`${baseURL}/${version}/Slideshows`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getSlideShows
};