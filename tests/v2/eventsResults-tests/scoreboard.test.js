const { getScoreboard, getScoreboardWithSingleQuery, getScoreboardWithMultiQuery } = require('../../../requests/eventResults/scoreboard')
const { matchers } = require('jest-json-schema')
const { scoreboardSchema } = require('../../../schema/v2/eventResults/scoreboardSchema')
const { sportID, locationINDICATOR, gameID, sportLIGHT, startDATE, endDATE, pageSIZE, pageINDEX } = require('../../../config')

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
    // Test case to verify filtering by  game ID
    test('should return filtered results corresponding to passed gameId', async () => {
        const response = await getScoreboardWithSingleQuery('gameId', gameID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.gameId).toBe(gameID);
        });
    });
    // Test case to verify filtering by sport light
    test('should return filtered result as per sportLight value', async () => {
        const response = await getScoreboardWithSingleQuery('sportLight', sportLIGHT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.isSpotlight).toBe(sportLIGHT);
        })
    });
    // Test case to verify results are filtered by applied dates
    test('API response dates should be between start date and end date', async () => {
        const start = new Date(startDATE);
        const end = new Date(endDATE);
        const response = await getScoreboardWithMultiQuery('DateRange.StartDate', startDATE, 'DateRange.EndDate', endDATE);
        const data = await response.json();
        data.items.forEach(item => {
            const itemDate = new Date(item.date);
            // Normalize dates by setting time to 00:00:00 for comparison, if time is not relevant.
            const itemDateNormalized = new Date(itemDate.setHours(0, 0, 0, 0));
            const startNormalized = new Date(start.setHours(0, 0, 0, 0));
            const endNormalized = new Date(end.setHours(0, 0, 0, 0));
            expect(itemDateNormalized >= startNormalized && itemDateNormalized <= endNormalized).toBe(true);
        });
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getScoreboardWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getScoreboardWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
})