const fetch = require("node-fetch")
const { baseURL, version, tenant } = require("../../config")

const getTicketingExperience = async () => {
    return await fetch(`${baseURL}/${version}/TicketingExperience`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getTicketingExperience
};