const { getSubscribeInfo } = require('../../../requests/forms/subscribeInfo')
const { subscribeInfoSchema } = require('../../../schema/v2/forms/subscribeInfoSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('test cases for endpoint: settings', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSubscribeInfo();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSubscribeInfo();
        const data = await response.json();
        expect(data).toMatchSchema(subscribeInfoSchema);
    });
})