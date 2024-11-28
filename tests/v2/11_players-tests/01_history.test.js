const { getHistory, getHistoryWithSingleQuery } = require('../../../requests/players/history')
const { historySchema } = require('../../../schema/v2/players/historySchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, pageINDEX, sportID, playerLastNameSTART, playerNAME } = require('../../../config');
const { updateStringConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('test cases for endpoint: history', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve player last name initials & player name
    test('should return success for valid parameters', async () => {
        const response = await getHistory();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const lastname = data.items[0].lastName;
            const lastnamestart = lastname.slice(0, 2);
            if (lastnamestart !== null) {
                updateStringConfigItem('playerLastNameSTART', lastnamestart);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }

        if (Array.isArray(data.items) && data.items.length > 0) {
            const playername = data.items[0].firstName;
            if (playername !== null) {
                updateStringConfigItem('playerNAME', playername);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getHistory();
        const data = await response.json();
        expect(data).toMatchSchema(historySchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getHistoryWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getHistoryWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getHistoryWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sportId).toBe(sportID);
        });
    });
    // Test case to verify filtering by player's last name initials
    test('should return filtered results corresponding to passed last name starting initials', async () => {
        const response = await getHistoryWithSingleQuery('lastNameStart', playerLastNameSTART);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.lastName.toLowerCase()).toContain(playerLastNameSTART.toLowerCase());
        });
    });
    // Test case to verify filtering by player's name
    test('should return filtered results corresponding to passed player name', async () => {
        const response = await getHistoryWithSingleQuery('nameSearch', playerNAME);
        const data = await response.json();
        data.items.forEach(item => {
            //expect(item.lastName.toLowerCase().includes(playerNAME) || item.firstName.toLowerCase().includes(playerNAME)).toBe(true);
            expect(
                item.firstName.toLowerCase().includes(playerNAME.toLowerCase()) ||
                item.lastName.toLowerCase().includes(playerNAME.toLowerCase())
            ).toBe(true);
        });
    });
})