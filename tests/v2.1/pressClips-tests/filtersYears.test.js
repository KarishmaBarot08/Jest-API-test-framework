const { matchers } = require("jest-json-schema");
const { getFiltersYears } = require("../../../requests/pressClips/filtersYears");
const { filtersYearsSchema } = require('../../../schema/v2.1/pressClips/filtersyearsSchema')
expect.extend(matchers);

describe('Test cases for endpoint: filters years', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFiltersYears();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFiltersYears();
        const data = await response.json();
        expect(data).toMatchSchema(filtersYearsSchema);
    });
})