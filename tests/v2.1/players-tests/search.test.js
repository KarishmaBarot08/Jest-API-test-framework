const { getSearch, getSearch_missingSearchText } = require("../../../requests/players/search")
const { matchers } = require('jest-json-schema');
const { searchSchema } = require("../../../schema/v2.1/players/searchSchema");

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
    //Test case to verify response code for missing search text
    test('should return error for missing search text', async () => {
        const response = await getSearch_missingSearchText();
        expect(response.status).toBe(400);
    })
})