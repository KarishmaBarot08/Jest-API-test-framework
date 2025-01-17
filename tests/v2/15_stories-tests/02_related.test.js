const { matchers } = require("jest-json-schema"); 
const { getStoriesRelated, getStoriesRelated_invalidTenant, getStoriesRelatedWithSingleQuery } = require('../../../requests/stories/related') 
const { storiesRelatedSchema } = require('../../../schema/v2/stories/relatedSchema') 
const { baseURL, pageINDEX, pageSIZE } = require('../../../config'); 
const { updateStringConfigItem } = require("../../../utilities/updateConfigData"); 

// Extend Jest's expect functionality to include JSON schema matchers
expect.extend(matchers);

// Test suite for the 'stories/related' endpoint
describe('Test cases for endpoint: stories/related', () => {

    // Test case: Ensure the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getStoriesRelated(); // Call the API with valid parameters
        expect(response.status).toBe(200); // Verify that the response status is 200 (OK)

        const data = await response.json(); // Parse the JSON response
        // Check if the items array exists and has elements
        if (Array.isArray(data.items) && data.items.length > 0) {
            const filename = data.items[0].storyFilename; // Extract story filename from the first item
            // Update the configuration with the story filename if it exists
            if(filename !== null){
                updateStringConfigItem('storyName', filename);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });

    // Test case: Validate the structure of the response against the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getStoriesRelated(); // Call the API with valid parameters
        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(storiesRelatedSchema); // Validate the response structure against the schema
    });

    // Test case: Ensure the endpoint returns an error for a missing tenant ID
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Stories/related`); // Call the API without a tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });

    // Test case: Ensure the endpoint returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getStoriesRelated_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });

    // Test case: Ensure the endpoint filters results by page index
    test('should return filtered page result as per perIndex param', async () => {
        const response = await getStoriesRelatedWithSingleQuery('$pageIndex', pageINDEX); // Call the API with the page index parameter
        const data = await response.json(); // Parse the JSON response
        expect(data.page).toBe(pageINDEX); // Verify that the response page matches the provided page index
    });

    // Test case: Ensure the endpoint filters results by page size
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getStoriesRelatedWithSingleQuery('$pageSize', pageSIZE); // Call the API with the page size parameter
        const data = await response.json(); // Parse the JSON response
        expect(data.items).toHaveLength(pageSIZE); // Verify that the number of items in the response matches the page size
    });
});
