const { getXml } = require("../../../requests/rss/xml");

describe('Test cases for endpoint: xml', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getXml();
        expect(response.status).toBe(200);
    });
})