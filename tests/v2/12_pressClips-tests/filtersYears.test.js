const { matchers } = require("jest-json-schema");
const { getFiltersYears } = require("../../../requests/pressClips/filtersYears"); 
const { filtersYearsSchema } = require("../../../schema/v2/pressClips/filtersYearsSchema"); 

// Extend Jest with custom matchers for JSON schema validation
expect.extend(matchers);

// Test suite for the 'filters years' endpoint
describe('Test cases for endpoint: filters years', () => {
    
    // Test case: Verify the endpoint returns a successful response
    test('should return success for valid parameters', async () => {
        // Call the API endpoint
        const response = await getFiltersYears();
        
        // Validate the HTTP status code of the response
        expect(response.status).toBe(200);
    });

    // Test case: Verify the structure of the response data matches the expected schema
    test('Verify the data shape of the response', async () => {
        // Call the API endpoint
        const response = await getFiltersYears();
        
        // Parse the JSON response body
        const data = await response.json();
        
        // Validate the response data against the predefined schema
        expect(data).toMatchSchema(filtersYearsSchema);
    });
});
