const { matchers } = require("jest-json-schema");
const { getInstagram, getInstagramWithSingleQuery } = require("../../../requests/instagram/instagram");
const { instagramSchema } = require("../../../schema/v2/instagram/instagramSchema");
const { pageINDEX, pageSIZE } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: instagram', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getInstagram();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getInstagram();
        const data = await response.json();
        expect(data).toMatchSchema(instagramSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getInstagramWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getInstagramWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned from the API');
        } else {
            expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
        }
    });
})