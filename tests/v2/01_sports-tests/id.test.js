const { getId, getId_invalidSportId } = require('../../../requests/sports/id')
const { matchers } = require('jest-json-schema')
const { idSchema } = require('../../../schema/v2/sports/idSchema')
const { sportID } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getId();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getId();
        if (response.status === 204) {
            console.log('No content receivede. Skipping schema validation');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(idSchema);
    });
    //Test case to verify response code for invalid sport id
    test('should return error for invalid sport id', async () => {
        const response = await getId_invalidSportId();
        expect(response.status).toBe(404);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getId();
        const data = await response.json();
        expect(data.id).toBe(sportID);

    });
})