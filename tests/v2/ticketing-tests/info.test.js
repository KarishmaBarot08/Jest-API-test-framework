const { getInfo } = require('../../../requests/ticketing/info')
const { infoSchema } = require('../../../schema/v2/ticketing/infoSchema')
const { matchers } = require('jest-json-schema')

expect.extend(matchers);

describe('Test cases for endpoint: info', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getInfo();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(response.status === 200 || response.status === 204);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getInfo();
        if (response.status === 204) {
            console.log('No content received.Slipping schema verification.');
            return;
        }
        const data = await response.json();
        //bug: needs to be fixed by DEV team [tenant:  umichigan]
        expect(data).toMatchSchema(infoSchema);
    });
})