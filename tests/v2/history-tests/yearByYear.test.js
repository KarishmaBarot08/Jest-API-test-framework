const { matchers } = require("jest-json-schema");
const { getYearByYear, getYearByYear_invalidSportId } = require("../../../requests/history/yearByYear");
const { yearByYearSchema } = require("../../../schema/v2/history/yearByYearSchema");

expect.extend(matchers);

describe('test cases for endpoint: year by year', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getYearByYear();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getYearByYear();
        const data = await response.json();
        expect(data).toMatchSchema(yearByYearSchema);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getYearByYear_invalidSportId();
        expect(response.status).toBe(400);
    });
})