const galleriesSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
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
            "date": {
                "type": "string"
            },
            "url": {
                "type": "string"
            },
            "primaryImage": {
                "type": ["object","null"],
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "caption": {
                        "type": ["string", "null"]
                    },
                    "credit": {
                        "type": ["string", "null"]
                    },
                    "imageUrl": {
                        "type": "object",
                        "properties": {
                            "small": {
                                "type": "string"
                            },
                            "medium": {
                                "type": "string"
                            },
                            "large": {
                                "type": "string"
                            },
                            "original": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "small",
                            "medium",
                            "large",
                            "original"
                        ]
                    }
                },
                "required": [
                    "id",
                    "imageUrl"
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
                            "type": ["string","null"]
                        },
                        "shortName": {
                            "type": "string"
                        },
                        "slug": {
                            "type": "string"
                        },
                        "globalSportShortName": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "title",
                        "abbreviation",
                        "shortTitle",
                        "shortName",
                        "slug",
                        "globalSportShortName"
                    ]
                }
            }
        },
        "required": [
            "id",
            "title",
            "date",
            "url",
            "primaryImage",
            "sports"
        ]
    }
};
module.exports = {
    galleriesSchema
};