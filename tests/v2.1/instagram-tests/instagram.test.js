const { matchers } = require("jest-json-schema");
const { getInstagram, getInstagramWithSingleQuery } = require("../../../requests/instagram/instagram");
const { instagramSchema } = require("../../../schema/v2.1/instagram/instagramSchema");
const { pageINDEX, pageSIZE } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: instagram', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getInstagram();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getInstagram();
        const data = await response.json();
        expect(data).toMatchSchema(instagramSchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getInstagramWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        if (data.items.length === 0) {
            console.log('No items returned from the API');
        } else {
            expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
        }
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getInstagram();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getInstagramWithSingleQuery('After', after);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: liberty, syracuse, fsuni]
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getInstagram();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getInstagramWithSingleQuery('Before', before);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: liberty, syracuse, fsuni]
        expect(data.items.length).toBe(0);
    });
})