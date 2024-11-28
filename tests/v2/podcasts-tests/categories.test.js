const { getCategories } = require('../../../requests/podcasts/categories')
const { categoriesSchema } = require('../../../schema/v2/podcasts/categoriesSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('test cases for endpoint: categories', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getCategories();
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getCategories();
        const data = await response.json();
        expect(data).toMatchSchema(categoriesSchema);
    });
})