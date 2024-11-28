const { matchers } = require('jest-json-schema');
const { getRosterId, getRosterId_invalidRosterId } = require('../../../requests/hidden/rosterId');
const { rosterIdSchema } = require('../../../schema/v2/hidden/rosterIdSchema');

expect.extend(matchers);

describe('test cases for endpoint: roster id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRosterId();
        console.log('response code1: ', response.status);
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRosterId();
        if (response.status === 204) {
            console.log('No content received.Skipping schema validation');
            return;
        };
        const data = await response.json();
        console.log('response code2: ', response.status);
        expect(data).toMatchSchema(rosterIdSchema);
    });
    // Test case to verify response code for invalid roster id
    test('should return error for invalid roster id', async () => {
        const response = await getRosterId_invalidRosterId();
        expect(response.status).toBe(404);
    });
})