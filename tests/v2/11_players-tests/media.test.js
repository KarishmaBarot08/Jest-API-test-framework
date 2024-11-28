const { getMedia, getMedia_invalidPlayerId } = require('../../../requests/players/media')
const { mediaSchema } = require('../../../schema/v2/players/mediaSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: media', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getMedia();
        //bug: needs to be fixed by DEV team [tenant:syracuse]
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
        //bug: needs to be fixed by DEV team [tenant:syracuse]
        expect(data).toMatchSchema(mediaSchema);
    });
    // Test case to verify response code for invalid roster id
    test('should return error for invalid roster id', async () => {
        const response = await getMedia_invalidPlayerId();
        expect(response.status).toBe(404);
    });
})