const onThisDaySchema = {
    "type": "object",
    "properties": {
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "year": {
                        "type": "number"
                    },
                    "stories": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string"
                                },
                                "filename": {
                                    "type": "string"
                                },
                                "byline": {},
                                "pregame": {
                                    "type": "boolean"
                                },
                                "postgame": {
                                    "type": "boolean"
                                },
                                "url": {
                                    "type": "string"
                                },
                                "image": {
                                    "type": ["object", "null"],
                                    "properties": {
                                        "url": {
                                            "type": "string"
                                        },
                                        "altText": {
                                            "type": ["string","null"]
                                        }
                                    },
                                    "required": [
                                        "url",
                                        "altText"
                                    ]
                                },
                                "id": {
                                    "type": "number"
                                },
                                "date": {
                                    "type": "string"
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
                                        "slug": {
                                            "type": "string"
                                        },
                                        "shortName": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "slug",
                                        "shortName"
                                    ]
                                },
                                "type": {
                                    "type": "string"
                                },
                                "featured": {
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "title",
                                "filename",
                                "byline",
                                "pregame",
                                "postgame",
                                "url",
                                "id",
                                "date",
                                "sport",
                                "type",
                                "featured"
                            ]
                        }
                    },
                    "galleries": {
                        "type": "array",
                        "items": {}
                    },
                    "videos": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string"
                                },
                                "file": {
                                    "type": "string"
                                },
                                "format": {
                                    "type": "string"
                                },
                                "url": {
                                    "type": "string"
                                },
                                "image": {
                                    "type": ["object", "null"],
                                    "properties": {
                                        "url": {
                                            "type": "string"
                                        },
                                        "altText": {
                                            "type": ["string","null"]
                                        }
                                    },
                                    "required": [
                                        "url",
                                        "altText"
                                    ]
                                },
                                "id": {
                                    "type": "number"
                                },
                                "date": {
                                    "type": "string"
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
                                        "slug": {
                                            "type": "string"
                                        },
                                        "shortName": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "slug",
                                        "shortName"
                                    ]
                                },
                                "type": {
                                    "type": "string"
                                },
                                "featured": {
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "title",
                                "file",
                                "format",
                                "url",
                                "id",
                                "date",
                                "sport",
                                "type",
                                "featured"
                            ]
                        }
                    },
                    "games": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "locationIndicator": {
                                    "type": "string"
                                },
                                "opponent": {
                                    "type": ["object", "null"],
                                    "properties": {
                                        "title": {
                                            "type": "string"
                                        },
                                        "image": {
                                            "type": ["object", "null"],
                                            "properties": {
                                                "url": {
                                                    "type": "string"
                                                },
                                                "altText": {}
                                            },
                                            "required": [
                                                "url",
                                                "altText"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "title",
                                        "image"
                                    ]
                                },
                                "result": {
                                    "type": ["object","null"],
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
                                        "prescore": {
                                            "type": ["string", "null"]
                                        },
                                        "postscore": {
                                            "type": ["string", "null"]
                                        },
                                        "boxscore": {
                                            "type": ["string", "null"]
                                        },
                                        "recap": {
                                            "type": ["string", "null"]
                                        }
                                    },
                                    "required": [
                                        "status"
                                    ]
                                },
                                "id": {
                                    "type": "number"
                                },
                                "date": {
                                    "type": "string"
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
                                        "slug": {
                                            "type": "string"
                                        },
                                        "shortName": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "slug",
                                        "shortName"
                                    ]
                                },
                                "type": {
                                    "type": "string"
                                },
                                "featured": {
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "locationIndicator",
                                "result",
                                "id",
                                "date",
                                "sport",
                                "type",
                                "featured"
                            ]
                        }
                    },
                    "podcasts": {
                        "type": "array",
                        "items": {}
                    }
                },
                "required": [
                    "year",
                    "stories",
                    "galleries",
                    "videos",
                    "games",
                    "podcasts"
                ]
            }
        },
        "randomImage": {}
    },
    "required": [
        "data",
        "randomImage"
    ]
};
module.exports = {
    onThisDaySchema
};