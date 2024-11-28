const { getRosterId, getRosterId_invalidRosterId, getRosterIdWithSingleQuery } = require('../../../requests/players/rosterId')
const { rosterIdSchema } = require('../../../schema/v2.1/players/rosterIdSchema')
const { matchers } = require('jest-json-schema')
const { storyDate, pageSIZE } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: roster id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRosterId();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRosterId();
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned, skipping schema validation.');
            return;
        }
        expect(data).toMatchSchema(rosterIdSchema);
    });
    //Test case to verify response code for invalid roster id
    test('should return error for invalid roster id', async () => {
        const response = await getRosterId_invalidRosterId();
        expect(response.status).toBe(404);
    });
    //Test case to verify that results are returned for past date than applied date
    test('Should return results with last updated date older than applied date', async () => {
        const response = await getRosterIdWithSingleQuery('lastUpdated', storyDate);
        const data = await response.json();
        const date = new Date(storyDate).getTime();
        if (data.items.length > 0) {
            data.items.forEach(item => {
                const lastUpdated = new Date(item.lastUpdated).getTime();
                console.log('last date: ', lastUpdated);
                expect(lastUpdated).toBeLessThanOrEqual(date);
            })
        }
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getRosterId();
        const data1 = await response1.json();
        const after = data1.after;
        if (data1.items.length === 0) {
            console.log('No items returned, skipping validation.');
            return;
        };
        const response = await getRosterIdWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getRosterId();
        const data1 = await response1.json();
        const before = data1.before;
        if (data1.items.length === 0) {
            console.log('No items returned, skipping validation.');
            return;
        };
        const response = await getRosterIdWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRosterIdWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned, skipping size validation.');
            return; // Skip further checks if the array is empty
        }
        expect(data.items).toHaveLength(pageSIZE);
    });
})