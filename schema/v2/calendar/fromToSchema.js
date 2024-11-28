const fromToSchema = {
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
                                "video": {},
                                "audio": {},
                                "stats": {},
                                "tickets": {},
                                "preview": {},
                                "gamefiles": {
                                    "type": "array",
                                    "items": {}
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
                        "result": {},
                        "facility": {},
                        "tournament": {},
                        "galleries": {
                            "type": "array",
                            "items": {}
                        },
                        "previewStoryId": {},
                        "postStoryId": {},
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
    fromToSchema
};