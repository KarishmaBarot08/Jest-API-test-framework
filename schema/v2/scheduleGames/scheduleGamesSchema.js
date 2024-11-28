const scheduleGamesSchema = {
    "type": "object",
    "properties": {
        "time": {
            "type": "string"
        },
        "conference": {
            "type": "boolean"
        },
        "conferenceTitle": {},
        "conferenceAbbrev": {},
        "conferenceLogo": {},
        "location": {
            "type": "string"
        },
        "locationIndicator": {
            "type": "string"
        },
        "neutralHometeam": {},
        "atVs": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "noplayText": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "gameTeamPrefix": {},
        "gamePromotionText": {},
        "gamePromotionLink": {
            "type": "string"
        },
        "promotionImageCaption": {},
        "promotionImageLink": {},
        "promotionImagePath": {},
        "isADoubleheader": {
            "type": "boolean"
        },
        "displayVsatIndicator": {
            "type": "boolean"
        },
        "gameProgram": {
            "type": "string"
        },
        "gameProgramLink": {},
        "opponent": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "title": {
                    "type": "string"
                },
                "prefix": {
                    "type": "string"
                },
                "website": {
                    "type": "string"
                },
                "websiteLabel": {
                    "type": "string"
                },
                "location": {
                    "type": "string"
                },
                "conference": {
                    "type": "boolean"
                },
                "mascot": {
                    "type": "string"
                },
                "image": {
                    "type": "object",
                    "properties": {
                        "fullpath": {
                            "type": "string"
                        },
                        "filename": {
                            "type": "string"
                        },
                        "path": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "alt": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "fullpath",
                        "filename",
                        "path",
                        "title",
                        "alt"
                    ]
                }
            },
            "required": [
                "id",
                "title",
                "prefix",
                "website",
                "websiteLabel",
                "location",
                "conference",
                "mascot",
                "image"
            ]
        },
        "media": {
            "type": "object",
            "properties": {
                "tv": {
                    "type": "string"
                },
                "tvImage": {},
                "tvImageLink": {
                    "type": "string"
                },
                "radio": {
                    "type": "string"
                },
                "video": {
                    "type": ["object","null"],
                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "url": {
                            "type": "string"
                        },
                        "label": {
                            "type": "string"
                        },
                        "cssClass": {}
                    },
                    "required": [
                        "title",
                        "url",
                        "label",
                        "cssClass"
                    ]
                },
                "audio": {},
                "stats": {
                    "type": ["object","null"],
                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "url": {
                            "type": "string"
                        },
                        "label": {
                            "type": "string"
                        },
                        "cssClass": {}
                    },
                    "required": [
                        "title",
                        "url",
                        "label",
                        "cssClass"
                    ]
                },
                "tickets": {},
                "preview": {},
                "gamefiles": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "scheduleId": {
                                "type": "number"
                            },
                            "gameId": {
                                "type": "number"
                            },
                            "gamefileRank": {
                                "type": "number"
                            },
                            "gamefileLink": {
                                "type": "string"
                            },
                            "gamefileTitle": {
                                "type": "string"
                            },
                            "gamefileClass": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "scheduleId",
                            "gameId",
                            "gamefileRank",
                            "gamefileLink",
                            "gamefileTitle",
                            "gamefileClass"
                        ]
                    }
                },
                "customDisplayFields": {
                    "type": "array",
                    "items": {}
                },
                "gameNote": {}
            },
            "required": [
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "video",
                "audio",
                "stats",
                "tickets",
                "preview",
                "gamefiles",
                "customDisplayFields",
                "gameNote"
            ]
        },
        "result": {
            "type": ["object","null"],
            "properties": {
                "status": {
                    "type": "string"
                },
                "teamScore": {
                    "type": "string"
                },
                "opponentScore": {
                    "type": "string"
                },
                "prescoreInfo": {
                    "type": "string"
                },
                "postscoreInfo": {
                    "type": "string"
                },
                "boxscore": {},
                "recap": {
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "url": {
                            "type": "string"
                        },
                        "label": {
                            "type": "string"
                        },
                        "cssClass": {}
                    },
                    "required": [
                        "title",
                        "url",
                        "label",
                        "cssClass"
                    ]
                }
            },
            "required": [
                "status",
                "teamScore",
                "opponentScore",
                "prescoreInfo",
                "postscoreInfo",
                "boxscore",
                "recap"
            ]
        },
        "facility": {},
        "tournament": {
            "type": ["object", "null"],
            "properties": {
                "id": {
                    "type": "number"
                },
                "title": {
                    "type": "string"
                },
                "website": {
                    "type": "string"
                },
                "color": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "title",
                "website",
                "color"
            ]
        },
        "galleries": {
            "type": "array",
            "items": {}
        },
        "previewStoryId": {},
        "postStoryId": {
            "type": ["number","null"]
        },
        "hasWePlayedMoments": {
            "type": "boolean"
        },
        "ticketLink": {},
        "gameScheduleInclude": {
            "type": "boolean"
        },
        "gameCalendarExclude": {
            "type": "boolean"
        },
        "allDay": {
            "type": "boolean"
        },
        "tbd": {
            "type": "boolean"
        },
        "isSpotlight": {
            "type": "boolean"
        },
        "dateUtc": {
            "type": "string"
        },
        "endDateUtc": {},
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
        "time",
        "conference",
        "conferenceTitle",
        "conferenceAbbrev",
        "conferenceLogo",
        "location",
        "locationIndicator",
        "neutralHometeam",
        "atVs",
        "status",
        "noplayText",
        "type",
        "gameTeamPrefix",
        "gamePromotionText",
        "gamePromotionLink",
        "promotionImageCaption",
        "promotionImageLink",
        "promotionImagePath",
        "isADoubleheader",
        "displayVsatIndicator",
        "gameProgram",
        "gameProgramLink",
        "opponent",
        "media",
        "result",
        "facility",
        "tournament",
        "galleries",
        "previewStoryId",
        "postStoryId",
        "hasWePlayedMoments",
        "ticketLink",
        "gameScheduleInclude",
        "gameCalendarExclude",
        "allDay",
        "tbd",
        "isSpotlight",
        "dateUtc",
        "endDateUtc",
        "id",
        "date",
        "enddate",
        "sport"
    ]
};
module.exports = {
    scheduleGamesSchema
};