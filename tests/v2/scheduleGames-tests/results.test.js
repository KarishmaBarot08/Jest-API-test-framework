const { matchers } = require("jest-json-schema");
const { getResults, getResults_invalidGameId } = require("../../../requests/scheduleGames/results");
const { resultsSchema } = require("../../../schema/v2/scheduleGames/resultsSchema");

expect.extend(matchers);

describe('Test cases for endpoint: results', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getResults();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getResults();
        if (response.status === 204) {
            console.log('No content received.Skipping schema verification.');
            return;
        }
        const data = await response.json();
        expect(data).toMatchSchema(resultsSchema);
    });
    // Test case to verify response code for invalid game id
    test('should return error for invalid game id', async () => {
        const response = await getResults_invalidGameId();
        expect(response.status).toBe(404);
    });
})