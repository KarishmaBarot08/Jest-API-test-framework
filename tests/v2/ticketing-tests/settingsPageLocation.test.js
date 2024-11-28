const { getPageLocation } = require('../../../requests/ticketing/settings/pageLocation')
const { pageLocationSchema } = require('../../../schema/v2/ticketing/settings/pageLocationSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: page location', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPageLocation();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPageLocation();
        const data = await response.json();
        expect(data).toMatchSchema(pageLocationSchema);
    });
});