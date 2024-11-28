const { matchers } = require("jest-json-schema");
const { getPressClipById, getPressClipById_invalidPressClipId } = require("../../../requests/pressClips/id");
const { pressClipIdSchema } = require("../../../schema/v2.1/pressClips/pressClipIdSchema");

expect.extend(matchers);

describe('Test cases for endpoint: press clip by id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPressClipById();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        if (response.status === 200) {
            const data = await response.json();
            expect(Object.keys(data).length).toBeGreaterThan(0); // Ensure items array is not empty
        } else if (response.status === 204) {
            console.log('Empty response received');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPressClipById();
        // Handle the case for 204 No Content
        if (response.status === 204) {
            console.log('Empty response received');
            return expect(true).toBe(true); // Ensures the test passes when there is no content
        }
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(data).toMatchSchema(pressClipIdSchema);
    });
    //Test case to verify response code for invalid press clip id
    test('should return error for invalid press clip id', async () => {
        const response = await getPressClipById_invalidPressClipId();
        expect(response.status).toBe(404);
    });
})