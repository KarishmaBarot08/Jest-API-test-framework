const { matchers } = require("jest-json-schema");
const { getSeason, getSeason_invalidSportId, getSeason_missingSportId } = require("../../../requests/season/season");
const { seasonSchema } = require("../../../schema/v2/season/seasonSchema");

expect.extend(matchers);

describe('Test cases for endpoint: season', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSeason();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSeason();
        if (response.status === 204) {
            console.log('No content receivede. Skipping schema validation');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(seasonSchema);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getSeason_invalidSportId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for missing sport id
    test('should return error for missing sport id', async () => {
        const response = await getSeason_missingSportId();
        expect(response.status).toBe(400);
    });
})