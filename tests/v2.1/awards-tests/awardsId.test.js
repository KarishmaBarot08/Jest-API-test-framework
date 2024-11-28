const { getAwardsId, getAwardsId_invalidAwardId } = require('../../../requests/awards/awardsId')
const { awardsIdSchema } = require('../../../schema/v2.1/awards/awardsIdSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

// Use tenant id = syracuse
describe('Test cases for endpoint: awards id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getAwardsId();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getAwardsId();
        const data = await response.json();
        expect(data).toMatchSchema(awardsIdSchema);
    });
    // Test case to verify the response code for invalid award id 
    test('should return error for invalid award id', async () => {
        const response = await getAwardsId_invalidAwardId();
        expect(response.status).toBe(404);
    });
})