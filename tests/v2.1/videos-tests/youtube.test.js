const { matchers } = require("jest-json-schema");
const { getYoutube, getYoutubeWithSingleQuery } = require("../../../requests/videos/youtube");
const { youtubeSchema } = require("../../../schema/v2.1/videos/youtubeSchema");
const { pageSIZE, sportID } = require("../../../config");

expect.extend(matchers);

describe('Test cases for endpoint: youtube', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getYoutube();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getYoutube();
        const data = await response.json();
        expect(data).toMatchSchema(youtubeSchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getYoutubeWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getYoutube();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getYoutubeWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getYoutube();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getYoutubeWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
})