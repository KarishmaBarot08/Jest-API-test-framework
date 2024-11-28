const historySchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "playerId": {
                        "type": "number"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "seasons": {
                        "type": "string"
                    },
                    "rosterPlayerId": {
                        "type": "number"
                    },
                    "sportName": {
                        "type": "string"
                    },
                    "sportSlug": {
                        "type": "string"
                    },
                    "image": {
                        "type": ["object", "null"],
                        "properties": {
                            "mediaCaption": {},
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
                                "type": ["string","null"]
                            },
                            "creditName": {}
                        },
                        "required": [
                            "mediaCaption",
                            "url",
                            "absoluteUrl",
                            "altText",
                            "title",
                            "creditName"
                        ]
                    },
                    "sportId": {
                        "type": "number"
                    }
                },
                "required": [
                    "playerId",
                    "firstName",
                    "lastName",
                    "seasons",
                    "rosterPlayerId",
                    "sportName",
                    "sportSlug",
                    "sportId"
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
    historySchema
};