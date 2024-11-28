const { getSports } = require('../../../requests/sports/sports');
const { sportsSchema } = require('../../../schema/v2/sports/sportsSchema');
const { matchers } = require('jest-json-schema');
const { updateStringConfigItem, updateNumberConfigItem } = require('../../../utilities/updateConfigData');
expect.extend(matchers);

describe('Test cases for endpoint: sports', () => {

    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSports();
        expect(response.status).toBe(200);
        const data = await response.json();

        // Check if the response contains an array with data
        if (Array.isArray(data) && data.length > 0) {
            // Extract and update sport title if not null
            const sporttitle = data[0].title;
            if (sporttitle !== null) {
                updateStringConfigItem('sportTITLE', sporttitle); // Update config with sport title
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }

        // Extract and update season ID if not null
        if (Array.isArray(data) && data.length > 0) {
            const seasonid = data[0].seasonId;
            if (seasonid !== null) {
                updateNumberConfigItem('seasonID', seasonid); // Update config with season ID
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }

        // Extract and update sport ID if not null
        if (Array.isArray(data) && data.length > 0) {
            const sportid = data[0].id;
            if (sportid !== null) {
                updateNumberConfigItem('sportID', sportid); // Update config with sport ID
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }

        // Extract and update sport name slug if not null
        if (Array.isArray(data) && data.length > 0) {
            const sportnameslug = data[0].globalSportNameSlug;
            if (sportnameslug !== null) {
                updateStringConfigItem('sportNameSlug', sportnameslug); // Update config with sport name slug
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }

        // Extract and update schedule ID if not null
        if (Array.isArray(data) && data.length > 0) {
            const scheduleid = data[0].scheduleId;
            if (scheduleid !== null) {
                updateNumberConfigItem('scheduleID', scheduleid); // Update config with schedule ID
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }

        // Extract and update roster ID if not null
        if (Array.isArray(data) && data.length > 0) {
            const rosterid = data[0].rosterId;
            if (rosterid !== null) {
                updateNumberConfigItem('rosterID', rosterid); // Update config with roster ID
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }
    });

    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSports();
        const data = await response.json();
        expect(data).toMatchSchema(sportsSchema);
    });
});
