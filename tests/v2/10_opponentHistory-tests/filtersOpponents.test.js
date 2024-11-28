const { getFiltersOpponents } = require('../../../requests/opponentHistory/filtersOpponents')
const { matchers } = require('jest-json-schema')
const { filtersOpponentsSchema } = require('../../../schema/v2/opponentHistory/filtersOpponentsSchema')

expect.extend(matchers);

describe('test cases for endpoint: filters opponents', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFiltersOpponents();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFiltersOpponents();
        const data = await response.json();
        expect(data).toMatchSchema(filtersOpponentsSchema);
    });
})