const previewsSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "date": {
                "type": "string"
            },
            "events": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "date": {
                            "type": "string"
                        },
                        "enddate": {},
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
                                "shortname": {
                                    "type": "string"
                                },
                                "shortDisplay": {
                                    "type": "string"
                                },
                                "globalSportShortname": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "abbreviation",
                                "shortname",
                                "shortDisplay",
                                "globalSportShortname"
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "date",
                        "enddate",
                        "sport"
                    ]
                }
            }
        },
        "required": [
            "date",
            "events"
        ]
    }
};
module.exports = {
    previewsSchema
};