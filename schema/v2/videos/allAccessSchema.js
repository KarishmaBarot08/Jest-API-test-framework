const allAccessSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "date": {
                        "type": "string"
                    },
                    "duration": {
                        "type": ["number","null"]
                    },
                    "videoUrl": {
                        "type": "string"
                    },
                    "posterUrl": {
                        "type": "string"
                    },
                    "appExclusive": {
                        "type": "boolean"
                    },
                    "views": {
                        "type": "number"
                    },
                    "favorites": {
                        "type": "number"
                    },
                    "format": {
                        "type": "string"
                    },
                    "sport": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "abbrev": {
                                "type": "string"
                            },
                            "shortName": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "abbrev",
                            "shortName"
                        ]
                    },
                    "category": {
                        "type": ["object","null"],
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title"
                        ]
                    },
                    "captionFile": {}
                },
                "required": [
                    "id",
                    "title",
                    "description",
                    "date",
                    "duration",
                    "videoUrl",
                    "posterUrl",
                    "appExclusive",
                    "views",
                    "favorites",
                    "format",
                    "sport",
                    "category",
                    "captionFile"
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
    allAccessSchema
};