const { getHomepage } = require('../../../requests/countDown/homepage')
const { homepageSchema } = require('../../../schema/v2/countDown/homepageSchema')
const { matchers } = require('jest-json-schema')
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData')

expect.extend(matchers);

describe('test cases for endpoint: homepage', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve game id
    test('should return success for valid parameters', async () => {
        const response = await getHomepage();
        if (response.status === 200) {
            const data = await response.json();
            expect(Object.keys(data).length).toBeGreaterThan(0); // Ensure items array is not empty
            if (data && data.game && data.game.id) {
                const gameid = data.game.id;
                if (gameid !== null) {
                    updateNumberConfigItem('gameID', gameid);
                } else {
                    console.log('Value is null, not updating config value.');
                }
            } else {
                console.log('The data array is empty or undefined')
            }
        } else if (response.status === 204) {
            console.log('Empty response received');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getHomepage();
        expect(response.status === 200 || response.status === 204).toBe(true);
        // Handle the case for 204 No Content
        if (response.status === 204) {
            console.log('Empty response received');
            return expect(true).toBe(true); // Ensures the test passes when there is no content
        }
        const data = await response.json();
        expect(data).toMatchSchema(homepageSchema);
    });
})