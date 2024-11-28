const { matchers } = require("jest-json-schema");
const { getLiveStream, getLiveStreamWithSingleQuery, getLiveStream_missingSportId, getLiveStream_invalidSportId } = require("../../../requests/liveStream/liveStream");
const { liveStreamSchema } = require("../../../schema/v2/liveStream/liveStreamSchema");
const { pageINDEX, pageSIZE } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: live stream', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getLiveStream();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getLiveStream();
        const data = await response.json();
        expect(data).toMatchSchema(liveStreamSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getLiveStreamWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getLiveStreamWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length === 0 || data.items.length === pageSIZE).toBe(true);
    });
    // Test case to verify response code for missing sport id
    test('should return error for missing sport id', async () => {
        const response = await getLiveStream_missingSportId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getLiveStream_invalidSportId();
        expect(response.status).toBe(400);
    });
})