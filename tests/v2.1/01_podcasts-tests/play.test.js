const { getPlay, getPlay_invalidPodcastId } = require("../../../requests/podcasts/play")

describe('Test cases for endpoint: play', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPlay();
        expect(response.status).toBe(200);
    });
    // Test case to verify status code for invalid podcast id
    test('should return error for invalid podcast id', async () => {
        const response = await getPlay_invalidPodcastId();
        expect(response.status).toBe(404);
    });
})