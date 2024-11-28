const { matchers } = require("jest-json-schema");
const { getFilters } = require("../../../requests/tags/filters");
const { filtersSchema } = require("../../../schema/v2/tags/filtersSchema");

expect.extend(matchers);

describe('Test cases for endpoint: tags/filters', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFilters();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFilters();
        const data = await response.json();
        expect(data).toMatchSchema(filtersSchema);
    });
})