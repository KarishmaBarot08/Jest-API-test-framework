const { getRosterId, getRosterId_invalidRosterId, getRosterIdWithSingleQuery } = require('../../../requests/players/rosterId')
const { rosterIdSchema } = require('../../../schema/v2/players/rosterIdSchema')
const { matchers } = require('jest-json-schema')
const { pageINDEX, pageSIZE, startDATE } = require('../../../config')

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
        expect(data).toMatchSchema(rosterIdSchema);
    });
    // Test case to verify response code for invalid roster id
    test('should return error for invalid roster id', async () => {
        const response = await getRosterId_invalidRosterId();
        expect(response.status).toBe(404);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getRosterIdWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRosterIdWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned, skipping size validation.');
            return; // Skip further checks if the array is empty
        }
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    //Test case to verify records are filtered based on applied last updated date 
    test('Should return results with last updated date older than passed date', async () => {
        const response = await getRosterIdWithSingleQuery('lastUpdated', startDATE);
        const data = await response.json();
        const date = new Date(startDATE).getTime();
        if (data.items.length > 0) {
            data.items.forEach(item => {
                const eventDate = new Date(item.lastUpdated).getTime();
                expect(eventDate).toBeLessThan(date);
            })
        }
    });
})