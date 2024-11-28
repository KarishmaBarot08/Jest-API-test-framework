const { getOpponentList, getOpponentList_invalidSportId, getOpponentListWithSingleQuery } = require('../../../requests/opponentHistory/list')
const { opponentListSchema } = require('../../../schema/v2/opponentHistory/listSchema')
const { matchers } = require('jest-json-schema')
const { pageINDEX, pageSIZE } = require('../../../config');
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('Test cases for endpoint: opponent list', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve opponent id
    test('should return success for valid parameters', async () => {
        const response = await getOpponentList();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const opponentid = data.items[0].opponent.id;
            if (opponentid !== null) {
                updateNumberConfigItem('opponentID', opponentid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getOpponentList();
        const data = await response.json();
        expect(data).toMatchSchema(opponentListSchema);
    });
    // Test case to verify response code for invalid roster id
    test('should return error for invalid roster id', async () => {
        const response = await getOpponentList_invalidSportId();
        expect(response.status).toBe(404);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getOpponentListWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getOpponentListWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
})