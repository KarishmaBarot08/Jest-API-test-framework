const { matchers } = require("jest-json-schema");
const { getSeason_missingSportId } = require("../../../requests/season/season");
const { getStandingsBySportId, getStandingsBySeasonId, getStandingsByInvalidSportId, getStandingsByInvalidSeasonId, getStandings_missingSportId_missingSeasonId, getStandingsBySportIdWithSingleQuery, getStandingsBySeasonIdWithSingleQuery } = require("../../../requests/season/standing");
const { standingsSchema } = require("../../../schema/v2/season/standingsSchema");
const { pageINDEX, pageSIZE, sportID, seasonID } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: standings', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameter : sport id', async () => {
        const response = await getStandingsBySportId();
        expect(response.status).toBe(200);
    });
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameter : season id', async () => {
        const response = await getStandingsBySeasonId();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for invalid season id
    test('should return error for invalid sport id', async () => {
        const response = await getStandingsByInvalidSportId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid season id
    test('should return error for invalid season id', async () => {
        const response = await getStandingsByInvalidSeasonId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for missing season id and missing sport id
    test('should return error for missing season id and missing sport id', async () => {
        const response = await getStandings_missingSportId_missingSeasonId();
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response for request with sport id', async () => {
        const response = await getStandingsBySportId();
        const data = await response.json();
        expect(data).toMatchSchema(standingsSchema);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response for request with season id', async () => {
        const response = await getStandingsBySeasonId();
        const data = await response.json();
        expect(data).toMatchSchema(standingsSchema);
    });
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param :: request using sport id', async () => {
        const response = await getStandingsBySportIdWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBeLessThanOrEqual(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size :: request using sport id', async () => {
        const response = await getStandingsBySportIdWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param :: request using season id', async () => {
        const response = await getStandingsBySeasonIdWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBeLessThanOrEqual(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size :: request using season id', async () => {
        const response = await getStandingsBySeasonIdWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getStandingsBySportId();
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        })
    });
    // Test case to verify filtering by season ID
    test('should return filtered results corresponding to passed season id', async () => {
        const response = await getStandingsBySeasonId();
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.seasonId).toBe(seasonID);
        })
    });
})