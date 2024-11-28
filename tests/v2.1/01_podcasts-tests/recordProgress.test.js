const { getRecordProgress, getRecordProgress_invalidPodcastId } = require("../../../requests/podcasts/recordProgress");

describe('Test cases for endpoint: record progress', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRecordProgress();
        expect(response.status).toBe(200);
    });
    // Test case to verify status code for invalid podcast id
    test('should return error for invalid podcast id', async () => {
        const response = await getRecordProgress_invalidPodcastId();
        expect(response.status).toBe(404);
    });
})