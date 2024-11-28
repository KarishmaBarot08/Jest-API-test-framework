const { getEvents, getEventsWithSingleQuery } = require('../../../requests/calendar/events')
const { matchers } = require('jest-json-schema')
const { eventsSchema } = require('../../../schema/v2/calendar/eventsSchema')
const { seasonYEAR, sportID, locationINDICATOR } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: events', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getEvents();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getEvents();
        const data = await response.json();
        expect(data).toMatchSchema(eventsSchema);
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getEventsWithSingleQuery('year', seasonYEAR);
        const data = await response.json();
        data.forEach(item => {
            expect(item.date).toContain(seasonYEAR);
        })
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getEventsWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].sport.id).toBe(sportID);
            })
        })
    });
    // Test case to verify filtering by location indicator
    test('should return filtered results corresponding to passed location indicator', async () => {
        const response = await getEventsWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].locationIndicator).toBe(locationINDICATOR);
            })
        })
    });
})