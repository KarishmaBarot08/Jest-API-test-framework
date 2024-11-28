const randomSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "positionShort": {
                        "type": ["string", "null"]
                    },
                    "positionLong": {
                        "type": ["string", "null"]
                    },
                    "heightFeet": {
                        "type": ["number", "null"]
                    },
                    "heightInches": {
                        "type": ["number", "null"]
                    },
                    "weight": {
                        "type": ["number", "null"]
                    },
                    "academicYearKey": {
                        "type": "number"
                    },
                    "academicYear": {
                        "type": "string"
                    },
                    "jerseyNumber": {
                        "type": ["string", "null"]
                    },
                    "lastUpdated": {
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
                                "type": ["string", "null"]
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
                    "sport": {
                        "type": "object",
                        "properties": {
                            "abbrev": {
                                "type": "string"
                            },
                            "shortDisplay": {
                                "type": ["string", "null"]
                            },
                            "shortName": {
                                "type": "string"
                            },
                            "globalSportId": {
                                "type": "number"
                            },
                            "globalSportNameSlug": {
                                "type": "string"
                            },
                            "globalSportGender": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": ["string", "null"]
                            }
                        },
                        "required": [
                            "abbrev",
                            "shortDisplay",
                            "shortName",
                            "globalSportId",
                            "globalSportNameSlug",
                            "globalSportGender",
                            "id",
                            "title"
                        ]
                    },
                    "id": {
                        "type": "number"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "hometown": {
                        "type": "string"
                    }
                },
                "required": [
                    "positionShort",
                    "positionLong",
                    "heightFeet",
                    "heightInches",
                    "academicYearKey",
                    "academicYear",
                    "jerseyNumber",
                    "lastUpdated",
                    "sport",
                    "id",
                    "lastName",
                    "firstName",
                    "hometown"
                ]
            }
        },
        "before": {
            "type": "string"
        },
        "after": {
            "type": "string"
        }
    },
    "required": [
        "items",
        "before",
        "after"
    ]
};
module.exports = {
    randomSchema
};