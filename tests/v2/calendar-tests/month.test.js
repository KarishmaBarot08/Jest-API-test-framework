const { getMonth, getMonthWithSingleQuery } = require('../../../requests/calendar/month')
const { monthSchema } = require('../../../schema/v2/calendar/monthSchema')
const { matchers } = require('jest-json-schema')
const { sportID, seasonYEAR, locationINDICATOR } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: month', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getMonth();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getMonth();
        const data = await response.json();
        expect(data).toMatchSchema(monthSchema);
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getMonthWithSingleQuery('year', seasonYEAR);
        const data = await response.json();
        data.forEach(item => {
            expect(item.date).toContain(seasonYEAR);
        })
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getMonthWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                // Check if event is an array and contains a valid object with a sport property
                if (event && event.sport && event.sport.id) {
                    expect(event.sport.id).toBe(sportID);
                } else {
                    throw new Error('Invalid event structure');
                }
            });
        });
    });
    // Test case to verify filtering by location indicator
    test('should return filtered results corresponding to passed location indicator', async () => {
        const response = await getMonthWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event.locationIndicator).toBe(locationINDICATOR);
            })
        })
    });
})