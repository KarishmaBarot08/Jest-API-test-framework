const { matchers } = require("jest-json-schema");
const { pageINDEX, pageSIZE } = require("../../../config");
const { getGame, getGameWithSingleQuery, getGame_invalidGameId, getGame_missingGameId } = require("../../../requests/wePlayed/game");
const { gameSchema } = require("../../../schema/v2/wePlayed/gameSchema");

expect.extend(matchers);

describe('Test cases for endpoint: game', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getGame();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getGame();
        const data = await response.json();
        expect(data).toMatchSchema(gameSchema);
    });
    // Test case to verify filtering by page Index
    test('should return filtered page result as per page Index param', async () => {
        const response = await getGameWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBeLessThanOrEqual(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getGameWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by invalid game id
    test('should return error for invalid game id', async () => {
        const response = await getGame_invalidGameId();
        expect(response.status).toBe(400);
    });
    // Test case to verify filtering by missing game id
    test('should return error for missing game id', async () => {
        const response = await getGame_missingGameId();
        expect(response.status).toBe(400);
    });
})