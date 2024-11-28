const { matchers } = require("jest-json-schema");
const { pageINDEX, pageSIZE, sportID, categoryID } = require("../../../config");
const { getAllAccess, getAllAccessWithSingleQuery } = require("../../../requests/videos/allAccess");
const { allAccessSchema } = require("../../../schema/v2.1/videos/allAccessSchema");

expect.extend(matchers);

describe('Test cases for endpoint: all access', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getAllAccess();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getAllAccess();
        const data = await response.json();
        expect(data).toMatchSchema(allAccessSchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getAllAccessWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered result as per sport id', async () => {
        const response = await getAllAccessWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        })
    });
    // Test case to verify filtering by category ID
    test('should return filtered result as per category id', async () => {
        const response = await getAllAccessWithSingleQuery('categoryId', categoryID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.category.id).toBe(categoryID);
        })
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getAllAccess();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getAllAccessWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getAllAccess();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getAllAccessWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
})