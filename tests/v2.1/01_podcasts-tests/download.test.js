const { getDownload, getDownload_invalidPodcastId } = require("../../../requests/podcasts/download");

describe('Test cases for endpoint: download', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getDownload();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('should return error for invalid podcast id', async () => {
        const response = await getDownload_invalidPodcastId();
        expect(response.status).toBe(404);
    });
})