const { matchers } = require("jest-json-schema");
const { getCategoryType, getCategoryType_invalidCategoryType } = require("../../../requests/videos/categoryType");
const { categorySchema } = require("../../../schema/v2/videos/categorySchema");

expect.extend(matchers);

describe('Test cases for endpoint: category type', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getCategoryType();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getCategoryType();
        const data = await response.json();
        expect(data).toMatchSchema(categorySchema);
    });
    // Test case to verify response code for invalid category type
    test('should return error for invalid category type', async () => {
        const response = await getCategoryType_invalidCategoryType();
        expect(response.status).toBe(404);
    });
})