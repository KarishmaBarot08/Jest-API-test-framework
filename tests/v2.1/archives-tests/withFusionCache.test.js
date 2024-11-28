const { getWithFusionCache, getWithFusionCacheWithSingleQuery } = require('../../../requests/archives/withFusionCache')
const { withFusionCacheSchema } = require('../../../schema/v2.1/archives/withFusionCacheSchema')
const { matchers } = require('jest-json-schema')
const { sportID, sportTITLE, seasonYEAR, pageSIZE, pageINDEX } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: with fusion cache', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getWithFusionCache();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getWithFusionCache();
        const data = await response.json();
        expect(data).toMatchSchema(withFusionCacheSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getWithFusionCacheWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sportTitle).toBe(sportTITLE);
        })
    });
    // Test case to verify filtering by sport title
    test('should return filtered results corresponding to passed search string', async () => {
        const response = await getWithFusionCacheWithSingleQuery('search', sportTITLE);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sportTitle).toBe(sportTITLE);
        })
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getWithFusionCacheWithSingleQuery('seasonYear', seasonYEAR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.storyCreated).toContain(seasonYEAR);
        })
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getWithFusionCacheWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by page index
    test('should return filtered page result as per pageIndex param', async () => {
        const response = await getWithFusionCacheWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
})