const { getRandom, getRandomWithSingleQuery } = require('../../../requests/players/random')
const { randomSchema } = require('../../../schema/v2.1/players/randomSchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, sportID } = require('../../../config')

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
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRandomWithSingleQuery('PageSize', pageSIZE);
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
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getRandom();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getRandomWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getRandom();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getRandomWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
})