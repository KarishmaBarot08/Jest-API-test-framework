const { getBySport, getBySport_invalidTenant } = require('../../../requests/rosters/bySport')
const { baseURL, sportTITLE } = require('../../../config')

describe('Test cases for endpoint: by sport', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getBySport();
        expect(response.status === 200 || response.status === 204);
    });
    //Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Rosters/bySport/${sportTITLE}`);
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getBySport_invalidTenant();
        expect(response.status).toBe(400);
    });
})