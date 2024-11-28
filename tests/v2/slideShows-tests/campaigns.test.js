const { getCampaigns } = require('../../../requests/slideShows/campaigns')
const { campaignsSchema } = require('../../../schema/v2/slideShows/campaignsSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: campaigns', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getCampaigns();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getCampaigns();
        const data = await response.json();
        expect(data).toMatchSchema(campaignsSchema);
    });
})