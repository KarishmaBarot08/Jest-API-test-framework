const liveStreamSchema = {
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
                    "title": {
                        "type": "string"
                    },
                    "startDate": {
                        "type": "string"
                    },
                    "endDate": {
                        "type": "string"
                    },
                    "note": {},
                    "format": {
                        "type": "string"
                    },
                    "free": {
                        "type": "boolean"
                    },
                    "sport": {
                        "type": "object",
                        "properties": {
                            "seasonId": {},
                            "conferenceId": {},
                            "rosterId": {},
                            "scheduleId": {},
                            "usesPoints": {
                                "type": "boolean"
                            },
                            "hasDoubleHeader": {
                                "type": "boolean"
                            },
                            "defaultLocation": {},
                            "defaultFacility": {},
                            "created": {
                                "type": "string"
                            },
                            "oldId": {},
                            "defaultStatsLink": {},
                            "usesSidearmStats": {
                                "type": "boolean"
                            },
                            "conferenceXml": {},
                            "conferenceDisplay": {
                                "type": "boolean"
                            },
                            "nonSport": {
                                "type": "boolean"
                            },
                            "atVs": {},
                            "eventInclusion": {},
                            "hasDepthChart": {
                                "type": "boolean"
                            },
                            "hasOvertimeLosses": {
                                "type": "boolean"
                            },
                            "hasOvertimeWins": {
                                "type": "boolean"
                            },
                            "facebookPage": {},
                            "facebookId": {},
                            "twitterName": {},
                            "instagramName": {},
                            "googlePlusId": {},
                            "pinterestName": {},
                            "youtubeName": {},
                            "globalSportShortName": {},
                            "statsLink": {},
                            "scheduleUpcomingGamesToShow": {
                                "type": "number"
                            },
                            "scheduleUpcomingGamesBackgroundImage": {},
                            "scheduleUpcomingGamesBackgroundFullWidth": {
                                "type": "boolean"
                            },
                            "ticketsLink": {},
                            "ticketmasterAttractionId": {},
                            "appPriority": {
                                "type": "number"
                            },
                            "displaySocialMedia": {},
                            "youtubePlaylistId": {},
                            "nonSportOnArchive": {
                                "type": "boolean"
                            },
                            "hasHockeySystem": {
                                "type": "boolean"
                            },
                            "displayNextEvent": {},
                            "displayOpponentHistory": {},
                            "nonSportOnCalendar": {
                                "type": "boolean"
                            },
                            "imagesJson": {},
                            "momentIds": {},
                            "defaultVideoLink": {},
                            "hasHockey3V3": {
                                "type": "boolean"
                            },
                            "gameSynonym": {},
                            "abbrev": {
                                "type": "string"
                            },
                            "shortDisplay": {
                                "type": "string"
                            },
                            "shortName": {
                                "type": "string"
                            },
                            "globalSportId": {},
                            "globalSportNameSlug": {},
                            "globalSportGender": {},
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "seasonId",
                            "conferenceId",
                            "rosterId",
                            "scheduleId",
                            "usesPoints",
                            "hasDoubleHeader",
                            "defaultLocation",
                            "defaultFacility",
                            "created",
                            "oldId",
                            "defaultStatsLink",
                            "usesSidearmStats",
                            "conferenceXml",
                            "conferenceDisplay",
                            "nonSport",
                            "atVs",
                            "eventInclusion",
                            "hasDepthChart",
                            "hasOvertimeLosses",
                            "hasOvertimeWins",
                            "facebookPage",
                            "facebookId",
                            "twitterName",
                            "instagramName",
                            "googlePlusId",
                            "pinterestName",
                            "youtubeName",
                            "globalSportShortName",
                            "statsLink",
                            "scheduleUpcomingGamesToShow",
                            "scheduleUpcomingGamesBackgroundImage",
                            "scheduleUpcomingGamesBackgroundFullWidth",
                            "ticketsLink",
                            "ticketmasterAttractionId",
                            "appPriority",
                            "displaySocialMedia",
                            "youtubePlaylistId",
                            "nonSportOnArchive",
                            "hasHockeySystem",
                            "displayNextEvent",
                            "displayOpponentHistory",
                            "nonSportOnCalendar",
                            "imagesJson",
                            "momentIds",
                            "defaultVideoLink",
                            "hasHockey3V3",
                            "gameSynonym",
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
                    "category": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "title"
                        ]
                    },
                    "image": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "alt": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "url",
                            "alt"
                        ]
                    }
                },
                "required": [
                    "id",
                    "title",
                    "startDate",
                    "endDate",
                    "note",
                    "format",
                    "free",
                    "sport",
                    "category",
                    "image"
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
    liveStreamSchema
};