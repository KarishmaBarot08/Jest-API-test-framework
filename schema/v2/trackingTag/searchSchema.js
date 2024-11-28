const searchSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "isDisabled": {
                "type": "boolean"
            },
            "blockDfpAds": {
                "type": "boolean"
            },
            "startDate": {
                "type": ["string", "null"]
            },
            "endDate": {
                "type": ["string", "null"]
            },
            "tagHeadCode": {
                "type": "string"
            },
            "tagOpenBodyCode": {
                "type": ["string","null"]
            },
            "tagCloseBodyCode": {
                "type": ["string","null"]
            },
            "targetingCriteria": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "tagId": {},
                    "pageTemplate": {},
                    "sportName": {},
                    "contentId": {}
                },
                "required": [
                    "id",
                    "tagId",
                    "pageTemplate",
                    "sportName",
                    "contentId"
                ]
            },
            "trackingHeadObject": {
                "type": ["object","null"],
                "properties": {
                    "script": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "src": {
                                    "type": ["string", "null"]
                                },
                                "children": {
                                    "type": ["string", "null"]
                                },
                                "async": {
                                    "type": "boolean"
                                },
                                "type": {
                                    "type": ["string", "null"]
                                },
                                "contentId": {},
                                "sportName": {},
                                "pageTemplate": {},
                                "attributes": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        },
                                        "src": {
                                            "type": "string"
                                        },
                                        "async": {
                                            "type": "string"
                                        }
                                    },
                                    "required": []
                                }
                            },
                            "required": [
                                "async",
                                "contentId",
                                "sportName",
                                "pageTemplate",
                                "attributes"
                            ]
                        }
                    }
                },
                "required": [
                    // "script"
                ]
            },
            "trackingOpenBodyObject": {
                "type": ["object", "null"],
                "properties": {
                    "noscript": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "src": {},
                                "children": {
                                    "type": "string"
                                },
                                "async": {
                                    "type": "boolean"
                                },
                                "type": {},
                                "contentId": {},
                                "sportName": {},
                                "pageTemplate": {},
                                "attributes": {
                                    "type": "object",
                                    "properties": {},
                                    "required": []
                                }
                            },
                            "required": [
                                "src",
                                "children",
                                "async",
                                "type",
                                "contentId",
                                "sportName",
                                "pageTemplate",
                                "attributes"
                            ]
                        }
                    }
                },
                "required": [
                    "noscript"
                ]
            },
            "trackingCloseBodyObject": {},
            "pageTemplate": {},
            "sportName": {},
            "contentId": {}
        },
        "required": [
            "id",
            "name",
            "isDisabled",
            "blockDfpAds",
            "tagHeadCode",
            "tagOpenBodyCode",
            "tagCloseBodyCode",
            "targetingCriteria",
            "trackingHeadObject",
            "trackingCloseBodyObject",
            "pageTemplate",
            "sportName",
            "contentId"
        ]
    }
};
module.exports = {
    searchSchema
};