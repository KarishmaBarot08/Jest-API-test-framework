const { matchers } = require("jest-json-schema");
const { getRecord, getRecord_invalidSeasonId } = require("../../../requests/season/record");
const { recordSchema } = require("../../../schema/v2/season/recordSchema");

expect.extend(matchers);

describe('Test cases for endpoint: record', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRecord();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRecord();
        const data = await response.json();
        expect(data).toMatchSchema(recordSchema);
    });
    // Test case to verify response code for invalid season id
    test('should return error for invalid season id', async () => {
        const response = await getRecord_invalidSeasonId();
        expect(response.status).toBe(404);
    });
})