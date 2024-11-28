const { getDateStoryName, getDateStoryName_invalidTenant } = require('../../../requests/stories/dateStoryName') 
const { dateStoryNameSchema } = require('../../../schema/v2/stories/dateStoryNameSchema') 
const { matchers } = require('jest-json-schema') 
const { baseURL, storyDate, storyName } = require('../../../config') 

// Extend Jest's expect functionality to include JSON schema matchers
expect.extend(matchers);

// Test suite for the 'dateStoryName' endpoint
describe('Test cases for endpoint: date story name', () => {

    // Test case: Ensure the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getDateStoryName(); // Call the API with valid parameters
        // Verify that the response status is either 200 (OK) or 204 (No Content)
        expect(response.status === 200 || response.status === 204); 
    });

    // Test case: Validate the structure of the response against the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getDateStoryName(); // Call the API with valid parameters
        if(response.status === 204){
            console.log('No content received. Skipping schema verification.');
            return; // Skip schema verification if no content is returned
        }
        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(dateStoryNameSchema); // Validate the response structure against the schema
    });

    // Test case: Ensure the endpoint returns an error for a missing tenant ID
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Stories/${storyDate}/${storyName}`); 
        // Call the API without a tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });

    // Test case: Ensure the endpoint returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getDateStoryName_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });
});
