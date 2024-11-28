const { getArchives, getArchivesWithSingleQuery } = require('../../../requests/hidden/archives')
const { archivesSchema } = require('../../../schema/v2/hidden/archivesSchema')
const { matchers } = require('jest-json-schema')
const { sportID, sportTITLE, storyHeadlinePartialText, seasonYEAR, pageINDEX, pageSIZE, tenant } = require('../../../config');
const { updateStringConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('test cases for endpoint: archives', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve 'story headline partial text
    test('should return success for valid parameters', async () => {
        const response = await getArchives();
        expect(response.status).toBe(200);

        const data = await response.json();

        if (Array.isArray(data.items) && data.items.length > 0) {
            const storyheadline = data.items[0].storyHeadline;
            const storyheadlinepartialtext = storyheadline.split(/[\s\W]+/, 1)[0];
            if (storyheadlinepartialtext !== null) {
                updateStringConfigItem('storyHeadlinePartialText', storyheadlinepartialtext)
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getArchives();
        const data = await response.json();
        expect(data).toMatchSchema(archivesSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sportId', async () => {
        const response = await getArchivesWithSingleQuery('sportId', sportID);
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant: ucla]
        data.items.forEach(item => {
            expect(item.sportTitle).toBe(sportTITLE);
        })
    });
    // Test case to verify filtering by story headline text
    test('should return filtered results corresponding to passed story headline text', async () => {
        const response = await getArchivesWithSingleQuery('search', storyHeadlinePartialText);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.storyHeadline).toContain(storyHeadlinePartialText);
        })
    });
    // Test case to verify filtering by season year
    test('should return filtered results corresponding to passed season year', async () => {
        const response = await getArchivesWithSingleQuery('seasonYear', seasonYEAR);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.storyCreated).toContain(seasonYEAR);
        })
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
})