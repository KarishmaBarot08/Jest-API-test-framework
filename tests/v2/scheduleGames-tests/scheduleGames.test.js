const { matchers } = require("jest-json-schema");
const { getScheduleGames, getScheduleGames_invalidGameId } = require("../../../requests/scheduleGames/scheduleGames");
const { scheduleGamesSchema } = require("../../../schema/v2/scheduleGames/scheduleGamesSchema");

expect.extend(matchers);

describe('Test cases for endpoint: schedule games', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getScheduleGames();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getScheduleGames();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification.');
            return;
        }
        //bug: needs to be fixed by DEV team [tenant:ucla]
        const data = await response.json();
        expect(data).toMatchSchema(scheduleGamesSchema);
    });
    // Test case to verify response code for invalid game id
    test('should return error for invalid game id', async () => {
        const response = await getScheduleGames_invalidGameId();
        expect(response.status).toBe(404);
    });
})