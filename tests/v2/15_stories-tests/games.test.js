const { getGames, getGames_invalidTenant, getGamesWithSingleQuery } = require('../../../requests/stories/games')
const { baseURL, storyID } = require('../../../config')
const { gamesSchema } = require('../../../schema/v2/stories/gamesSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: games', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getGames();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Stories/games`);
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getGames_invalidTenant();
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getGamesWithSingleQuery('storiesIds', storyID);
        const data = await response.json();
        expect(data).toMatchSchema(gamesSchema);
    });
    // Test case to verify filtering by story ID
    test('should return filtered results corresponding to passed story id', async () => {
        const response = await getGamesWithSingleQuery('storiesIds', storyID);
        const data = await response.json();
        if (response.status === 404) {
            expect(data.Message).toContain("Story's sport name was not found for");
            return;
        }
        expect(data).toHaveProperty(storyID.toString());
    })
})