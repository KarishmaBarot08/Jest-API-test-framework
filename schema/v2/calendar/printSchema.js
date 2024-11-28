const printSchema = {
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
                                "tvImage": {
                                    "type": ["string", "null"]
                                },
                                "tv": {
                                    "type": "string"
                                },
                                "radio": {
                                    "type": "string"
                                },
                                "video": {},
                                "audio": {
                                    "type": ["object", "null"],
                                    "properties": {
                                        "cssClass": {
                                            "type": "string"
                                        },
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
                                },
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
                                "tv",
                                "radio",
                                "video",
                                "stats",
                                "tickets",
                                "preview",
                                "gamefiles",
                                "customDisplayFields"
                            ]
                        },
                        "result": {},
                        "facility": {
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
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "website"
                            ]
                        },
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
    printSchema
};