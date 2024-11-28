const { getOpponentHistory, getOpponentHistoryWithSingleQuery, getOpponentHistory_invalidSportId } = require('../../../requests/opponentHistory/opponentHistory')
const { opponentHistorySchema } = require('../../../schema/v2.1/opponentHistory/opponentHistorySchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: opponent history', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getOpponentHistory();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getOpponentHistory();
        const data = await response.json();
        expect(data).toMatchSchema(opponentHistorySchema);
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getOpponentHistory();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getOpponentHistoryWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getOpponentHistory();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getOpponentHistoryWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBe(0);
    });
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getOpponentHistoryWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    //Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getOpponentHistory_invalidSportId();
        expect(response.status).toBe(400);
    });
})