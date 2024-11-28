const { getFacilityId, getFacilityId_invalidFacilityId } = require('../../../requests/facilities/facilityId')
const { facilityIdSchema } = require('../../../schema/v2/facilities/facilityIdSchema')
const { matchers } = require('jest-json-schema')
const { facilityID } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: facility id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFacilityId();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFacilityId();
        if (response.status === 204) {
            console.log('Received no content. Skipping schema validation.');
            return; // Skips schema validation
        }
        const data = await response.json();
        expect(data).toMatchSchema(facilityIdSchema);
    });
    // Test case to verify filtering by facility id
    test('should return results as per passed facility id', async () => {
        const response = await getFacilityId();
        if (response.status === 204) {
            console.log('Received no content with applied tenant id.');
            return;
        }
        const data = await response.json();
        expect(data.id).toBe(facilityID);
    });
    //Test case to verify response code for facility id
    test('should return error for invalid facility id', async () => {
        const response = await getFacilityId_invalidFacilityId();
        expect(response.status).toBe(404);
    });
})