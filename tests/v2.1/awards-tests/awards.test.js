const { getAwards, getAwardsWithSingleQuery } = require('../../../requests/awards/awards')
const { awardsSchema } = require('../../../schema/v2.1/awards/awardsSchema')
const { matchers } = require('jest-json-schema')
const { awardTypeID, pageSIZE } = require('../../../config')

expect.extend(matchers);

// Use tenant id = syracuse
describe('Test cases for endpoint: awards', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getAwards();
        expect(response.status).toBe(200);
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
    // Test case to verify filtering by the HideExpired with 'false' value
    test('should return only expired awards when pass HideExpired=false', async () => {
        const response = await getAwardsWithSingleQuery('HideExpired', false);
        const data = await response.json();
        const currentDate = new Date().getTime();

        data.items.forEach(item => {
            const awardDate = new Date(item.aowExpires).getTime();
            expect(awardDate).toBeLessThan(currentDate);
        });
    });
    // Test case to verify filtering by the HideExpired with 'true' value
    test('should return only live awards when pass HideExpired=true', async () => {
        const response = await getAwardsWithSingleQuery('HideExpired', true);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.aowExpires).toBe(null);
        });
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getAwards();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getAwardsWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getAwards();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getAwardsWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBe(0);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getAwardsWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
})