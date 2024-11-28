const { getGroupings } = require('../../../requests/allAmerican/groupings')
const { groupingsSchema } = require('../../../schema/v2/allAmerican/groupingsSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('test cases for endpoint: groupings', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getGroupings();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getGroupings();
        const data = await response.json();
        expect(data).toMatchSchema(groupingsSchema);
    });
})