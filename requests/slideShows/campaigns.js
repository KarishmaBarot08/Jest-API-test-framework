const fetch = require('node-fetch');
const { baseURL, tenant, version } = require('../../config');

const getCampaigns = async () => {
    return await fetch(`${baseURL}/${version}/Slideshows/campaigns`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getCampaigns
};