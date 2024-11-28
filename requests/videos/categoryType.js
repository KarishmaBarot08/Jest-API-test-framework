const fetch = require("node-fetch")
const { baseURL, version, videoCategoryTYPE, tenant } = require("../../config")

const getCategoryType = async () => {
    return await fetch(`${baseURL}/${version}/Videos/all-access/categories/${videoCategoryTYPE}`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
const getCategoryType_invalidCategoryType = async () => {
    return await fetch(`${baseURL}/${version}/Videos/all-access/categories/a`, {
        method: 'GET',
        headers: {
            'tenant': tenant
        }
    })
};
module.exports = {
    getCategoryType,
    getCategoryType_invalidCategoryType
};