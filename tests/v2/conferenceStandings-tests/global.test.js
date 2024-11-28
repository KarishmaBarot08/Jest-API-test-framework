const { getGlobal } = require('../../../requests/conferenceStandings/global')

describe('test cases for endpoint: global', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getGlobal();
        expect(response.status).toBe(200);
    });
})