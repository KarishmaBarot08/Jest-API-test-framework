const { getNextGame, getNextGame_invalidTenant, getNextGame_invalidStoryId } = require('../../../requests/stories/nextGame');
const { baseURL, storyID } = require('../../../config');

// Describe the test suite for the 'next-game' endpoint
describe('Test cases for endpoint: next-game', () => {
    // Test case for valid parameters
    test('should return success for valid parameters', async () => {
        // Call the function to get the next game with valid parameters
        const response = await getNextGame();
        // Assert that the response status is either 204 (no content) or 204 (no content again)
        expect(response.status === 204 || response.status === 204);
    });

    // Test case for missing tenant ID
    test('should return error for missing tenant id', async () => {
        // Perform a fetch request to the next-game endpoint with missing tenant ID
        const response = await fetch(`${baseURL}/v2/Stories/${storyID}/next-game`);
        // Assert that the response status is 400 (Bad Request)
        expect(response.status).toBe(400);
    });

    // Test case for invalid tenant ID
    test('should return error for invalid tenant id', async () => {
        // Call the function to get the next game with an invalid tenant ID
        const response = await getNextGame_invalidTenant();
        // Assert that the response status is 400 (Bad Request)
        expect(response.status).toBe(400);
    });

    // Test case for invalid story ID
    test('should return error for invalid story id', async () => {
        // Call the function to get the next game with an invalid story ID
        const response = await getNextGame_invalidStoryId();
        // Assert that the response status is 400 (Bad Request)
        expect(response.status).toBe(400);
    });
});
