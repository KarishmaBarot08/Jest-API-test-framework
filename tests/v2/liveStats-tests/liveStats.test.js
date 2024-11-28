const { getLiveStats } = require('../../../requests/liveStats/liveStats')

describe('Test cases for endpoint: liveStats', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getLiveStats();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(response.status).toBe(200);
    });
})