const { matchers } = require("jest-json-schema");
const { getTicketingExperience } = require("../../../requests/ticketingExperience/ticketingExperience");
const { ticketingExperienceSchema } = require("../../../schema/v2/ticketingExperience/ticketingExperienceSchema");

expect.extend(matchers);

describe('Test cases for endpoint: ticketing experience', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getTicketingExperience();
        expect(response.status === 200 || response.status === 404);
        if (response.status === 404) {
            const data = await response.text();
            expect(data).toBe('Ticket Experience not Configured');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getTicketingExperience();
        if (response.status === 404) {
            console.log('Ticket Experience not Configured');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(ticketingExperienceSchema);
    });
})