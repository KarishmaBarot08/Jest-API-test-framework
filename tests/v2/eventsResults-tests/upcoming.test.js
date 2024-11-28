const { getUpcoming, getUpcoming_invalidTenant, getUpcomingWithSingleQuery, getUpcomingWithMultiQuery } = require('../../../requests/eventResults/upcoming')
const { matchers } = require('jest-json-schema')
const { upcomingSchema } = require('../../../schema/v2/eventResults/upcomingSchema')
const { baseURL, sportID, gameID, sportLIGHT, locationINDICATOR, pageINDEX, pageSIZE, startDATE, endDATE } = require('../../../config')

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
    // Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/EventsResults/upcoming`);
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getUpcoming_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getUpcomingWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        });
    });
    // Test case to verify filtering by game ID
    test('should return filtered results corresponding to passed gameId', async () => {
        const response = await getUpcomingWithSingleQuery('gameId', gameID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.gameId).toBe(gameID);
        });
    });
    // Test case to verify results are filtered by applied dates
    test('API response dates should be between start date and end date', async () => {
        // const startDate = '2024-08-01T11:00:00';
        // const endDate = '2024-08-10T11:00:00';
        const start = new Date(startDATE);
        const end = new Date(endDATE);
        const response = await getUpcomingWithMultiQuery('StartDate', startDATE, 'EndDate', endDATE);
        const data = await response.json();
        data.items.forEach(item => {
            const itemDate = new Date(item.date);
            //console.log(item.date);
            expect(itemDate >= start && itemDate <= end).toBe(true);
        });
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getUpcomingWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getUpcomingWithSingleQuery('$pageSize', pageSIZE);
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
    // Test case to verify filtering by sport light
    test('should return filtered result as per sportLight value', async () => {
        const response = await getUpcomingWithSingleQuery('sportLight', sportLIGHT);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.isSpotlight).toBe(sportLIGHT);
        })
    });
})