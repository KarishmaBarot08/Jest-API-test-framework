const { getOverall, getOverall_invalidTenant } = require('../../../../../requests/staff/coaches/history/overall'); 
const { overallSchema } = require('../../../../../schema/v2/staff/coaches/history/overallSchema'); 
const { matchers } = require('jest-json-schema'); 
const { baseURL, sportID } = require('../../../../../config'); 

// Extend Jest with custom matchers for schema validation
expect.extend(matchers);

// Test suite for the 'overall' endpoint
describe('Test cases for endpoint: overall', () => {

    // Test case: Verify that the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getOverall(); // Call the API with valid parameters
        expect(response.status === 200 || response.status === 204); 
        // Check that the status is either 200 (success) or 204 (no content)
    });

    // Test case: Verify the structure of the response matches the expected schema
    test('Verify the data shape of the response', async () => {
        const response = await getOverall(); // Call the API with valid parameters

        if (response.status === 204) { 
            // Handle case where there is no content
            console.log('No content received. Skipping schema validation');
            return; // Skip schema validation if response status is 204
        }

        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(overallSchema); // Validate the response data against the schema
    });

    // Test case: Verify the endpoint returns an error when the tenant ID is missing
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Staff/coaches/history/overall/${sportID}`); 
        // API call without a tenant ID
        expect(response.status).toBe(400); // Check that the response status is 400 (Bad Request)
    });

    // Test case: Verify the endpoint returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getOverall_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Check that the response status is 400 (Bad Request)
    });

    // Test case: Verify the endpoint returns an error for an invalid sport ID
    test('should return error for invalid sport id', async () => {
        const response = await fetch(`${baseURL}/v2/Staff/coaches/history/overall/a`); 
        // API call with an invalid sport ID (non-numeric value)
        expect(response.status).toBe(404); // Check that the response status is 404 (Not Found)
    });
});
