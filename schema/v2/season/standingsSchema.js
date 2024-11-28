const standingsSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "scheduleId": {
                        "type": "number"
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
                            "shortname": {
                                "type": "string"
                            },
                            "shortTitle": {
                                "type": "string"
                            },
                            "globalSportId": {
                                "type": ["number","null"]
                            },
                            "sportNonSport": {
                                "type": "boolean"
                            },
                            "showAtVs": {
                                "type": "boolean"
                            },
                            "globalSportShortname": {
                                "type": ["string","null"]
                            },
                            "gender": {
                                "type": ["string", "null"]
                            },
                            "youtube": {},
                            "facebook": {
                                "type": ["string", "null"]
                            },
                            "twitter": {
                                "type": ["string", "null"]
                            },
                            "instagram": {
                                "type": ["string", "null"]
                            },
                            "globalSportNameSlug": {
                                "type": "string"
                            },
                            "url": {},
                            "ranking": {
                                "type": "string"
                            },
                            "gameSynonym": {
                                "type": ["string", "null"]
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "abbreviation",
                            "shortname",
                            "shortTitle",
                            "globalSportId",
                            "sportNonSport",
                            "showAtVs",
                            "globalSportShortname",
                            "gender",
                            "youtube",
                            "facebook",
                            "twitter",
                            "instagram",
                            "globalSportNameSlug",
                            "url",
                            "ranking",
                            "gameSynonym"
                        ]
                    },
                    "seasonId": {
                        "type": "number"
                    },
                    "scheduleDisplayTitle": {
                        "type": "string"
                    },
                    "overallRecord": {
                        "type": "string"
                    },
                    "overallPercentage": {
                        "type": "string"
                    },
                    "overallRecordUnformatted": {
                        "type": "string"
                    },
                    "conferenceRecord": {
                        "type": "string"
                    },
                    "conferencePercentage": {
                        "type": "string"
                    },
                    "conferencePoints": {
                        "type": "string"
                    },
                    "streak": {
                        "type": "string"
                    },
                    "homeRecord": {
                        "type": "string"
                    },
                    "awayRecord": {
                        "type": "string"
                    },
                    "neutralRecord": {
                        "type": "string"
                    }
                },
                "required": [
                    "scheduleId",
                    "sport",
                    "seasonId",
                    "scheduleDisplayTitle",
                    "overallRecord",
                    "overallPercentage",
                    "overallRecordUnformatted",
                    "conferenceRecord",
                    "conferencePercentage",
                    "conferencePoints",
                    "streak",
                    "homeRecord",
                    "awayRecord",
                    "neutralRecord"
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
    standingsSchema
};