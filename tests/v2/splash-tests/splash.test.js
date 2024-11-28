const { getSplash } = require("../../../requests/splash/splash");

describe('Test cases for endpoint: splash', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSplash();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(response.status).toBe(200);
    });
})