const { matchers } = require("jest-json-schema");
const { getTags } = require("../../../requests/tags/tags");
const { tagsSchema } = require("../../../schema/v2/tags/tagsSchema");
const { updateStringConfigItem } = require("../../../utilities/updateConfigData");

expect.extend(matchers);

//use tenant id = umichigan-th
describe('Test cases for endpoint: tags', () => {
    // Test case to validate that the API responds successfully for valid parameters and retrieve tag slug
    test('should return success for valid parameters', async () => {
        const response = await getTags();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            const tagslug = data[0].slug;
            if (tagslug !== null) {
                updateStringConfigItem('tagSLUG', tagslug);
            } else {
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined')
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getTags();
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(data).toMatchSchema(tagsSchema);
    });
})