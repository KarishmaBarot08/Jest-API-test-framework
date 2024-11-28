const upcomingSchema = {
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
                    "gamePregameStoryId": {},
                    "gamePostgameStoryId": {},
                    "date": {
                        "type": "string"
                    },
                    "endDate": {},
                    "dateUtc": {
                        "type": ["string", "null"]
                    },
                    "endDateUtc": {},
                    "time": {
                        "type": ["string", "null"]
                    },
                    "isDoubleHeader": {
                        "type": "boolean"
                    },
                    "showAtVs": {
                        "type": "boolean"
                    },
                    "tbd": {
                        "type": "boolean"
                    },
                    "allDay": {
                        "type": "boolean"
                    },
                    "teamPrefix": {},
                    "status": {
                        "type": "string"
                    },
                    "locationIndicator": {
                        "type": "string"
                    },
                    "neutralHometeam": {
                        "type": "boolean"
                    },
                    "location": {
                        "type": "string"
                    },
                    "isConference": {
                        "type": "boolean"
                    },
                    "conference": {
                        "type": "string"
                    },
                    "conferenceAbbrev": {
                        "type": "string"
                    },
                    "conferenceLogo": {
                        "type": "string"
                    },
                    "isSpotlight": {
                        "type": "boolean"
                    },
                    "type": {
                        "type": "string"
                    },
                    "tournament": {
                        "type": "string"
                    },
                    "ticketLink": {},
                    "sport": {
                        "type": "object",
                        "properties": {
                            "nonSport": {
                                "type": "boolean"
                            },
                            "atVs": {
                                "type": "boolean"
                            },
                            "gameSynonym": {
                                "type": "string"
                            },
                            "globalSportShortName": {
                                "type": "string"
                            },
                            "shortTitle": {
                                "type": "string"
                            },
                            "scheduleId": {
                                "type": "number"
                            },
                            "abbrev": {
                                "type": "string"
                            },
                            "shortDisplay": {},
                            "shortName": {
                                "type": "string"
                            },
                            "globalSportId": {},
                            "globalSportNameSlug": {},
                            "globalSportGender": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "nonSport",
                            "atVs",
                            "gameSynonym",
                            "globalSportShortName",
                            "shortTitle",
                            "scheduleId",
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
                    "schedule": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "url"
                        ]
                    },
                    "opponent": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "image": {
                                "type": "string"
                            },
                            "prefix": {},
                            "name": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "image",
                            "prefix",
                            "name"
                        ]
                    },
                    "media": {
                        "type": "object",
                        "properties": {
                            "video": {},
                            "videoText": {},
                            "audio": {
                                "type": ["string", "null"]
                            },
                            "audioText": {},
                            "stats": {},
                            "tickets": {},
                            "gameNote": {},
                            "gamePromotionName": {},
                            "tv": {
                                "type": ["string", "null"]
                            },
                            "tvImage": {
                                "type": ["string", "null"]
                            },
                            "tvImageLink": {},
                            "radio": {
                                "type": ["string", "null"]
                            },
                            "custom1": {},
                            "custom2": {},
                            "custom3": {},
                            "gameFiles": {
                                "type": "array",
                                "items": {}
                            },
                            "program": {},
                            "programText": {}
                        },
                        "required": [
                            "video",
                            "videoText",
                            "audioText",
                            "stats",
                            "tickets",
                            "gameNote",
                            "gamePromotionName",
                            "tvImageLink",
                            "custom1",
                            "custom2",
                            "custom3",
                            "gameFiles",
                            "program",
                            "programText"
                        ]
                    },
                    "story": {},
                    "result": {},
                    "gameFacility": {
                        "type": ["object", "null"],
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "url"
                        ]
                    },
                    "promotion": {
                        "type": "object",
                        "properties": {
                            "name": {},
                            "link": {},
                            "image": {},
                            "caption": {},
                            "altText": {}
                        },
                        "required": [
                            "name",
                            "link",
                            "image",
                            "caption",
                            "altText"
                        ]
                    },
                    "eventImage": {
                        "type": "object",
                        "properties": {
                            "image": {},
                            "altText": {},
                            "caption": {},
                            "link": {}
                        },
                        "required": [
                            "image",
                            "altText",
                            "caption",
                            "link"
                        ]
                    },
                    "gameDate": {
                        "type": "string"
                    },
                    "gameId": {
                        "type": "number"
                    }
                },
                "required": [
                    "id",
                    "gamePregameStoryId",
                    "gamePostgameStoryId",
                    "date",
                    "endDate",
                    "endDateUtc",
                    "isDoubleHeader",
                    "showAtVs",
                    "tbd",
                    "allDay",
                    "teamPrefix",
                    "status",
                    "locationIndicator",
                    "neutralHometeam",
                    "location",
                    "isConference",
                    "conference",
                    "conferenceAbbrev",
                    "conferenceLogo",
                    "isSpotlight",
                    "type",
                    "tournament",
                    "ticketLink",
                    "sport",
                    "schedule",
                    "opponent",
                    "media",
                    "story",
                    "result",
                    "promotion",
                    "eventImage",
                    "gameDate",
                    "gameId"
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
    upcomingSchema
};