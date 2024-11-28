const { getRelatedVideos, getRelatedVideosWithSingleQuery } = require('../../../requests/relatedVideos/relatedVideos')
const { relatedVideosSchema } = require('../../../schema/v2/relatedVideos/relatedVideosSchema')
const { matchers } = require('jest-json-schema')
const { videoType, pageINDEX, pageSIZE } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: related videos', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRelatedVideos();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRelatedVideos();
        const data = await response.json();
        expect(data).toMatchSchema(relatedVideosSchema);
    });
    // Test case to verify filtering by video type
    test('should return filtered results corresponding to passed video type', async () => {
        const response = await getRelatedVideosWithSingleQuery('type', videoType);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.videoType).toBe(videoType);
        })
    });
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param', async () => {
        const response = await getRelatedVideosWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRelatedVideosWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
});