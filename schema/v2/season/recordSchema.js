const recordSchema = {
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
                    "type": "number"
                },
                "sportNonSport": {
                    "type": "boolean"
                },
                "showAtVs": {
                    "type": "boolean"
                },
                "globalSportShortname": {
                    "type": "string"
                },
                "gender": {
                    "type": "string"
                },
                "youtube": {
                    "type": "string"
                },
                "facebook": {
                    "type": "string"
                },
                "twitter": {
                    "type": "string"
                },
                "instagram": {
                    "type": "string"
                },
                "globalSportNameSlug": {
                    "type": "string"
                },
                "url": {},
                "ranking": {
                    "type": "string"
                },
                "gameSynonym": {
                    "type": "string"
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
};
module.exports = {
    recordSchema
};