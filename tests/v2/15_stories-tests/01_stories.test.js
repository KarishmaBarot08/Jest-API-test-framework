const { getStories, getStories_invalidTenant, getStoriesWithSingleQuery } = require('../../../requests/stories/stories');
const { matchers } = require('jest-json-schema');
const storiesSchema = require('../../../schema/v2/stories/storiesSchema');
const { baseURL, sportID, pageINDEX, pageSIZE } = require('../../../config');
const { updateNumberConfigItem, updateStringConfigItem } = require('../../../utilities/updateConfigData');

// Extend Jest's expect functionality to include JSON schema matchers
expect.extend(matchers);

// Test suite for the 'stories' endpoint
describe('Test cases for endpoint: stories', () => {

    // Test case: Ensure the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getStories(); // Call the API with valid parameters
        // Note: Bug reported for tenant ucla and syracuse that needs to be fixed by the DEV team
        expect(response.status).toBe(200); // Verify that the response status is 200 (OK)

        const data = await response.json(); // Parse the JSON response
        // Check if the items array exists and has elements
        if (Array.isArray(data.items) && data.items.length > 0) {
            const storyid = data.items[0].storyId; // Extract story ID from the first item
            // Update the configuration with the story ID if it exists
            if(storyid !== null){
                updateNumberConfigItem('storyID', storyid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }

        // Check and update the story post date in the configuration
        if (Array.isArray(data.items) && data.items.length > 0) {
            const storydate = data.items[0].storyPostdate; // Extract story post date
            // Update the configuration with the story post date if it exists
            if(storydate !== null){
                updateStringConfigItem('storyDate', storydate);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });

    // Test case: Validate the structure of the response against the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getStories(); // Call the API with valid parameters
        const data = await response.json(); // Parse the JSON response
        // Note: Bug reported for tenant ucla and syracuse that needs to be fixed by the DEV team
        expect(data).toMatchSchema(storiesSchema); // Validate the response structure against the schema
    });

    // Test case: Ensure the endpoint returns an error for a missing tenant ID
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Stories`); // Call the API without a tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });

    // Test case: Ensure the endpoint returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getStories_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Verify that the response status is 400 (Bad Request)
    });

    // Test case: Ensure the endpoint filters results by sport ID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getStoriesWithSingleQuery('SportId', sportID); // Call the API with the sport ID parameter
        const data = await response.json(); // Parse the JSON response
        // Note: Bug reported for tenant ucla and syracuse that needs to be fixed by the DEV team
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID); // Verify that each item has the correct sport ID
        });
    });

    // Test case: Ensure the endpoint filters results by page index
    test('should return filtered page result as per perIndex param', async () => {
        const response = await getStoriesWithSingleQuery('$pageIndex', pageINDEX); // Call the API with the page index parameter
        const data = await response.json(); // Parse the JSON response
        // Note: Bug reported for tenant ucla and syracuse that needs to be fixed by the DEV team
        expect(data.page).toBe(pageINDEX); // Verify that the response page matches the provided page index
    });

    // Test case: Ensure the endpoint filters results by page size
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getStoriesWithSingleQuery('$pageSize', pageSIZE); // Call the API with the page size parameter
        const data = await response.json(); // Parse the JSON response
        expect(data.items).toHaveLength(pageSIZE); // Verify that the number of items in the response matches the page size
    });
});
