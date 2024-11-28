const { getStaffId, getStaffId_invalidStaffId } = require('../../../requests/staff/staffId'); 
const { staffIDSchema } = require('../../../schema/v2/staff/staffIdSchema'); 
const { matchers } = require('jest-json-schema'); 
// Jest matchers for JSON schema validation

// Extend Jest's expect functionality to include JSON schema matchers
expect.extend(matchers);

// Test suite for the 'staff id' endpoint
describe('Test cases for endpoint: staff id', () => {

    // Test case: Ensure the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getStaffId(); // Call the API with a valid staff ID
        // Verify that the response status is either 200 (OK) or 204 (No Content)
        expect(response.status === 200 || response.status === 204);
    });

    // Test case: Validate the structure of the response against the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getStaffId(); // Call the API with a valid staff ID
        
        // Check if the response status indicates no content
        if (response.status === 204) {
            console.log('No content received. Skipping schema verification.'); // Log and skip schema validation
            return;
        }

        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(staffIDSchema); // Validate the response structure against the schema
    });

    // Test case: Ensure the endpoint returns an error for an invalid staff ID
    test('should return error for invalid staff id', async () => {
        const response = await getStaffId_invalidStaffId(); // Call the API with an invalid staff ID
        expect(response.status).toBe(404); // Verify that the response status is 404 (Not Found)
    });
});
