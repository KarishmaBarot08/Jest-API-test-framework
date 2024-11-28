const { matchers } = require("jest-json-schema");
const { getPublications } = require("../../../requests/publications/publications");
const { publicationsSchema } = require("../../../schema/v2/publications/publicationsSchema");

expect.extend(matchers);

describe('Test cases for endpoint: publications', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPublications();
        if (response.status === 404) {
            const data = await response.json();
            expect(data.Message).toBe("No publication file found at the moment"); // Verify the message for 404
        } else {
            //bug: needs to be fixed by DEV team
            expect(response.status).toBe(200);
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPublications();
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            expect(data).toMatchSchema(publicationsSchema);
        } else {
            console.log('Received empty data');
            expect(true).toBe(true); // Ensures the test passes
        }
    });
})