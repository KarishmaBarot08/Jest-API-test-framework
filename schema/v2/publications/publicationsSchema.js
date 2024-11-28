const publicationsSchema = {
    "type": "object",
    "properties": {
        "image": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "title": {
            "type": "string"
        },
        "show_dates": {
            "type": "boolean"
        },
        "enable_subscriptions": {
            "type": "boolean"
        },
        "publications": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "created_on": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    },
                    "file": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "image": {
                                "type": "string"
                            },
                            "title": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "embed_url": {
                                "type": "string"
                            },
                            "slug": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "url",
                            "image",
                            "title",
                            "description",
                            "embed_url",
                            "slug"
                        ]
                    },
                    "image": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "updated_on": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "sport": {},
                    "sports": {
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
                                "shortname": {
                                    "type": "string"
                                },
                                "slug": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "shortname",
                                "slug"
                            ]
                        }
                    }
                },
                "required": [
                    "created_on",
                    "description",
                    "id",
                    "file",
                    "image",
                    "title",
                    "updated_on",
                    "url",
                    "sport",
                    "sports"
                ]
            }
        }
    },
    "required": [
        "image",
        "description",
        "title",
        "show_dates",
        "enable_subscriptions",
        "publications"
    ]
};
module.exports = {
    publicationsSchema
};