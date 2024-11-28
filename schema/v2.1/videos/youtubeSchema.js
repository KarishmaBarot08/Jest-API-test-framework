const youtubeSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "url": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "publishedDate": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "channel": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "title": {
                                "type": "string"
                            },
                            "description": {},
                            "thumbnail": {},
                            "videoCount": {
                                "type": "number"
                            },
                            "subscriberCount": {
                                "type": "number"
                            },
                            "viewCount": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "description",
                            "thumbnail",
                            "videoCount",
                            "subscriberCount",
                            "viewCount"
                        ]
                    },
                    "thumbnails": {
                        "type": "object",
                        "properties": {
                            "default": {
                                "type": "object",
                                "properties": {
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "width",
                                    "height",
                                    "url"
                                ]
                            },
                            "medium": {
                                "type": "object",
                                "properties": {
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "width",
                                    "height",
                                    "url"
                                ]
                            },
                            "high": {
                                "type": "object",
                                "properties": {
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "width",
                                    "height",
                                    "url"
                                ]
                            },
                            "standard": {
                                "type": ["object", "null"],
                                "properties": {
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "width",
                                    "height",
                                    "url"
                                ]
                            },
                            "maxres": {
                                "type": ["object", "null"],
                                "properties": {
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "width",
                                    "height",
                                    "url"
                                ]
                            }
                        },
                        "required": [
                            "default",
                            "medium",
                            "high",
                            "standard",
                            "maxres"
                        ]
                    }
                },
                "required": [
                    "url",
                    "id",
                    "title",
                    "publishedDate",
                    "description",
                    "channel",
                    "thumbnails"
                ]
            }
        },
        "before": {},
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
    youtubeSchema
};