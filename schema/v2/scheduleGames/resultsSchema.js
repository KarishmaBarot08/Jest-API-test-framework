const resultsSchema = {
    "type": "object",
    "properties": {
        "socialMedia": {
            "type": "object",
            "properties": {
                "facebookPage": {
                    "type": ["string", "null"]
                },
                "twitterUserName": {
                    "type": "string"
                },
                "instagramUserName": {
                    "type": "string"
                },
                "youtubePlaylist": {
                    "type": "string"
                }
            },
            "required": [
                "facebookPage",
                "twitterUserName",
                "instagramUserName",
                "youtubePlaylist"
            ]
        },
        "boxscore": {},
        "story": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "headline": {
                    "type": "string"
                },
                "teaser": {
                    "type": "string"
                },
                "date": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "imageAltText": {
                    "type": "string"
                },
                "video": {
                    "type": "object",
                    "properties": {
                        "archive": {},
                        "youtube": {}
                    },
                    "required": [
                        "archive",
                        "youtube"
                    ]
                },
                "url": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "headline",
                "teaser",
                "date",
                "image",
                "imageAltText",
                "video",
                "url"
            ]
        },
        "gamePromotionName": {},
        "gameCustom1": {},
        "gameCustom2": {},
        "gameCustom3": {},
        "galleries": {
            "type": "array",
            "items": {}
        },
        "gamefiles": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "url": {
                        "type": ["string", "null"]
                    }
                },
                "required": [
                    "title",
                    "url"
                ]
            }
        },
        "history": {
            "type": "object",
            "properties": {
                "totalWins": {
                    "type": "number"
                },
                "totalLosses": {
                    "type": "number"
                },
                "totalTies": {
                    "type": "number"
                },
                "lastMeeting": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "resultStatus": {
                            "type": "string"
                        },
                        "resultTeamScore": {},
                        "resultOpponentScore": {},
                        "gameDate": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "resultStatus",
                        "resultTeamScore",
                        "resultOpponentScore",
                        "gameDate"
                    ]
                }
            },
            "required": [
                "totalWins",
                "totalLosses",
                "totalTies",
                "lastMeeting"
            ]
        },
        "facility": {},
        "media": {
            "type": "object",
            "properties": {
                "tv": {
                    "type": "string"
                },
                "tvImagePath": {},
                "tvImageFileName": {},
                "tvImageCreated": {},
                "tvImageThumbnailPrefix": {},
                "radio": {}
            },
            "required": [
                "tv",
                "tvImagePath",
                "tvImageFileName",
                "tvImageCreated",
                "tvImageThumbnailPrefix",
                "radio"
            ]
        },
        "sportId": {
            "type": "number"
        },
        "opponentId": {
            "type": "number"
        },
        "resultStatus": {
            "type": "string"
        }
    },
    "required": [
        "socialMedia",
        "boxscore",
        "story",
        "gamePromotionName",
        "gameCustom1",
        "gameCustom2",
        "gameCustom3",
        "galleries",
        "gamefiles",
        "history",
        "facility",
        "media",
        "sportId",
        "opponentId",
        "resultStatus"
    ]
};
module.exports = {
    resultsSchema
};