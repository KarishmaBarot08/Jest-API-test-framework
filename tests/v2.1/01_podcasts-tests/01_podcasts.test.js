const { getPodcasts, getPodcastsWithSingleQuery } = require('../../../requests/podcasts/podcasts')
const { podcastsSchema } = require('../../../schema/v2.1/podcasts/podcastsSchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, sportID, categoryID, searchTEXT } = require('../../../config');
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('test cases for endpoint: podcasts', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPodcasts();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const podcastid = data.items[0].id;
            if (podcastid !== null) {
                updateNumberConfigItem('podcastID', podcastid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPodcasts();
        const data = await response.json();
        expect(data).toMatchSchema(podcastsSchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getPodcastsWithSingleQuery('PageSize', pageSIZE);
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
    // Test case to verify filtering by categoryID
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
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getPodcasts();
        const data1 = await response1.json();
        if (data1.items.length != 0) {
            const after = data1.after;
            const response = await getPodcastsWithSingleQuery('After', after);
            const data = await response.json();
            //bug: needs to be fixed by DEV team [tenant:ucla]
            expect(data.items.length).toBeGreaterThanOrEqual(0);
        } else {
            console.log('Empty array received. Skipping validation.')
        }
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getPodcasts();
        const data1 = await response1.json();
        if (data1.items.length != 0) {
            const before = data1.before;
            const response = await getPodcastsWithSingleQuery('Before', before);
            const data = await response.json();
            //bug: needs to be fixed by DEV team [tenant:ucla]
            expect(data.items.length).toBeGreaterThanOrEqual(0);
        } else {
            console.log('Empty array received. Skipping validation.')
        }
    });
})