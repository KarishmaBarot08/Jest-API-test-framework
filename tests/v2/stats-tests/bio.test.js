const { matchers } = require("jest-json-schema");
const { getBio, getBio_missingQueryParams, getBio_invalidRosterPlayerId, getBio_invalidSportSlug, getBio_invalidYear } = require("../../../requests/stats/bio");
const { bioSchema } = require("../../../schema/v2/stats/bioSchema");

expect.extend(matchers);

describe('Test cases for endpoint: bio', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getBio();
        expect(response.status === 200 || response.status === 404);
        if (response.status === 404) {
            const data = await response.json();
            expect(data.Message).toBe('No stats provider for notfound was found');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getBio();
        const data = await response.json();
        expect(data).toMatchSchema(bioSchema);
    });
    // Test case to verify response code for missing mandatory query params
    test('should return error for missing mandatory query params', async () => {
        const response = await getBio_missingQueryParams();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid roster player id
    test('should return error for invalid roster player id', async () => {
        const response = await getBio_invalidRosterPlayerId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for
    test('should return error for invalid sport slug', async () => {
        const response = await getBio_invalidSportSlug();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for
    test('should return error for invalid year', async () => {
        const response = await getBio_invalidYear();
        expect(response.status).toBe(400);
    });
})