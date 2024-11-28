const { getPodcasts, getPodcastsWithSingleQuery } = require('../../../requests/podcasts/podcasts')
const { podcastsSchema } = require('../../../schema/v2/podcasts/podcastsSchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, pageINDEX, sportID, categoryID, searchTEXT } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: podcasts', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPodcasts();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPodcasts();
        const data = await response.json();
        expect(data).toMatchSchema(podcastsSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getPodcastsWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getPodcastsWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned, skipping size validation.');
            return; // Skip further checks if the array is empty
        }
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getPodcastsWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sports[0].id).toBe(sportID);
        })
    });
    // Test case to verify filtering by category ID
    test('should return filtered results corresponding to passed category id', async () => {
        const response = await getPodcastsWithSingleQuery('categoryId', categoryID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.categoryId).toBe(categoryID);
        })
    });
    // Test case to verify filtering by search text
    test('should return filtered results corresponding to passed search text', async () => {
        const response = await getPodcastsWithSingleQuery('searchTerm', searchTEXT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.description).toContain(searchTEXT);
        })
    });
})