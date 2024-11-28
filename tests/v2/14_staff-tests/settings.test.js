const { getSettings } = require('../../../requests/staff/settings'); 
const { settingsSchema } = require('../../../schema/v2/staff/settingsSchema'); 
const { matchers } = require('jest-json-schema'); 
// Jest matchers for validating JSON schema

// Extend Jest with JSON schema validation matchers
expect.extend(matchers);

// Test suite for the 'settings' endpoint
describe('Test cases for endpoint: settings', () => {

    // Test case: Verify that the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSettings(); // Call the API with valid parameters
        expect(response.status).toBe(200); // Check that the response status is 200 (OK)
    });

    // Test case: Verify that the response matches the expected JSON schema
    test('Verify the data shape of the response', async () => {
        const response = await getSettings(); // Call the API with valid parameters
        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(settingsSchema); // Validate the response structure against the schema
    });
});
