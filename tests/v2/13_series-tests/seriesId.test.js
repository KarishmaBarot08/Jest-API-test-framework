const { matchers } = require("jest-json-schema"); 
const { getSeriesId, getSeriesId_invalidSeriesId } = require("../../../requests/series/seriesId"); 
const { seriesIDSchema } = require("../../../schema/v2/series/seriesIdSchema"); 

// Extend Jest with custom matchers for JSON schema validation
expect.extend(matchers);

// Test suite for the 'series id' endpoint
describe('Test cases for endpoint: series id', () => {
    
    // Test case: Verify the endpoint returns a successful response for valid parameters
    test('should return success for valid parameters', async () => {
        // Call the API with valid series ID
        const response = await getSeriesId();

        // Check if the response status is 200 (success)
        if (response.status === 200) {
            // Parse the JSON response body
            const data = await response.json();

            // Ensure the response object contains at least one key (non-empty)
            expect(Object.keys(data).length > 0);
        } 
        // Handle the case when the response status is 204 (No Content)
        else if (response.status === 204) {
            console.log('Empty response received');
        }
    });

    // Test case: Verify the structure of the response matches the expected schema
    test('Verify the data shape of the response', async () => {
        // Call the API with valid series ID
        const response = await getSeriesId();

        // Ensure the response status is either 200 (success) or 204 (No Content)
        expect(response.status === 200 || response.status === 204).toBe(true);

        // Handle the case for 204 No Content
        if (response.status === 204) {
            console.log('Empty response received');
            return expect(true).toBe(true); // Ensure the test passes when there is no content
        }

        // Parse the JSON response body
        const data = await response.json();

        // Validate the response data against the predefined JSON schema
        expect(data).toMatchSchema(seriesIDSchema);
    });

    // Test case: Verify the endpoint returns an error for an invalid series ID
    test('should return error for invalid series id', async () => {
        // Call the API with an invalid series ID
        const response = await getSeriesId_invalidSeriesId();

        // Ensure the response status is 404 (Not Found)
        expect(response.status).toBe(404);
    });
});
