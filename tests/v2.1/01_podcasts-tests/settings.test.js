const { matchers } = require('jest-json-schema');
const { getSettings } = require('../../../requests/podcasts/settings');
const { settingsSchema } = require('../../../schema/v2.1/podcasts/settingsSchema');

expect.extend(matchers);

describe('test cases for endpoint: settings', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSettings();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema

    test('Verify the data shape of the response', async () => {
        const response = await getSettings();
        const data = await response.json();
        expect(data).toMatchSchema(settingsSchema);
    });
})