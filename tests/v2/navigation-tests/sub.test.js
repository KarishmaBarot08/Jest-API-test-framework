const { getSub, getSub_invalidSportId } = require('../../../requests/navigation/sub')
const { subSchema } = require('../../../schema/v2/navigation/subSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: sub', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSub();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getSub_invalidSportId();
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSub();
        const data = await response.json();
        expect(data).toMatchSchema(subSchema);
    });
})