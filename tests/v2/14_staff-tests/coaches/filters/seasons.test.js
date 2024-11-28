const { getSeasons, getSeasons_invalidTenant } = require('../../../../../requests/staff/coaches/filters/seasons'); 
const { matchers } = require('jest-json-schema'); 
const { seasonsSchema } = require('../../../../../schema/v2/staff/coaches/filters/seasonsSchema'); 
const { baseURL } = require('../../../../../config'); 

// Extend Jest with custom matchers for JSON schema validation
expect.extend(matchers);

// Test suite for the 'seasons' endpoint
describe('Test cases for endpoint: seasons', () => {

    // Test case: Verify that the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSeasons(); // Call the API with valid parameters
        expect(response.status).toBe(200); // Check that the response status is 200 (success)
    });

    // Test case: Verify the structure of the response matches the expected schema
    test('Verify the data shape of the response', async () => {
        const response = await getSeasons(); // Call the API with valid parameters
        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(seasonsSchema); // Validate the response data against the schema
    });

    // Test case: Verify that the endpoint returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getSeasons_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Check that the response status is 400 (Bad Request)
    });

    // Test case: Verify that the endpoint returns an error when the tenant ID is missing
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Staff/coaches/filters/seasons`); 
        // Direct API call without a tenant ID
        expect(response.status).toBe(400); // Check that the response status is 400 (Bad Request)
    });
});
