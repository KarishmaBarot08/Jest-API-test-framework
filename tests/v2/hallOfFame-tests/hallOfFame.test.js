const { getHallOfFame } = require('../../../requests/hallOfFame/hallOfFame')
const { hallOfFameSchema } = require('../../../schema/v2/hallOfFame/hallOfFameSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('test cases for endpoint: hall of fame', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getHallOfFame();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getHallOfFame();
        const data = await response.json();
        expect(data).toMatchSchema(hallOfFameSchema);
    });
})