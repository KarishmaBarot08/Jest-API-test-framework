const { matchers } = require("jest-json-schema");
const { getPlayerCareerByRosterPlayerId, getPlayerCareerByPlayerId, getPlayerCareerByRosterPlayerId_invalidSportSlug, getPlayerCareer_noPlayerId_noRosterPlayerId, getPlayerCareerByRosterPlayerId_invalidRosterPlayerId, getPlayerCareerByPlayerId_invalidPlayerId } = require("../../../requests/stats/playerCareer");
const { playerCareerSchemaForPlayerId } = require("../../../schema/v2/stats/playerCareerSchemaForPlayerId");
const { playerCareerSchemaForRosterPlayerId } = require("../../../schema/v2/stats/playerCareerSchemaForRosterPlayerId");

expect.extend(matchers);

describe('Test cases for endpoint: player career', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters :: roster player id', async () => {
        const response = await getPlayerCareerByRosterPlayerId();
        expect(response.status).toBe(200);
    });
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters :: player id', async () => {
        const response = await getPlayerCareerByPlayerId();
        expect(response.status).toBe(200);
    });
    // Test case to verify response code for invalid sport slug
    test('should return error for invalid sport slug', async () => {
        const response = await getPlayerCareerByRosterPlayerId_invalidSportSlug();
        expect(response.status).toBe(404);
    });
    // Test case to verify response code for missing player id and missing roster player id
    test('should return error for missing player id and missing roster player id', async () => {
        const response = await getPlayerCareer_noPlayerId_noRosterPlayerId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid roster player id
    test('should return error for invalid roster player id', async () => {
        const response = await getPlayerCareerByRosterPlayerId_invalidRosterPlayerId();
        expect(response.status).toBe(400);
    });
    // Test case to verify response code for invalid player id
    test('should return error for invalid player id', async () => {
        const response = await getPlayerCareerByPlayerId_invalidPlayerId();
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response :: player id', async () => {
        const response = await getPlayerCareerByPlayerId();
        const data = await response.json();
        expect(data).toMatchSchema(playerCareerSchemaForPlayerId);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response :: roster player id', async () => {
        const response = await getPlayerCareerByRosterPlayerId();
        const data = await response.json();
        expect(data).toMatchSchema(playerCareerSchemaForRosterPlayerId);
    });
})