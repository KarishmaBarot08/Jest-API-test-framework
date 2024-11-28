const { getFacilities, getFacilitiesWithSingleQuery } = require('../../../requests/facilities/facilities')
const { facilitiesSchema } = require('../../../schema/v2/facilities/facilitiesSchema')
const { matchers } = require('jest-json-schema')
const { pageINDEX, pageSIZE } = require('../../../config');
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('test cases for endpoint: facilities', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve facility id
    test('should return success for valid parameters', async () => {
        //bug: needs to be fixed by DEV team
        const response = await getFacilities();
        expect(response.status).toBe(200);
        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const facilityid = data.items[0].id;
            if (facilityid !== null) {
                updateNumberConfigItem('facilityID', facilityid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        //bug: needs to be fixed by DEV team
        const response = await getFacilities();
        const data = await response.json();
        expect(data).toMatchSchema(facilitiesSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        //bug: needs to be fixed by DEV team
        const response = await getFacilitiesWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        //bug: needs to be fixed by DEV team
        const response = await getFacilitiesWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
})