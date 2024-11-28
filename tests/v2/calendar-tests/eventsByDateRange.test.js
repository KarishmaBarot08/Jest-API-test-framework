const { getEventsByDateRange, getEventsByDateRangeWithSingleQuery } = require('../../../requests/calendar/eventsByDateRange')
const { eventsByDateRangeSchema } = require('../../../schema/v2/calendar/eventsByDateRangeSchema')
const { matchers } = require('jest-json-schema')
const { sportID, locationINDICATOR } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: events date range', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getEventsByDateRange();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getEventsByDateRange();
        const data = await response.json();
        expect(data).toMatchSchema(eventsByDateRangeSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getEventsByDateRangeWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].sport.id).toBe(sportID);
            })
        })
    });
    // Test case to verify filtering by location indicator
    test('should return filtered results corresponding to passed location indicator', async () => {
        const response = await getEventsByDateRangeWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].locationIndicator).toBe(locationINDICATOR);
            })
        })
    });
})