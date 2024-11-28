const scoreboardSchema = {
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
                    "gamePostgameStoryId": {
                        "type": ["number", "null"]
                    },
                    "date": {
                        "type": "string"
                    },
                    "endDate": {},
                    "dateUtc": {
                        "type": ["string","null"]
                    },
                    "endDateUtc": {},
                    "time": {
                        "type": ["string","null"]
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
                        "type": ["string","null"]
                    },
                    "isConference": {
                        "type": "boolean"
                    },
                    "conference": {
                        "type": ["string","null"]
                    },
                    "conferenceAbbrev": {
                        "type": ["string","null"]
                    },
                    "conferenceLogo": {},
                    "isSpotlight": {
                        "type": "boolean"
                    },
                    "type": {
                        "type": "string"
                    },
                    "tournament": {
                        "type": ["string", "null"]
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
                                "type": ["string","null"]
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
                                "type": ["number","null"]
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
                            "video": {
                                "type": ["string", "null"]
                            },
                            "videoText": {},
                            "audio": {},
                            "audioText": {},
                            "stats": {
                                "type": ["string", "null"]
                            },
                            "tickets": {
                                "type": ["string", "null"]
                            },
                            "gameNote": {},
                            "gamePromotionName": {},
                            "tv": {
                                "type": ["string", "null"]
                            },
                            "tvImage": {
                                "type": ["string", "null"]
                            },
                            "tvImageLink": {
                                "type": ["string", "null"]
                            },
                            "radio": {},
                            "custom1": {},
                            "custom2": {},
                            "custom3": {},
                            "gameFiles": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "cssClass": {},
                                        "title": {
                                            "type": "string"
                                        },
                                        "url": {
                                            "type": ["string","null"]
                                        }
                                    },
                                    "required": [
                                        "cssClass",
                                        "title",
                                        "url"
                                    ]
                                }
                            },
                            "program": {},
                            "programText": {}
                        },
                        "required": [
                            "videoText",
                            "audio",
                            "audioText",
                            "gameNote",
                            "gamePromotionName",
                            "radio",
                            "custom1",
                            "custom2",
                            "custom3",
                            "gameFiles",
                            "program",
                            "programText"
                        ]
                    },
                    "story": {
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
                            },
                            "relativeImageSource": {
                                "type": "string"
                            },
                            "absoluteImageSource": {
                                "type": "string"
                            },
                            "date": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "url",
                            "relativeImageSource",
                            "absoluteImageSource",
                            "date"
                        ]
                    },
                    "result": {
                        "type": ["object", "null"],
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "teamScore": {},
                            "opponentScore": {},
                            "preScore": {
                                "type": ["string", "null"]
                            },
                            "postScore": {},
                            "boxScore": {},
                            "gameId": {
                                "type": "number"
                            },
                            "lineScores": {}
                        },
                        "required": [
                            "status",
                            "teamScore",
                            "opponentScore",
                            "postScore",
                            "boxScore",
                            "gameId",
                            "lineScores"
                        ]
                    },
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
                                "type": ["string","null"]
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
                    "date",
                    "endDate",
                    "dateUtc",
                    "endDateUtc",
                    "time",
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
                    "ticketLink",
                    "sport",
                    "schedule",
                    "opponent",
                    "media",
                    "promotion",
                    "eventImage",
                    "gameDate",
                    "gameId"
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
    scoreboardSchema
};