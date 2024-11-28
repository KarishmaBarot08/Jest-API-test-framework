const { getSeasons } = require('../../../requests/archives/filters/seasons')
const { filtersSeasonsSchema } = require('../../../schema/v2/archives/filtersSeasonsSchema')
const { matchers } = require('jest-json-schema');
const { updateStringConfigItem } = require('../../../utilities/updateConfigData');

expect.extend(matchers);

describe('Test cases for endpoint: filters/seasons', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getSeasons();
        expect(response.status).toBe(200);

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            const seasonyear = data[0].name;
            if(seasonyear !== null){
            updateStringConfigItem('seasonYEAR', seasonyear);
            }else{
                console.log('Value is null, not updating config value.');
            }
        } else {
            console.log('The data array is empty or undefined');
        }
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getSeasons();
        const data = await response.json();
        expect(data).toMatchSchema(filtersSeasonsSchema);
    });
})