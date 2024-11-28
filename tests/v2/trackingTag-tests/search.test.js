const { getSearch } = require('../../../requests/trackingTag/search')
const { searchSchema } = require('../../../schema/v2/trackingTag/searchSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: search', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSearch();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSearch();
        const data = await response.json();
        expect(data).toMatchSchema(searchSchema);
    });
});