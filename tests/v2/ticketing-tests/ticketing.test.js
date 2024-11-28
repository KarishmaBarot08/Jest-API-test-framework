const { getTicketing } = require('../../../requests/ticketing/ticketing')
const { ticketingSchema } = require('../../../schema/v2/ticketing/ticketingSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: ticketing', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getTicketing();
        //bug - needs to be fixed by DEV team [tenant: syracuse]
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getTicketing();
        const data = await response.json();
        //bug - needs to be fixed by DEV team [tenant: syracuse]
        expect(data).toMatchSchema(ticketingSchema);
    });
})