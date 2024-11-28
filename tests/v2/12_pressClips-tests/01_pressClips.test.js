const { matchers } = require("jest-json-schema");
const { getPressClips, getPressClipsWithSingleQuery } = require("../../../requests/pressClips/pressClips");
const { pressClipsSchema } = require("../../../schema/v2/pressClips/pressClipsSchema");
const { sportID, pageINDEX, pageSIZE } = require("../../../config");
const { updateNumberConfigItem } = require("../../../utilities/updateConfigData");

expect.extend(matchers);

describe('Test cases for endpoint: press clips', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve press clip id
    test('should return success for valid parameters', async () => {
        const response = await getPressClips();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const pressclipid = data.items[0].id;
            if (pressclipid !== null) {
                updateNumberConfigItem('pressClipID', pressclipid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getPressClips();
        const data = await response.json();
        expect(data).toMatchSchema(pressClipsSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getPressClipsWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        })
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getPressClipsWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getPressClipsWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
})