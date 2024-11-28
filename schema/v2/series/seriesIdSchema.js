const seriesIDSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "episodes": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "seasonId": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "description": {
                        "type": ["string", "null"]
                    },
                    "postDate": {
                        "type": "string"
                    },
                    "publishDate": {
                        "type": "string"
                    },
                    "order": {
                        "type": "number"
                    },
                    "sportIds": {
                        "type": "array",
                        "items": {
                            "type": "number"
                        }
                    },
                    "thumbnailImage": {
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
                            "height": {
                                "type": "number"
                            },
                            "width": {
                                "type": "number"
                            },
                            "thumbnail": {
                                "type": "string"
                            },
                            "original": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "fileName",
                            "path",
                            "height",
                            "width",
                            "thumbnail",
                            "original"
                        ]
                    },
                    "portraitImage": {},
                    "mediafile": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "prismId": {
                                "type": ["string","null"]
                            },
                            "title": {
                                "type": "string"
                            },
                            "description": {
                                "type": ["string", "null"]
                            },
                            "dateUtc": {
                                "type": "string"
                            },
                            "sportId": {
                                "type": "number"
                            },
                            "sportShortname": {
                                "type": "string"
                            },
                            "sportAbbreviation": {
                                "type": "string"
                            },
                            "globalSportShortname": {
                                "type": "string"
                            },
                            "categoryName": {
                                "type": "string"
                            },
                            "sportTitle": {
                                "type": "string"
                            },
                            "gameId": {},
                            "appExclusive": {
                                "type": "boolean"
                            },
                            "type": {
                                "type": "string"
                            },
                            "format": {
                                "type": "string"
                            },
                            "authorized": {
                                "type": "boolean"
                            },
                            "blackedOut": {
                                "type": "boolean"
                            },
                            "blackedOutMessage": {},
                            "free": {
                                "type": "boolean"
                            },
                            "authOnlyRequired": {
                                "type": "boolean"
                            },
                            "premium": {
                                "type": "boolean"
                            },
                            "usePreroll": {
                                "type": "boolean"
                            },
                            "formats": {
                                "type": "object",
                                "properties": {
                                    "f4m": {},
                                    "rtmp": {},
                                    "delveId": {},
                                    "prismId": {},
                                    "mobileH264": {},
                                    "hlsdvr": {},
                                    "mobile3gp": {},
                                    "mobileHLS": {},
                                    "iframe": {},
                                    "ttml": {},
                                    "srt": {},
                                    "httpDownload": {},
                                    "thumbnailVTT": {}
                                },
                                "required": [
                                    "f4m",
                                    "rtmp",
                                    "delveId",
                                    "prismId",
                                    "mobileH264",
                                    "hlsdvr",
                                    "mobile3gp",
                                    "mobileHLS",
                                    "iframe",
                                    "ttml",
                                    "srt",
                                    "httpDownload",
                                    "thumbnailVTT"
                                ]
                            },
                            "poster": {
                                "type": "string"
                            },
                            "watchers": {
                                "type": "number"
                            },
                            "adTagUrl": {
                                "type": "string"
                            },
                            "test": {
                                "type": "boolean"
                            },
                            "favorited": {},
                            "favorites": {
                                "type": "number"
                            },
                            "views": {
                                "type": "number"
                            },
                            "categoryId": {
                                "type": "number"
                            },
                            "duration": {
                                "type": ["number","null"]
                            },
                            "state": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "prismId",
                            "title",
                            "dateUtc",
                            "sportId",
                            "sportShortname",
                            "sportAbbreviation",
                            "globalSportShortname",
                            "categoryName",
                            "sportTitle",
                            "gameId",
                            "appExclusive",
                            "type",
                            "format",
                            "authorized",
                            "blackedOut",
                            "blackedOutMessage",
                            "free",
                            "authOnlyRequired",
                            "premium",
                            "usePreroll",
                            "formats",
                            "poster",
                            "watchers",
                            "adTagUrl",
                            "test",
                            "favorited",
                            "favorites",
                            "views",
                            "categoryId",
                            "duration",
                            "state"
                        ]
                    }
                },
                "required": [
                    "id",
                    "seasonId",
                    "title",
                    "description",
                    "postDate",
                    "publishDate",
                    "order",
                    "sportIds",
                    "thumbnailImage",
                    "portraitImage",
                    "mediafile"
                ]
            }
        },
        "id": {
            "type": "number"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": ["string", "null"]
        },
        "callToActionText": {
            "type": ["string","null"]
        },
        "publishDate": {
            "type": "string"
        },
        "isLimited": {
            "type": "boolean"
        },
        "order": {
            "type": "number"
        },
        "sportIds": {
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "hero": {
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
                "height": {
                    "type": "number"
                },
                "width": {
                    "type": "number"
                },
                "thumbnail": {
                    "type": "string"
                },
                "original": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "fileName",
                "path",
                "height",
                "width",
                "thumbnail",
                "original"
            ]
        },
        "landscape": {},
        "portrait": {
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
                "height": {
                    "type": "number"
                },
                "width": {
                    "type": "number"
                },
                "thumbnail": {
                    "type": "string"
                },
                "original": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "fileName",
                "path",
                "height",
                "width",
                "thumbnail",
                "original"
            ]
        }
    },
    "required": [
        "episodes",
        "id",
        "title",
        "description",
        "callToActionText",
        "publishDate",
        "isLimited",
        "order",
        "sportIds",
        "hero",
        "landscape",
        "portrait"
    ]
};
module.exports = {
    seriesIDSchema
};