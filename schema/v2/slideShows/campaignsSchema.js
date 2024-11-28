const campaignsSchema = {
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
            "subtitle": {
                "type": ["string", "null"]
            },
            "startDate": {
                "type": "string"
            },
            "endDate": {},
            "teaser": {
                "type": ["string", "null"]
            },
            "primaryLink": {
                "type": ["string","null"]
            },
            "links": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "linkId": {
                            "type": "number"
                        },
                        "linkUrl": {
                            "type": "string"
                        },
                        "linkText": {
                            "type": "string"
                        },
                        "created": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "linkId",
                        "linkUrl",
                        "linkText",
                        "created"
                    ]
                }
            },
            "video": {},
            "primaryImage": {
                "type": "object",
                "properties": {
                    "images": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "breakpoint": {
                                    "type": "number"
                                },
                                "alt": {
                                    "type": ["string","null"]
                                },
                                "image": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "breakpoint",
                                "alt",
                                "image"
                            ]
                        }
                    }
                },
                "required": [
                    "images"
                ]
            },
            "secondaryImage": {
                "type": "object",
                "properties": {
                    "images": {
                        "type": "array",
                        "items": {}
                    }
                },
                "required": [
                    "images"
                ]
            }
        },
        "required": [
            "id",
            "title",
            "startDate",
            "endDate",
            "primaryLink",
            "links",
            "video",
            "primaryImage",
            "secondaryImage"
        ]
    }
};
module.exports = {
    campaignsSchema
};