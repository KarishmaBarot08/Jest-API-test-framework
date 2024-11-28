const { matchers } = require("jest-json-schema");
const { getFiltersSeasons } = require("../../../requests/pressClips/filtersSeasons");
const { filtersSeasonsSchema } = require("../../../schema/v2.1/pressClips/filtersSeasonsSchema");

expect.extend(matchers);

describe('Test cases for endpoint: filters seasons', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFiltersSeasons();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFiltersSeasons();
        const data = await response.json();
        expect(data).toMatchSchema(filtersSeasonsSchema);
    });
})