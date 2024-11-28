const { matchers } = require("jest-json-schema");
const { getRelated, getRelated_invalidSportId } = require("../../../requests/season/related");
const { relatedSchema } = require("../../../schema/v2/season/relatedSchema");

expect.extend(matchers);

describe('Test cases for endpoint: related', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRelated();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRelated();
        const data = await response.json();
        expect(data).toMatchSchema(relatedSchema);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getRelated_invalidSportId();
        expect(response.status).toBe(404);
    });
})