const { matchers } = require("jest-json-schema");
const { getContent, getContentWithSingleQuery } = require("../../../requests/tags/content");
const { contentSchema } = require("../../../schema/v2/tags/contentSchema");
const { tagSLUG, pageINDEX, pageSIZE } = require("../../../config");

expect.extend(matchers);

// use tenant id = umichigan-th
describe('Test cases for endpoint: tags/filters', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getContent();
        //bug: needs to be fixed by DEV team
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getContent();
        const data = await response.json();
        //bug: needs to be fixed by DEV team
        expect(data).toMatchSchema(contentSchema);
    });
    // Test case to verify filtering by tag slug
    test('should return filtered page result as per tag slug', async () => {
        const response = await getContentWithSingleQuery('slug', tagSLUG);
        const data = await response.json();
        //bug: needs to be fixed by DEV team
        data.items.forEach(item => {
            const hasMatchingTag = item.tags.some(tag =>
                tag.tagName.toLowerCase().replace(/\s+/g, '-') === tagSLUG
            );
            expect(hasMatchingTag).toBe(true);
        })
    });
    // Test case to verify filtering by page index
    test('should return filtered page result as per page index param', async () => {
        const response = await getContentWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        //bug: needs to be fixed by DEV team
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getContentWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        //bug: needs to be fixed by DEV team
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
})