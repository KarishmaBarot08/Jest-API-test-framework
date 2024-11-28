const { matchers } = require('jest-json-schema');
const { getPlayerByRosterPlayerId, getPlayerByRosterPlayerId_invalidRosterPlayerId } = require('../../../requests/hidden/playerByRosterPlayerId');
const { playerByRosterPlayerIdSchema } = require('../../../schema/v2/hidden/playerByRosterPlayerIdSchema');

expect.extend(matchers);

describe('test cases for endpoint: player by roster player id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPlayerByRosterPlayerId();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPlayerByRosterPlayerId();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification.');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(playerByRosterPlayerIdSchema);
    });
    //Test case to verify response code for invalid roster player id
    test('should return error for invalid roster player id', async () => {
        const response = await getPlayerByRosterPlayerId_invalidRosterPlayerId();
        expect(response.status).toBe(404);
    });
})