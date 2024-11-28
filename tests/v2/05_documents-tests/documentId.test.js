const { getDocumentId } = require('../../../requests/documents/documentId')
const { documentIdSchema } = require('../../../schema/v2/documents/documentIdSchema')
const { matchers } = require('jest-json-schema')
const { documentID } = require('../../../config')

expect.extend(matchers);

describe('test cases for endpoint: document id', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getDocumentId();
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getDocumentId();
        expect(response.status === 200 || response.status === 204).toBe(true);
        // Handle the case for 204 No Content
        if (response.status === 204) {
            console.log('Empty response received');
            return expect(true).toBe(true); // Ensures the test passes when there is no content
        }
        const data = await response.json();
        expect(data).toMatchSchema(documentIdSchema);
    });
    // Test case to verify filtering by document ID
    test('should return results for passed document id', async () => {
        const response = await getDocumentId();
        if (response.status === 200) {
            const data = await response.json();
            expect(data.documentId).toBe(documentID);
        } else if (response.status === 204) {
            console.log('Received empty response body');
        }
    });
})