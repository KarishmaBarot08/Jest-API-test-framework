const { getDocuments, getDocumentsWithSingleQuery } = require('../../../requests/documents/documents')
const { documentsSchema } = require('../../../schema/v2/documents/documentsSchema')
const { matchers } = require('jest-json-schema')
const { pageINDEX, pageSIZE } = require('../../../config')
const { updateNumberConfigItem } = require('../../../utilities/updateConfigData')

expect.extend(matchers);

describe('test cases for endpoint: documents', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve document id
    test('should return success for valid parameters', async () => {
        const response = await getDocuments();
        expect(response.status).toBe(200);
        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
            const documentid = data.items[0].documentId;
            if (documentid !== null) {
                updateNumberConfigItem('documentID', documentid);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The items array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getDocuments();
        const data = await response.json();
        expect(data).toMatchSchema(documentsSchema);
    });
    // Test case to verify filtering by page index
    test('should return filtered results corresponding to passed page index', async () => {
        const response = await getDocumentsWithSingleQuery('$pageIndex', pageINDEX);
        const data = await response.json();
        expect(data.page).toBe(pageINDEX);
    });
    // Test case to verify the response contains the expected number of items when PageSize is applied
    test('should return filtered results corresponding to passed page size', async () => {
        const response = await getDocumentsWithSingleQuery('$pageSize', pageSIZE);
        const data = await response.json();
        expect(data.items).toHaveLength(pageSIZE);
    });
})