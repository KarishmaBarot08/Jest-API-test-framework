const { getResults, getResults_invalidTenant, getResultsWithMultiQuery, getResultsWithSingleQuery } = require('../../../requests/eventResults/results')
const { baseURL, gameID, sportID, pageINDEX, pageSIZE, locationINDICATOR, sportLIGHT, startDATE, endDATE } = require('../../../config')
const { matchers } = require('jest-json-schema')
const { resultsSchema } = require('../../../schema/v2/eventResults/resultsSchema')

expect.extend(matchers);

describe('test cases for endpoint: results', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getResults();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/EventsResults/results`);
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getResults_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getResults();
        const data = await response.json();
        expect(data).toMatchSchema(resultsSchema);
    });
    // Test case to verify results are filtered by applied dates
    test('API response dates should be between start date and end date', async () => {
        // const startDate = '2024-06-10T11:00:00';
        // const endDate = '2024-06-30T11:00:00';
        const start = new Date(startDATE);
        const end = new Date(endDATE);
        const response = await getResultsWithMultiQuery('StartDate', startDATE, 'EndDate', endDATE);
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
    // Test case to verify filtering by game ID
    test('should return filtered result as per gameId param', async () => {
        const response = await getResultsWithSingleQuery('gameId', gameID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.gameId).toBe(gameID);
        })
    });
    // Test case to verify filtering by sportID
    test('should return filtered result as per sportId param', async () => {
        const response = await getResultsWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        })
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getResultsWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getResultsWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by location indicator
    test('should return filtered result as per location indicator', async () => {
        const response = await getResultsWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.locationIndicator).toBe(locationINDICATOR);
        })
    });
    // Test case to verify filtering by sport light
    test('should return filtered result as per sportLight value', async () => {
        const response = await getResultsWithSingleQuery('sportLight', sportLIGHT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.isSpotlight).toBe(sportLIGHT);
        })
    });
});