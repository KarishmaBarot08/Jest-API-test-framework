const latestSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "descriptionHtml": {},
                    "cover": {
                        "type": "string"
                    },
                    "previewGif": {
                        "type": "string"
                    },
                    "previewWebp": {
                        "type": "string"
                    },
                    "views": {
                        "type": ["number", "null"]
                    },
                    "created": {
                        "type": "string"
                    },
                    "lastUpdated": {
                        "type": "string"
                    },
                    "saGameId": {
                        "type": "number"
                    },
                    "saTeamId": {
                        "type": "number"
                    },
                    "saAthleteId": {},
                    "links": {
                        "type": "object",
                        "properties": {
                            "embed": {
                                "type": "string"
                            },
                            "api": {}
                        },
                        "required": [
                            "embed",
                            "api"
                        ]
                    },
                    "action": {},
                    "id": {
                        "type": "string"
                    },
                    "eventTs": {
                        "type": "string"
                    }
                },
                "required": [
                    "name",
                    "description",
                    "descriptionHtml",
                    "cover",
                    "previewGif",
                    "previewWebp",
                    "created",
                    "lastUpdated",
                    "saGameId",
                    "saTeamId",
                    "saAthleteId",
                    "links",
                    "action",
                    "id",
                    "eventTs"
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
    latestSchema
};