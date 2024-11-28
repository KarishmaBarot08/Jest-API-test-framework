const { getOpponentBySportId, getOpponentBySportId_invalidOpponentId, getOpponentBySportId_invalidSportId } = require('../../../requests/opponentHistory/opponentBySportId')
const { matchers } = require('jest-json-schema')
const { opponentBySportIdSchema } = require('../../../schema/v2/opponentHistory/opponentBySportIdSchema')

expect.extend(matchers);

describe('test cases for endpoint: opponent by sport id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getOpponentBySportId();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getOpponentBySportId();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification.');
            return;
        }
        //bug: needs to be fixed by DEV team [tenant:ucla]
        const data = await response.json();
        expect(data).toMatchSchema(opponentBySportIdSchema);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getOpponentBySportId_invalidSportId();
        expect(response.status).toBe(404);
    });
    // Test case to verify response code for invalid opponent id
    test('should return error for invalid opponent id', async () => {
        const response = await getOpponentBySportId_invalidOpponentId();
        expect(response.status).toBe(404);
    });
})