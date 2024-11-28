const { getTakeOvers } = require('../../../requests/takeOvers/takeovers')

describe('Test cases for endpoint: takeOvers', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getTakeOvers();
        expect(response.status).toBe(200);
    });
})