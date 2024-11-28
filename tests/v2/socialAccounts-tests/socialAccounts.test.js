const { matchers } = require("jest-json-schema");
const { getSocialAccounts } = require("../../../requests/socialAccounts/socialAccounts");
const { socialAccountsSchema } = require("../../../schema/v2/socialAccounts/socialAccountsSchema");

expect.extend(matchers);

describe('Test cases for endpoint: social accounts', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSocialAccounts();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSocialAccounts();
        const data = await response.json();
        expect(data).toMatchSchema(socialAccountsSchema);
    });
})