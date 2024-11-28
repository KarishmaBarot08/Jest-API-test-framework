const { matchers } = require("jest-json-schema");
const { pageINDEX, pageSIZE, sportID, categoryID } = require("../../../config");
const { getAllAccess, getAllAccessWithSingleQuery } = require("../../../requests/videos/allAccess");
const { allAccessSchema } = require("../../../schema/v2/videos/allAccessSchema");

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
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param', async () => {
        const response = await getAllAccessWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getAllAccessWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
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
})