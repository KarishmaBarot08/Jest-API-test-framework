const { getCount, getCountWithSingleQuery } = require('../../../requests/calendar/count')
const { countSchema } = require('../../../schema/v2/calendar/countSchema')
const { matchers } = require('jest-json-schema')
const { seasonYEAR } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: count', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getCount();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getCount();
        const data = await response.json();
        expect(data).toMatchSchema(countSchema);
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getCountWithSingleQuery('year', seasonYEAR);
        const data = await response.json();
        data.forEach(item => {
            expect(item.date).toContain(seasonYEAR);
        })
    });
})