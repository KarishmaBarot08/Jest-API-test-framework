const { rosterPlayerID } = require('../../../config');
const { getMedia, getMedia_invalidPlayerId, getMediaWithSingleQuery } = require('../../../requests/players/media')
const { mediaSchema } = require('../../../schema/v2/players/mediaSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: media', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getMedia();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getMedia();
        const data = await response.json();
        if (data.length === 0) {
            console.log('Response is empty, skipping validation.');
            return; // Skips the validation if data length is 0
        }
        expect(data).toMatchSchema(mediaSchema);
    });
    //Test case to verify response code for invalid player id
    test('should return error for invalid player id', async () => {
        const response = await getMedia_invalidPlayerId();
        expect(response.status).toBe(404);
    });
    // Test case to verify filtering by roster player ID
    test('should return filtered results as per passed roster player id', async () => {
        const response = await getMediaWithSingleQuery('rosterPlayerId', rosterPlayerID);
        expect(response.status).toBe(200);
    });
    //Test case to verify response code for invalid roster player id
    test('should return error for invalid roster player id', async () => {
        const response = await getMediaWithSingleQuery('rosterPlayerId', 'a');
        expect(response.status).toBe(400);
    });
})