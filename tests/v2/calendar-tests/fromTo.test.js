const { getFromTo, getFromToWithSingleQuery } = require('../../../requests/calendar/fromTo')
const { fromToSchema } = require('../../../schema/v2/calendar/fromToSchema')
const { matchers } = require('jest-json-schema')
const { sportID, locationINDICATOR } = require('../../../config')

expect.extend(matchers);

describe('Test cases for endpoint: from to', () => {
    // Test case to validate that the API responds successfully for valid parameters
    test('should return success for valid parameters', async () => {
        const response = await getFromTo();
        //bug: needts to be fixed by DEV team [tenant: syracuse]
        expect(response.status).toBe(200);
    });
    // Test case to verify the data structure matches the defined schema
    test('Verify the data shape of the response', async () => {
        const response = await getFromTo();
        const data = await response.json();
        //bug: needts to be fixed by DEV team [tenant: syracuse]
        expect(data).toMatchSchema(fromToSchema);
    });
    // Test case to verify filtering by sportID
    test('should return filtered results corresponding to passed sport id', async () => {
        const response = await getFromToWithSingleQuery('sportId', sportID);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].sport.id).toBe(sportID);
            })
        })
    });
    // Test case to verify filtering by location indicator
    test('should return filtered results corresponding to passed location indicator', async () => {
        const response = await getFromToWithSingleQuery('locationIndicator', locationINDICATOR);
        const data = await response.json();
        data.forEach(item => {
            item.events.forEach(event => {
                expect(event[0].locationIndicator).toBe(locationINDICATOR);
            })
        })
    });
})