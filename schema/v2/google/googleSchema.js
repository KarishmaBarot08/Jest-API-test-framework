const googleSchema = {
    "type": "object",
    "properties": {
        "google360PropertyId": {
            "type": "string"
        },
        "isPower5Client": {
            "type": "boolean"
        },
        "isAllAccessEnabled": {
            "type": "boolean"
        },
        "ticketProvider": {},
        "clientRegion": {},
        "clientMMR": {
            "type": "string"
        },
        "isClientFanbasePartner": {
            "type": "boolean"
        },
        "isClientSidearmExtended": {
            "type": "boolean"
        },
        "isPaciolanMarketingClient": {
            "type": "boolean"
        },
        "clientDivision": {
            "type": "string"
        },
        "conferenceName": {
            "type": "string"
        },
        "clientName": {
            "type": "string"
        },
        "paciolanDataAccountId": {
            "type": ["number","null"]
        },
        "clientId": {
            "type": "string"
        },
        "clientAbbreviation": {
            "type": "string"
        },
        "customCdnIdentifier": {},
        "isRelatedVideosComponentEnabled": {
            "type": "boolean"
        }
    },
    "required": [
        "google360PropertyId",
        "isPower5Client",
        "isAllAccessEnabled",
        "ticketProvider",
        "clientRegion",
        "clientMMR",
        "isClientFanbasePartner",
        "isClientSidearmExtended",
        "isPaciolanMarketingClient",
        "clientDivision",
        "conferenceName",
        "clientName",
        "paciolanDataAccountId",
        "clientId",
        "clientAbbreviation",
        "customCdnIdentifier",
        "isRelatedVideosComponentEnabled"
    ]
};
module.exports = {
    googleSchema
};