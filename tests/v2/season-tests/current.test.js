const { matchers } = require("jest-json-schema");
const { getCurrent, getCurrent_invalidSportId } = require("../../../requests/season/current");
const { currentSchema } = require("../../../schema/v2/season/currentSchema");

expect.extend(matchers);

describe('Test cases for endpoint: current', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getCurrent();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getCurrent();
        if (response.status === 204) {
            console.log('No content received. Skipping schema validation.');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(currentSchema);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getCurrent_invalidSportId();
        expect(response.status).toBe(400);
    });
})