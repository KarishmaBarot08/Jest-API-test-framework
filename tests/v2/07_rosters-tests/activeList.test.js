const { getActiveList, getActiveList_invalidTenant } = require('../../../requests/rosters/activeList')
const { activeListSchema } = require('../../../schema/v2/rosters/activeListSchema')
const { matchers } = require('jest-json-schema')
const { baseURL } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: active list', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getActiveList();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getActiveList();
        const data = await response.json();
        expect(data).toMatchSchema(activeListSchema);
    });
    //Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Rosters/active/list`);
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getActiveList_invalidTenant();
        expect(response.status).toBe(400);
    });
})