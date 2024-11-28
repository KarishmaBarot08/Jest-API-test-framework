const eventsByDateRangeSchema = {
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
                        "id": {
                            "type": "number"
                        },
                        "date": {
                            "type": "string"
                        },
                        "time": {
                            "type": "string"
                        },
                        "conference": {
                            "type": "boolean"
                        },
                        "location": {
                            "type": "string"
                        },
                        "locationIndicator": {
                            "type": "string"
                        },
                        "showAtVs": {
                            "type": "boolean"
                        },
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
                        "promotion": {},
                        "isADoubleheader": {
                            "type": "boolean"
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
                                "prefix": {
                                    "type": "string"
                                },
                                "website": {
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
                                "location",
                                "conference",
                                "mascot",
                                "image"
                            ]
                        },
                        "media": {
                            "type": "object",
                            "properties": {
                                "tvImageLink": {},
                                "tvImage": {},
                                "tv": {
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
                                "gamefiles": {},
                                "customDisplayFields": {
                                    "type": "array",
                                    "items": {}
                                }
                            },
                            "required": [
                                "tvImageLink",
                                "tvImage",
                                "tv",
                                "radio",
                                "video",
                                "audio",
                                "stats",
                                "tickets",
                                "preview",
                                "gamefiles",
                                "customDisplayFields"
                            ]
                        },
                        "result": {},
                        "facility": {},
                        "tournament": {},
                        "gamelinks": {}
                    },
                    "required": [
                        "id",
                        "date",
                        "time",
                        "conference",
                        "location",
                        "locationIndicator",
                        "showAtVs",
                        "atVs",
                        "status",
                        "noplayText",
                        "type",
                        "promotion",
                        "isADoubleheader",
                        "sport",
                        "opponent",
                        "media",
                        "result",
                        "facility",
                        "tournament",
                        "gamelinks"
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
    eventsByDateRangeSchema
};