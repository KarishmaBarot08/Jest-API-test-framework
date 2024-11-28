const idSchema = {
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
        },
        "sports": {
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
        "sport",
        "sports",
        "openInNewWindow"
    ]
};
module.exports = {
    idSchema
};