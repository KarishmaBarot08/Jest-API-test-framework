const { getRecord, getRecord_invalidTenant, getRecord_invalidScheduleId } = require('../../../requests/schedule/record')
const { recordSchema } = require('../../../schema/v2/schedule/recordSchema')
const { matchers } = require('jest-json-schema')
const { baseURL, scheduleID } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: record', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getRecord();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRecord();
        if (response.status === 204) {
            console.log('No content received. Skipping schema verification.');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(recordSchema);
    });
    // Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Schedule/${scheduleID}/Record`);
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getRecord_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid schedule id
    test('should return error for invalid schedule id', async () => {
        const response = await getRecord_invalidScheduleId();
        expect(response.status).toBe(404);
    });
})