const { getSettings } = require('../../../requests/rosters/settings')

describe('Test cases for endpoint: settings', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSettings();
        expect(response.status).toBe(200);
    });
})