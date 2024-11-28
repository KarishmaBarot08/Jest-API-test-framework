const { getArchives, getArchives_invalidTenant, getArchivesWithSingleQuery } = require('../../../requests/archives/archives')
const { matchers } = require('jest-json-schema')
const { archivesSchema } = require('../../../schema/v2/archives/archivesSchema')
const { baseURL, pageINDEX, pageSIZE, sportTITLE, seasonYEAR } = require('../../../config')

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
    //Test case to verify response code for invalid tenant
    test('should return error for invalid tenant id', async () => {
        const response = await getArchives_invalidTenant();
        expect(response.status).toBe(400);
    });
    //Test case to verify response code for missing tenant
    test('should return error for missing tenant id', async () => {
        const response = await fetch(`${baseURL}/v2/Archives`);
        expect(response.status).toBe(400);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getArchivesWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getArchivesWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
    // Test case to verify filtering by sport title
    test('should return filtered results corresponding to passed search text', async () => {
        const response = await getArchivesWithSingleQuery('search', sportTITLE);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.storyHeadline.toLowerCase()).toContain(sportTITLE.toLowerCase());
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
})