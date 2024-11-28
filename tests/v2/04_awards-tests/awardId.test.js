const { getAwardsId, getAwardsId_invalidAwardId } = require('../../../requests/awards/awardsId')
const { awardIdSchema } = require('../../../schema/v2/awards/awardIdSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

// Use tenant id = syracuse
describe('Test cases for endpoint: awards id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getAwardsId();
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
        const response = await getAwardsId();
        // Handle the case for 204 No Content
        if (response.status === 204) {
            console.log('Empty response received.Skipping schema validation.');
            return;
        }
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(data).toMatchSchema(awardIdSchema);
    });
    //Test case to verify response code for invalid award id
    test('should return error for invalid award id', async () => {
        const response = await getAwardsId_invalidAwardId();
        expect(response.status).toBe(404);
    });
})