const pressClipsSchema = {
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
                    "summary": {
                        "type": "string"
                    },
                    "link": {
                        "type": "string"
                    },
                    "date": {
                        "type": "string"
                    },
                    "author": {
                        "type": "string"
                    },
                    "image": {},
                    "source": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "website": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "website"
                        ]
                    },
                    "sport": {
                        "type": ["object", "null"],
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "abbreviation": {
                                "type": "string"
                            },
                            "shortTitle": {
                                "type": "string"
                            },
                            "shortname": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "abbreviation",
                            "shortTitle",
                            "shortname"
                        ]
                    },
                    "sports": {
                        "type": ["array", "null"],
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "number"
                                },
                                "title": {
                                    "type": "string"
                                },
                                "abbreviation": {
                                    "type": "string"
                                },
                                "shortTitle": {
                                    "type": "string"
                                },
                                "shortname": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "abbreviation",
                                "shortTitle",
                                "shortname"
                            ]
                        }
                    },
                    "openInNewWindow": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "id",
                    "title",
                    "summary",
                    "link",
                    "date",
                    "author",
                    "image",
                    "source",
                    "openInNewWindow"
                ]
            }
        },
        "before": {
            "type": ["string","null"]
        },
        "after": {
            "type": ["string","null"]
        }
    },
    "required": [
        "items",
        "before",
        "after"
    ]
};
module.exports = {
    pressClipsSchema
};