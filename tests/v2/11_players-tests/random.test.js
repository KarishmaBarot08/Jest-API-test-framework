const { getRandom, getRandomWithSingleQuery } = require('../../../requests/players/random')
const { randomSchema } = require('../../../schema/v2/players/randomSchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, pageINDEX, sportID } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: random', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRandom();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRandom();
        const data = await response.json();
        expect(data).toMatchSchema(randomSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getRandomWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRandomWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getRandomWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        });
    });
})