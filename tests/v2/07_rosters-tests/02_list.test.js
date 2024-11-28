const { getList, getList_invalidTenant, getListWithSingleQuery } = require('../../../requests/rosters/list')
const { listSchema } = require('../../../schema/v2/rosters/listSchema')
const { matchers } = require('jest-json-schema')
const { baseURL, sportID, sportNameSlug, seasonYEAR, tenant } = require('../../../config');

expect.extend(matchers);

describe('Test cases for endpoint: list', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getList();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getList();
        const data = await response.json();
        expect(data).toMatchSchema(listSchema);
    });
    //Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Rosters/list`);
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getList_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getListWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            expect(item.globalSportNameSlug).toBe(sportNameSlug);
        })
    });
    // Test case to verify filtering by sport slug
    test('should return filtered results corresponding to passed sport slug', async () => {
        const response = await getListWithSingleQuery('sport', sportNameSlug);
        const data = await response.json();
        data.forEach(item => {
            expect(item.globalSportNameSlug).toBe(sportNameSlug);
        })
    });
    // Test case to verify filtering by season
    test('should return filtered results corresponding to passed season', async () => {
        const response = await getListWithSingleQuery('season', seasonYEAR);
        const data = await response.json();
        data.forEach(item => {
            expect(item.seasonTitle).toBe(seasonYEAR);
        })
    });
})