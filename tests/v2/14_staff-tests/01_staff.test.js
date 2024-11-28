const { getStaff, getStaff_invalidTenant, getStaffWithSingleQuery } = require('../../../requests/staff/staff');
const { matchers } = require('jest-json-schema'); 
const { staffSchema } = require('../../../schema/v2/staff/staffSchema'); 
const { baseURL, categoryID, searchTEXT, pageINDEX, pageSIZE } = require('../../../config'); 
const { updateNumberConfigItem, updateStringConfigItem } = require('../../../utilities/updateConfigData'); 

// Extend Jest with JSON schema validation matchers
expect.extend(matchers);

// Test suite for the 'staff' endpoint
describe('Test cases for endpoint: staff', () => {

    // Test case: Verify that the endpoint returns success for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getStaff(); // Call the API with valid parameters
        expect(response.status).toBe(200); // Verify the status code is 200 (OK)

        const data = await response.json(); // Parse the JSON response

        // Check if the items array is non-empty, then update the 'staffID' in config
        if (Array.isArray(data.items) && data.items.length > 0) {
            const staffid = data.items[0].id;
            if (staffid !== null) {
                updateNumberConfigItem('staffID', staffid); // Update the 'staffID' in config
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }

        // Check if the items array is non-empty, then update the 'searchTEXT' in config
        if (Array.isArray(data.items) && data.items.length > 0) {
            const title = data.items[0].title;
            if (title !== null) {
                updateStringConfigItem('searchTEXT', title); // Update the 'searchTEXT' in config
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });

    // Test case: Verify that the response matches the expected JSON schema
    test('Verify the data shape of the response', async () => {
        const response = await getStaff(); // Call the API with valid parameters
        const data = await response.json(); // Parse the JSON response
        expect(data).toMatchSchema(staffSchema); // Validate the response structure against the schema
    });

    // Test case: Verify that the API returns an error for a missing tenant ID
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Staff`); // Call the API without a tenant ID
        expect(response.status).toBe(400); // Verify the status code is 400 (Bad Request)
    });

    // Test case: Verify that the API returns an error for an invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        const response = await getStaff_invalidTenant(); // Call the API with an invalid tenant ID
        expect(response.status).toBe(400); // Verify the status code is 400 (Bad Request)
    });

    // Test case: Verify filtered results for the passed `categoryId` query parameter
    test('should return filtered results corresponding to passed categoryId', async () => {
        const response = await getStaffWithSingleQuery('categoryId', categoryID); 
        // Call the API with the `categoryId` parameter
        const data = await response.json(); // Parse the JSON response
        data.items.forEach(item => {
            expect(item.category.id).toBe(categoryID); // Verify that each item's category ID matches the parameter
        });
    });

    // Test case: Verify filtered results for the passed `searchText` query parameter
    test('should return filtered results corresponding to passed search text', async () => {
        const response = await getStaffWithSingleQuery('searchText', searchTEXT); 
        // Call the API with the `searchText` parameter
        const data = await response.json(); // Parse the JSON response
        data.items.forEach(item => {
            expect(item.title).toContain(searchTEXT); // Verify that each item's title contains the search text
        });
    });

    // Test case: Verify filtered results for the passed `$pageIndex` query parameter
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getStaffWithSingleQuery('$pageIndex', pageINDEX); 
        // Call the API with the `$pageIndex` parameter
        const data = await response.json(); // Parse the JSON response
        expect(data.page).toBe(pageINDEX); // Verify that the page index matches the parameter
    });

    // Test case: Verify filtered results for the passed `$pageSize` query parameter
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getStaffWithSingleQuery('$pageSize', pageSIZE); 
        // Call the API with the `$pageSize` parameter
        const data = await response.json(); // Parse the JSON response
        expect(data.items).toHaveLength(pageSIZE); // Verify that the number of items matches the page size
    });
});
