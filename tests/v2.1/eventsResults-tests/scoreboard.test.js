const { getScoreboard, getScoreboardWithSingleQuery, getScoreboardWithMultiQuery } = require('../../../requests/eventResults/scoreboard')
const { matchers } = require('jest-json-schema')
const { scoreboardSchema } = require('../../../schema/v2.1/eventsResults/scoreboardSchema')
const { sportID, locationINDICATOR, gameID, sportLIGHT, startDATE, endDATE, pageSIZE } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: scoreboard', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getScoreboard();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getScoreboard();
        const data = await response.json();
        expect(data).toMatchSchema(scoreboardSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getScoreboardWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        });
    });
    // Test case to verify filtering by location indicator
    test('should return filtered result as per location indicator', async () => {
        const response = await getScoreboardWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.locationIndicator).toBe(locationINDICATOR);
        })
    });
    // Test case to verify filtering by gameID
    test('should return filtered results corresponding to passed gameId', async () => {
        const response = await getScoreboardWithSingleQuery('gameId', gameID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.gameId).toBe(gameID);
        });
    });
    // Test case to verify filtering by sportLight value
    test('should return filtered result as per sportLight value', async () => {
        const response = await getScoreboardWithSingleQuery('sportLight', sportLIGHT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.isSpotlight).toBe(sportLIGHT);
        })
    });
    //Test case to verify that the results is filtered to have data only between start date & end date applied
    test('API response dates should be between start date and end date', async () => {
        const start = new Date(startDATE);
        const end = new Date(endDATE);
        const response = await getScoreboardWithMultiQuery('DateRange.StartDate', startDATE, 'DateRange.EndDate', endDATE);
        const data = await response.json();
        data.items.forEach(item => {
            const itemDate = new Date(item.date);
            expect(itemDate >= start && itemDate <= end).toBe(true);
        });
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getScoreboard();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getScoreboardWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getScoreboard();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getScoreboardWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBe(0);
    });
    // test('should return only upcoming events when pass upcoming=true', async () => {
    //     const response = await getScoreboardWithSingleQuery('Upcoming', true);
    //     const data = await response.json();
    //     const currentDate = new Date().getTime();

    //     data.items.forEach(item => {
    //         const eventDate = new Date(item.date).getTime();
    //         expect(eventDate).toBeGreaterThan(currentDate);
    //     });
    // });
    // test('should return only past events when pass upcoming=false', async () => {
    //     const response = await getScoreboardWithSingleQuery('Upcoming', false);
    //     const data = await response.json();
    //     const currentDate = new Date().getTime();

    //     data.items.forEach(item => {
    //         const eventDate = new Date(item.date).getTime();
    //         expect(eventDate).toBeLessThan(currentDate);
    //     });
    // });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getScoreboardWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
})