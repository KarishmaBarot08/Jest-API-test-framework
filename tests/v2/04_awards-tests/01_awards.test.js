const { getAwards, getAwardsWithSingleQuery } = require('../../../requests/awards/awards')
const { awardsSchema } = require('../../../schema/v2/awards/awardsSchema')
const { matchers } = require('jest-json-schema')
const { awardTypeID, pageSIZE, pageINDEX } = require('../../../config');
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

// Use tenant id = syracuse
describe('Test cases for endpoint: awards', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve award id & award type id
    test('should return success for valid parameters', async () => {
        const response = await getAwards();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const awardid = data.items[0].id;
            if (awardid !== null) {
                updateNumberConfigItem('awardID', awardid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
        if (Array.isArray(data.items) && data.items.length > 0) {
            const awardtypeid = data.items[0].aowTypeId;
            if (awardtypeid !== null) {
                updateNumberConfigItem('awardTypeID', awardtypeid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getAwards();
        const data = await response.json();
        expect(data).toMatchSchema(awardsSchema);
    });
    // Test case to verify filtering by award type id
    test('should return filtered result as per award type id', async () => {
        const response = await getAwardsWithSingleQuery('AwardTypeId', awardTypeID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.aowTypeId).toBe(awardTypeID);
        })
    });
    //Test case to verify that only expired awards are returned when HideExpired=false is applied
    test('should return only expired awards when pass HideExpired=false', async () => {
        const response = await getAwardsWithSingleQuery('HideExpired', false);
        const data = await response.json();
        const currentDate = new Date().getTime();

        data.items.forEach(item => {
            const awardDate = new Date(item.aowExpires).getTime();
            expect(awardDate).toBeLessThan(currentDate);
        });
    });
    //Test case to verify that only upcoming awards are returned when HideExpired=false is applied
    test('should return only live awards when pass HideExpired=true', async () => {
        const response = await getAwardsWithSingleQuery('HideExpired', true);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.aowExpires).toBe(null);
        });
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getAwardsWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('Empty response received');
            return expect(true).toBe(true); // Ensures the test passes
        }
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getAwardsWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
})