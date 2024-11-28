const { getSubscribe, getSubscribe_invalidType } = require('../../../requests/calendar/subscribe')

describe('Test cases for endpoint: subscribe', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSubscribe();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for invalid type
    test('should return error for invalid type', async () => {
        const response = await getSubscribe_invalidType();
        expect(response.status).toBe(400);
    });
})