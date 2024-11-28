const opponentBySportIdSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
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
        "results": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "gameId": {
                        "type": "number"
                    },
                    "gameDate": {
                        "type": "string"
                    },
                    "resultStatus": {
                        "type": "string"
                    },
                    "gamePregameStoryId": {},
                    "gamePostGameStoryId": {
                        "type": ["number", "null"]
                    },
                    "gameLocationIndicator": {
                        "type": "string"
                    },
                    "gameLocation": {
                        "type": "string"
                    },
                    "gameConference": {
                        "type": "boolean"
                    },
                    "opponentName": {
                        "type": "string"
                    },
                    "seasonTitle": {
                        "type": "string"
                    },
                    "teamScore": {},
                    "opponentScore": {},
                    "resultBoxScoreFile": {
                        "type": "string"
                    },
                    "resultPostscoreInfo": {
                        "type": "string"
                    },
                    "scoringLine": {},
                    "image": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "fileName": {
                                "type": "string"
                            },
                            "path": {
                                "type": "string"
                            },
                            "defaultCaption": {},
                            "origWidth": {},
                            "origHeight": {},
                            "categoryId": {},
                            "isTemp": {},
                            "created": {
                                "type": "string"
                            },
                            "oldId": {},
                            "creditId": {},
                            "lastUpdated": {
                                "type": "string"
                            },
                            "galimageId": {},
                            "tags": {},
                            "oldPath": {},
                            "isSvg": {
                                "type": "boolean"
                            },
                            "mediaCaption": {},
                            "url": {},
                            "absoluteUrl": {},
                            "altText": {},
                            "title": {
                                "type": "string"
                            },
                            "creditName": {}
                        },
                        "required": [
                            "id",
                            "fileName",
                            "path",
                            "defaultCaption",
                            "origWidth",
                            "origHeight",
                            "categoryId",
                            "isTemp",
                            "created",
                            "oldId",
                            "creditId",
                            "lastUpdated",
                            "galimageId",
                            "tags",
                            "oldPath",
                            "isSvg",
                            "mediaCaption",
                            "url",
                            "absoluteUrl",
                            "altText",
                            "title",
                            "creditName"
                        ]
                    },
                    "opponentLogoPath": {
                        "type": "string"
                    },
                    "result": {
                        "type": "object",
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
                                "type": ["object", "null"],
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
                            "boxscore"
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
                    }
                },
                "required": [
                    "gameId",
                    "gameDate",
                    "resultStatus",
                    "gamePregameStoryId",
                    "gameLocationIndicator",
                    "gameLocation",
                    "gameConference",
                    "opponentName",
                    "seasonTitle",
                    "teamScore",
                    "opponentScore",
                    "resultBoxScoreFile",
                    "resultPostscoreInfo",
                    "scoringLine",
                    "image",
                    "opponentLogoPath",
                    "result",
                    "media"
                ]
            }
        },
        "largestMarginOfVictory": {},
        "smallestMarginOfVictory": {},
        "sport": {
            "type": "object",
            "properties": {
                "pointsSynonym": {
                    "type": "string"
                },
                "abbrev": {},
                "shortDisplay": {},
                "shortName": {
                    "type": "string"
                },
                "globalSportId": {
                    "type": "number"
                },
                "globalSportNameSlug": {
                    "type": "string"
                },
                "globalSportGender": {},
                "id": {
                    "type": "number"
                },
                "title": {
                    "type": "string"
                }
            },
            "required": [
                "pointsSynonym",
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
        "allTotalRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "allTimeAdjustmentsRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "homeRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "awayRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "conferenceRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "lastTenGameRecords": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        },
        "teamTotalPoints": {
            "type": "number"
        },
        "opponentTotalPoints": {
            "type": "number"
        },
        "currentStreak": {
            "type": "object",
            "properties": {
                "wins": {
                    "type": "number"
                },
                "losses": {
                    "type": "number"
                },
                "ties": {
                    "type": "number"
                }
            },
            "required": [
                "wins",
                "losses",
                "ties"
            ]
        }
    },
    "required": [
        "opponent",
        "results",
        "largestMarginOfVictory",
        "smallestMarginOfVictory",
        "sport",
        "allTotalRecords",
        "allTimeAdjustmentsRecords",
        "homeRecords",
        "awayRecords",
        "conferenceRecords",
        "lastTenGameRecords",
        "teamTotalPoints",
        "opponentTotalPoints",
        "currentStreak"
    ]
};
module.exports = {
    opponentBySportIdSchema
};