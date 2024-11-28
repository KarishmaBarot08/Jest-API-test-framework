const { getRosterId, getRosterId_invalidRosterId, getRosterId_invalidTenant } = require('../../../requests/rosters/rosterId')
const { rosterIdSchema } = require('../../../schema/v2/rosters/rosterIdSchema')
const { matchers } = require('jest-json-schema')
const { baseURL, rosterID } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: roster id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRosterId();
        expect(response.status === 200 || response.status === 204);
    });
    //Test case to verify response code for missing roster id
    test('should return error for missing roster id', async () => {
        const response = await getRosterId_invalidRosterId();
        expect(response.status).toBe(404);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRosterId();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification.');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(rosterIdSchema);
    });
    //Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Rosters/${rosterID}`);
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getRosterId_invalidTenant();
        expect(response.status).toBe(400);
    });
})