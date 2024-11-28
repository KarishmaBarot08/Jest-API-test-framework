const { getSports } = require('../../../requests/archives/filters/sports')
const { filtersSportsSchema } = require('../../../schema/v2/archives/filtersSportsSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: filters/sports', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSports();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSports();
        const data = await response.json();
        expect(data).toMatchSchema(filtersSportsSchema);
    });
})