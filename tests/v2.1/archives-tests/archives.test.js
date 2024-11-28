const { getArchives, getArchivesWithSingleQuery } = require('../../../requests/archives/archives')
const { matchers } = require('jest-json-schema')
const { archivesSchema } = require('../../../schema/v2.1/archives/archivesSchema')
const { sportTITLE, seasonYEAR, pageSIZE } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: archives', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getArchives();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getArchives();
        const data = await response.json();
        expect(data).toMatchSchema(archivesSchema);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getArchivesWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by search text
    test('should return filtered results corresponding to passed search text', async () => {
        const response = await getArchivesWithSingleQuery('QueryText', sportTITLE);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sportTitle).toContain(sportTITLE);
        })
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getArchivesWithSingleQuery('seasonYear', seasonYEAR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.storyPostdate).toContain(seasonYEAR);
        })
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getArchives();
        const data1 = await response1.json();
        const after = data1.after;
        const response = await getArchivesWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThan(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getArchives();
        const data1 = await response1.json();
        const before = data1.before;
        const response = await getArchivesWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBe(0);
    });
})