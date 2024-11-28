const { getSeo } = require('../../../requests/seo/seo')
const { seoSchema } = require('../../../schema/v2/seo/seoSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: seo', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSeo();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSeo();
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(data).toMatchSchema(seoSchema);
    });
});