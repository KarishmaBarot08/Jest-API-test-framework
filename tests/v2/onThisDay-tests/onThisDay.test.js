const { matchers } = require("jest-json-schema");
const { getOnThisDay } = require("../../../requests/onThisDay/onThisDay");
const { onThisDaySchema } = require("../../../schema/v2/onThisDay/onThisDaySchema");

expect.extend(matchers);

describe('Test cases for endpoint: on this day', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getOnThisDay();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getOnThisDay();
        const data = await response.json();
        expect(data).toMatchSchema(onThisDaySchema);
    });
})