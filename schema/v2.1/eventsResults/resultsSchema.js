const resultsSchema = {
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
                        "type": "number"
                    },
                    "date": {
                        "type": "string"
                    },
                    "endDate": {},
                    "dateUtc": {
                        "type": "string"
                    },
                    "endDateUtc": {},
                    "time": {
                        "type": "string"
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
                    "teamPrefix": {
                        "type": ["string", "null"]
                    },
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
                            "prefix": {
                                "type": ["string", "null"]
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "image",
                            "name"
                        ]
                    },
                    "media": {
                        "type": "object",
                        "properties": {
                            "video": {
                                "type": "string"
                            },
                            "videoText": {},
                            "audio": {
                                "type": ["string", "null"]
                            },
                            "audioText": {},
                            "stats": {
                                "type": "string"
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
                            "radio": {
                                "type": ["string", "null"]
                            },
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
                                            "type": "string"
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
                            "video",
                            "videoText",
                            "audioText",
                            "stats",
                            "gameNote",
                            "gamePromotionName",
                            "custom1",
                            "custom2",
                            "custom3",
                            "gameFiles",
                            "program",
                            "programText"
                        ]
                    },
                    "story": {
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
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "teamScore": {
                                "type": ["string", "null"]
                            },
                            "opponentScore": {
                                "type": ["string", "null"]
                            },
                            "preScore": {
                                "type": ["string", "null"]
                            },
                            "postScore": {
                                "type": ["string", "null"]
                            },
                            "boxScore": {
                                "type": ["string", "null"]
                            },
                            "gameId": {
                                "type": "number"
                            },
                            "lineScores": {
                                "type": ["object", "null"],
                                "properties": {
                                    "game_winner": {
                                        "type": "string"
                                    },
                                    "this_team_is_home_team": {
                                        "type": "boolean"
                                    },
                                    "home_full_name": {
                                        "type": "string"
                                    },
                                    "home_short_name": {
                                        "type": "string"
                                    },
                                    "away_full_name": {
                                        "type": "string"
                                    },
                                    "away_short_name": {
                                        "type": "string"
                                    },
                                    "period_label": {
                                        "type": "string"
                                    },
                                    "periods": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "period_home_score": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "period_away_score": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "required": [
                                    "game_winner",
                                    "this_team_is_home_team",
                                    "home_full_name",
                                    "home_short_name",
                                    "away_full_name",
                                    "away_short_name",
                                    "period_label",
                                    "periods",
                                    "period_home_score",
                                    "period_away_score"
                                ]
                            }
                        },
                        "required": [
                            "status",
                            "gameId"
                        ]
                    },
                    "gameFacility": {},
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
                    "dateUtc",
                    "endDateUtc",
                    "time",
                    "isDoubleHeader",
                    "showAtVs",
                    "tbd",
                    "allDay",
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
                    "gameFacility",
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
    resultsSchema
};