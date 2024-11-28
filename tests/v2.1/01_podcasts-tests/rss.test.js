const { getRss } = require("../../../requests/podcasts/rss");

describe('Test cases for endpoint: rss', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRss();
        expect(response.status).toBe(200);
    });
})