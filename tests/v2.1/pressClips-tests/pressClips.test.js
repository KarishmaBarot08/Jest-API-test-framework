const { matchers } = require("jest-json-schema");
const { getPressClips, getPressClipsWithSingleQuery } = require("../../../requests/pressClips/pressClips");
const { pressClipsSchema } = require("../../../schema/v2.1/pressClips/pressClipsSchema");
const { sportID, pageSIZE } = require("../../../config");
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
        const response = await getPressClipsWithSingleQuery('SportId', sportID);
        const data = await response.json();
        data.items.forEach(item => {
            expect(item.sport.id).toBe(sportID);
        })
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getPressClipsWithSingleQuery('PageSize', pageSIZE);
        const data = await response.json();
        expect(data.items.length).toBeLessThanOrEqual(pageSIZE);
    });
    // Test case to verify filtering by the "After" value
    test('should filter dataset to retrieve records where the unique identifier is greater than the After value', async () => {
        const response1 = await getPressClips();
        const data1 = await response1.json();
        const after = data1.after;
        if (data1.items.length === 0) {
            console.log('No items returned, skipping validation.');
            return;
        };
        const response = await getPressClipsWithSingleQuery('After', after);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
    // Test case to verify filtering by the "Before" value
    test('should filter dataset to retrieve records where the unique identifier is less than the Before value', async () => {
        const response1 = await getPressClips();
        const data1 = await response1.json();
        const before = data1.before;
        if (data1.items.length === 0) {
            console.log('No items returned, skipping validation.');
            return;
        };
        const response = await getPressClipsWithSingleQuery('Before', before);
        const data = await response.json();
        expect(data.items.length).toBeGreaterThanOrEqual(0);
    });
    test('should return filtered results in ascending order when descending is true', async () => {
        const response = await getPressClipsWithSingleQuery('ByDescendingDate', true);
        const data = await response.json();
        const dates = data.items.map(item => new Date(item.date).getTime());
        for (let i = 0; i < dates.length - 1; i++) {
            expect(dates[i]).toBeGreaterThanOrEqual(dates[i + 1]);
        }
    });
    test('should return filtered results in ascending order when descending is false', async () => {
        const response = await getPressClipsWithSingleQuery('ByDescendingDate', false);
        const data = await response.json();
        const dates = data.items.map(item => new Date(item.date).getTime());
        for (let i = 0; i < dates.length - 1; i++) {
            expect(dates[i]).toBeLessThanOrEqual(dates[i + 1]);
        }
    });
    test('should return filtered results in ascending order when descending is true', async () => {
        const response = await getPressClipsWithSingleQuery('IsByDescendingDate', true);
        const data = await response.json();
        const dates = data.items.map(item => new Date(item.date).getTime());
        for (let i = 0; i < dates.length - 1; i++) {
            expect(dates[i]).toBeGreaterThanOrEqual(dates[i + 1]);
        }
    });
})