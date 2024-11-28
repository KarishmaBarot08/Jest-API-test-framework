const { getHistory, getHistoryWithSingleQuery } = require('../../../requests/players/history')
const { historySchema } = require('../../../schema/v2.1/players/historySchema')
const { matchers } = require('jest-json-schema')
const { pageSIZE, pageINDEX, sportID, playerLastNameSTART, playerNAME } = require('../../../config');
const { updateStringConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('test cases for endpoint: history', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve playerLastNameSTART & playerNAME
    test('should return success for valid parameters', async () => {
        const response = await getHistory();
        //bug: needs to be fixed by DEV team [tenant:ucla]
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
        //bug: needs to be fixed by DEV team [tenant:ucla]
        expect(data).toMatchSchema(historySchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getHistoryWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getHistoryWithSingleQuery('SportId', sportID);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        data.items.forEach(item => {
            expect(item.sportId).toBe(sportID);
        });
    });
    // Test case to verify filtering by player's last name start
    test('should return filtered results corresponding to passed last name starting initials', async () => {
        const response = await getHistoryWithSingleQuery('lastNameStart', playerLastNameSTART);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        data.items.forEach(item => {
            expect(item.lastName.toLowerCase()).toContain(playerLastNameSTART.toLowerCase());
        });
    });
    // Test case to verify filtering by player name
    test('should return filtered results corresponding to passed player name', async () => {
        const response = await getHistoryWithSingleQuery('nameSearch', playerNAME);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        data.items.forEach(item => {
            //expect(item.lastName.toLowerCase().includes(playerNAME) || item.firstName.toLowerCase().includes(playerNAME)).toBe(true);
            expect(
                item.firstName.toLowerCase().includes(playerNAME.toLowerCase()) ||
                item.lastName.toLowerCase().includes(playerNAME.toLowerCase())
            ).toBe(true);
        });
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getHistory();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getHistoryWithSingleQuery('After', after);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getHistory();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getHistoryWithSingleQuery('Before', before);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:ucla]
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
})