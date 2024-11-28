const infoSchema = {
    "type": "object",
    "properties": {
        "resVersion": {},
        "backOfficeTimeZone": {
            "type": "string"
        },
        "backOfficeServerName": {
            "type": "string"
        },
        "defaultCountryCode": {
            "type": "string"
        },
        "ticketingOrganization": {},
        "pdiVersion": {
            "type": "string"
        },
        "appVersion": {
            "type": "string"
        },
        "hostname": {
            "type": "string"
        },
        "defaultCurrencyCode": {
            "type": "string"
        }
    },
    "required": [
        "resVersion",
        "backOfficeTimeZone",
        "backOfficeServerName",
        "defaultCountryCode",
        "ticketingOrganization",
        "pdiVersion",
        "appVersion",
        "hostname",
        "defaultCurrencyCode"
    ]
};
module.exports = {
    infoSchema
};