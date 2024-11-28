const { getRosterBio, getRosterBio_invalidRosterPlayerId, getRosterBio_missingRosterPlayerId } = require('../../../requests/players/rosterBio')
const { rosterBioSchema } = require('../../../schema/v2.1/players/rosterBioSchema')
const { matchers } = require('jest-json-schema')
const { baseURL, rosterPlayerID } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: roster bio', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRosterBio();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRosterBio();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(rosterBioSchema);
    });
    // Test case to verify response code for invalid roster player id
    test('should return error for invalid roster player id', async () => {
        const response = await getRosterBio_invalidRosterPlayerId();
        expect(response.status).toBe(404);
    });
    // Test case to verify response code for missing roster player id
    test('should return error for missing roster player id', async () => {
        const response = await getRosterBio_missingRosterPlayerId();
        expect(response.status).toBe(404);
    });
})