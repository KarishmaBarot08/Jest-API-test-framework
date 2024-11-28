const { getSettings, getSettings_invalidTenant } = require('../../../requests/stories/settings');
const { settingsSchema } = require('../../../schema/v2/stories/settingsSchema');
const { matchers } = require('jest-json-schema');
const { baseURL } = require('../../../config');

// Extend Jest's expect functionality to include JSON schema matchers
expect.extend(matchers);

// Describe the test suite for the 'settings' endpoint
describe('Test cases for endpoint: settings', () => {
    
    // Test case for valid parameters, expecting a successful response
    test('should return success for valid parameters', async () => {
        // Call the function to get settings with valid parameters
        const response = await getSettings();
        // Assert that the response status is 200 (OK)
        expect(response.status).toBe(200);
    });

    // Test case to verify the shape of the response data
    test('Verify the data shape of the response', async () => {
        // Call the function to get settings and parse the response
        const response = await getSettings();
        const data = await response.json();
        // Assert that the response data matches the expected schema
        expect(data).toMatchSchema(settingsSchema);
    });

    // Test case for missing tenant ID, expecting an error response
    test('should return error for missing tenant id', async () => {
        // Perform a fetch request to the settings endpoint without a tenant ID
        const response = await fetch(`${baseURL}/v2/Stories/settings`);
        // Assert that the response status is 400 (Bad Request)
        expect(response.status).toBe(400);
    });

    // Test case for invalid tenant ID, expecting an error response
    test('should return error for invalid tenant id', async () => {
        // Call the function to get settings with an invalid tenant ID
        const response = await getSettings_invalidTenant();
        // Assert that the response status is 400 (Bad Request)
        expect(response.status).toBe(400);
    });
});
