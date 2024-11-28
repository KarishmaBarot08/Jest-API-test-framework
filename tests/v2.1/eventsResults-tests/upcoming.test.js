const { getUpcoming, getUpcoming_invalidTenant, getUpcomingWithSingleQuery, getUpcomingWithMultiQuery } = require('../../../requests/eventResults/upcoming')
const { matchers } = require('jest-json-schema')
const { upcomingSchema } = require('../../../schema/v2.1/eventsResults/upcomingSchema')
const { sportID, gameID, sportLIGHT, locationINDICATOR, pageSIZE, startDATE, endDATE } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: upcoming', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getUpcoming();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getUpcoming();
        const data = await response.json();
        expect(data).toMatchSchema(upcomingSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getUpcomingWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        });
    });
    // Test case to verify filtering by gameID
    test('should return filtered results corresponding to passed gameId', async () => {
        const response = await getUpcomingWithSingleQuery('gameId', gameID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.gameId).toBe(gameID);
        });
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getUpcomingWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by location indicator
    test('should return filtered result as per location indicator', async () => {
        const response = await getUpcomingWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.locationIndicator).toBe(locationINDICATOR);
        })
    });
    // Test case to verify filtering by sportLight value
    test('should return filtered result as per sportLight value', async () => {
        const response = await getUpcomingWithSingleQuery('sportLight', sportLIGHT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.isSpotlight).toBe(sportLIGHT);
        })
    });
    //Test case to verify that the results is filtered to have data only between start date & end date applied
    test('API response dates should be between start date and end date', async () => {
        const start = new Date(startDATE);
        const end = new Date(endDATE);
        const response = await getUpcomingWithMultiQuery('DateRange.StartDate', startDATE, 'DateRange.EndDate', endDATE);
        const data = await response.json();
        data.items.forEach(item => {
            const itemDate = new Date(item.date);
            expect(itemDate >= start && itemDate <= end).toBe(true);
        });
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getUpcoming();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getUpcomingWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getUpcoming();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getUpcomingWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBe(0);
    });
    //Test case to verify that the result is filtered to have future events only
    test('should return only upcoming events when pass upcoming=true', async () => {
        const response = await getUpcomingWithSingleQuery('Upcoming', true);
        const data = await response.json();
        const currentDate = new Date().getTime();

        data.items.forEach(item => {
            const eventDate = new Date(item.date).getTime();
            expect(eventDate).toBeGreaterThan(currentDate);
        });
    });
    //Test case to verify that the result is filtered to have past events only
    test('should return only past events when pass upcoming=false', async () => {
        const response = await getUpcomingWithSingleQuery('Upcoming', false);
        const data = await response.json();
        const currentDate = new Date().getTime();

        data.items.forEach(item => {
            const eventDate = new Date(item.date).getTime();
            expect(eventDate).toBeLessThan(currentDate);
        });
    });
})