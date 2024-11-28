const { getSportId, getSportId_invalidSportId } = require("../../../requests/splash/sportId");

describe('Test cases for endpoint: sport id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSportId();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getSportId_invalidSportId();
        expect(response.status).toBe(404);
    });
})