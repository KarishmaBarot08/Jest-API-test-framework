const supportStaffSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "email": {
                        "type": ["string", "null"]
                    },
                    "phone": {
                        "type": ["string", "null"]
                    },
                    "url": {
                        "type": "string"
                    },
                    "staffId": {
                        "type": "number"
                    },
                    "image": {
                        "type": ["object","null"],
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "absoluteUrl": {
                                "type": "string"
                            },
                            "altText": {
                                "type": "string"
                            },
                            "title": {
                                "type": ["string", "null"]
                            },
                            "creditName": {}
                        },
                        "required": [
                            "url",
                            "absoluteUrl",
                            "altText",
                            "creditName"
                        ]
                    },
                    "socialMediaR": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "platformName": {
                                    "type": "string"
                                },
                                "userName": {},
                                "url": {},
                                "icon": {
                                    "type": ["string","null"]
                                },
                                "oldIcon": {
                                    "type": ["string","null"]
                                }
                            },
                            "required": [
                                "platformName",
                                "userName",
                                "url",
                                "icon",
                                "oldIcon"
                            ]
                        }
                    },
                    "custom1": {
                        "type": ["string", "null"]
                    },
                    "custom2": {},
                    "custom3": {},
                    "custom4": {}
                },
                "required": [
                    "id",
                    "title",
                    "firstName",
                    "lastName",
                    "url",
                    "staffId",
                    "image",
                    "socialMediaR",
                    "custom2",
                    "custom3",
                    "custom4"
                ]
            }
        },
        "total": {
            "type": "number"
        },
        "page": {
            "type": "number"
        },
        "pages": {
            "type": "number"
        }
    },
    "required": [
        "items",
        "total",
        "page",
        "pages"
    ]
};
module.exports = {
    supportStaffSchema
};