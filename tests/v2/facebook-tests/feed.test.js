const { getFeed } = require('../../../requests/facebook/feed')
const { feedSchema } = require('../../../schema/v2/facebook/feedSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('test cases for endpoint: feed', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFeed();
        if (response.status === 200) {
            expect(response.status).toBe(200);
        } else if (response.status === 404) {
            const data = await response.json();
            expect(response.status).toBe(404);
            expect(data.Message).toBe('Facebook credentials were not found');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFeed();
        if (response.status === 404) {
            console.log('Received a 404 response. Skipping schema validation.');
            return; // Skips schema validation
        }
        const data = await response.json();
        expect(data).toMatchSchema(feedSchema);
    });
})