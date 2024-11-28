
const { matchers } = require("jest-json-schema"); 
const { getTitles } = require("../../../requests/series/titles"); 
const { titlesSchema } = require("../../../schema/v2/series/titlesSchema"); 
const { updateNumberConfigItem } = require("../../../utilities/updateConfigData");

// Extend Jest with custom matchers for JSON schema validation
expect.extend(matchers);

// Test suite for the 'titles' endpoint
describe('Test cases for endpoint: titles', () => {
    
    // Test case: Verifies the endpoint returns a successful response
    test('should return success for valid parameters', async () => {
        // Call the API endpoint
        const response = await getTitles();
        
        // Validate that the response status is 200 (successful)
        expect(response.status).toBe(200);

        // Parse the JSON response body
        const data = await response.json();

        // Check if the response contains an array with data
        if (Array.isArray(data) && data.length > 0) {
            // Extract the first series ID from the data
            const seriesid = data[0].id;
            
            // If series ID is not null, update the configuration with this value
            if (seriesid !== null) {
                updateNumberConfigItem('seriesID', seriesid);
            } else {
                // Log a message if the series ID is null
                console.log('Value is null, not updating config value.');
            }
        } else {
            // Log a message if the data array is empty or undefined
            console.log('The data array is empty or undefined');
        }
    });

    // Test case: Verifies the structure of the response data matches the expected schema
    test('Verify the data shape of the response', async () => {
        // Call the API endpoint
        const response = await getTitles();
        
        // Parse the JSON response body
        const data = await response.json();

        // Validate the response data against the predefined schema
        expect(data).toMatchSchema(titlesSchema);
    });
});
