const { getPreviews, getPreviews_invalidTenant, getPreviewsWithSingleQuery } = require('../../../requests/calendar/previews')
const { previewsSchema } = require('../../../schema/v2/calendar/previewsSchema')
const { matchers } = require('jest-json-schema')
const { baseURL, startDATE, endDATE, sportID } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: previews', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getPreviews();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPreviews();
        const data = await response.json();
        expect(data).toMatchSchema(previewsSchema);
    });
    // Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Calendar/previews/from/${startDATE}/to/${endDATE}`);
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getPreviews_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getPreviewsWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                if (event.sport) {
                    expect(event.sport.id).toBe(sportID);
                }
            })
        })
    });
})