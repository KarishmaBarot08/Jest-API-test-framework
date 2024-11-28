const { matchers } = require("jest-json-schema");
const { getLatest, getLatestWithSingleQuery } = require("../../../requests/wePlayed/latest");
const { latestSchema } = require("../../../schema/v2/wePlayed/latestSchema");
const { pageINDEX, pageSIZE } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: latest', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getLatest();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getLatest();
        const data = await response.json();
        expect(data).toMatchSchema(latestSchema);
    });
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param', async () => {
        const response = await getLatestWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getLatestWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
})