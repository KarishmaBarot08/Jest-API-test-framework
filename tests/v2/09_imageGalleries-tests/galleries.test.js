const { matchers } = require("jest-json-schema");
const { getGalleries, getGalleriesWithSingleQuery } = require("../../../requests/imagegalleries/galleries");
const { galleriesSchema } = require("../../../schema/v2/imageGalleries/galleriesSchema");
const { pageSIZE, pageINDEX, galleryID, sportID, tenant } = require("../../../config");
const { updateNumberConfigItem } = require("../../../utilities/updateConfigData");

expect.extend(matchers);

describe('Test cases for endpoint: galleries', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve gallery id
    test('should return success for valid parameters', async () => {
        const response = await getGalleries();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            const galleryid = data[0].id;
            if (galleryid !== null) {
                updateNumberConfigItem('galleryID', galleryid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined')
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getGalleries();
        const data = await response.json();
        expect(data).toMatchSchema(galleriesSchema);
    });
    // test('should return filtered results corresponding to passed page index', async () => {
    //     const response = await getGalleriesWithSingleQuery('$pageIndex', pageINDEX);
    //     const data = await response.json();
    //     expect(data.page).toBe(pageINDEX);
    // });
    // test('should return filtered results corresponding to passed page size', async () => {
    //     const response = await getGalleriesWithSingleQuery('$pageSize', pageSIZE);
    //     const data = await response.json();
    //     expect(data.items).toHaveLength(pageSIZE);
    // });
    // Test case to verify filtering by gallery ID
    test('should return filtered results corresponding to passed galley id', async () => {
        const response = await getGalleriesWithSingleQuery('galleryId', galleryID);
        const data = await response.json();
        if (data.length > 0) {
            expect(data[0].id).toBe(galleryID);
        } else {
            console.log('The array is empty.');
        }
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getGalleriesWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            expect(item.sports[0].id).toBe(sportID);
        })
    });
})