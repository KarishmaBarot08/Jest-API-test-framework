const { matchers } = require("jest-json-schema");
const { getRSS } = require("../../../requests/rss/rss");
const { rssSchema } = require("../../../schema/v2/rss/rssSchema");

expect.extend(matchers);

describe('Test cases for endpoint: rss', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRSS();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRSS();
        const data = await response.json();
        expect(data).toMatchSchema(rssSchema);
    });
})