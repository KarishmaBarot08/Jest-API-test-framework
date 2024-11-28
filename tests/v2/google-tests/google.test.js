const { getGoogle } = require('../../../requests/google/google')
const { googleSchema } = require('../../../schema/v2/google/googleSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: google', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getGoogle();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getGoogle();
        const data = await response.json();
        expect(data).toMatchSchema(googleSchema);
    });
});