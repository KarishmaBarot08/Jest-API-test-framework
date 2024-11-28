const { getSearch } = require("../../../requests/search/search");

describe('Test cases for endpoint: search', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSearch();
        expect(response.status).toBe(200);
    });
})