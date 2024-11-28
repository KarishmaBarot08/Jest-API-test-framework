const { getRosters, getRosters_invalidTenant, getRosters_missingTenant, getRosters_missingSportId, getRostersWithSingleQuery } = require('../../../requests/rosters/rosters')
const { rostersSchema } = require('../../../schema/v2/rosters/rostersSchema')
const { matchers } = require('jest-json-schema')
const { pageINDEX, pageSIZE } = require('../../../config');
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('Test cases for endpoint: rosters', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve roster player id & player id
    test('should return success for valid parameters', async () => {
        const response = await getRosters();
        //bug: needs to be fixed by DEV team [tenant: umichigan-th]
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const rosterPlayerid = data.items[0].players[0].rosterPlayerId;
            if(rosterPlayerid !== null){
            updateNumberConfigItem('rosterPlayerID', rosterPlayerid);
            }else{
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }

        if (Array.isArray(data.items) && data.items.length > 0) {
            const playerid = data.items[0].players[0].playerId;
            if(playerid !== null){
            updateNumberConfigItem('playerID', playerid);
            }else{
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    //Test case to verify response code for invalid tenant id
    test('should return error for invalid tenant id', async () => {
        const response = await getRosters_invalidTenant();
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for missing tenant id
    test('should return error for missing tenant id', async () => {
        const response = await getRosters_missingTenant();
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for missing sportId
    test('should return error for missing sportId', async () => {
        const response = await getRosters_missingSportId();
        //bug: needs to be fixed by DEV team [tenant: umichigan-th]
        expect(response.status).toBe(400);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getRosters();
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: umichigan-th]
        expect(data).toMatchSchema(rostersSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getRostersWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: umichigan-th]
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getRostersWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: umichigan-th]
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
});