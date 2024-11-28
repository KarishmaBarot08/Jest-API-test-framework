const { getNextEvents } = require('../../../requests/ticketing/nextEvents')

describe('Test cases for endpoint: next events', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getNextEvents();
        expect(response.status).toBe(204);
    });
});