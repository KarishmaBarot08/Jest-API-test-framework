const feedSchema = {
    "type": "object",
    "properties": {
        "data": {
            "type": "object",
            "properties": {
                "entries": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "created_time": {
                                "type": "string"
                            },
                            "updated_time": {
                                "type": "string"
                            },
                            "message": {
                                "type": ["string","null"]
                            },
                            "picture": {
                                "type": "string"
                            },
                            "full_picture": {
                                "type": "string"
                            },
                            "privacy": {
                                "type": "object",
                                "properties": {
                                    "allow": {
                                        "type": "string"
                                    },
                                    "deny": {
                                        "type": "string"
                                    },
                                    "description": {
                                        "type": "string"
                                    },
                                    "friends": {
                                        "type": "string"
                                    },
                                    "value": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "allow",
                                    "deny",
                                    "description",
                                    "friends",
                                    "value"
                                ]
                            },
                            "from": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "id": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "name",
                                    "id"
                                ]
                            },
                            "is_published": {
                                "type": "boolean"
                            },
                            "is_hidden": {
                                "type": "boolean"
                            },
                            "permalink_url": {
                                "type": "string"
                            },
                            "likes": {
                                "type": "object",
                                "properties": {
                                    "summary": {
                                        "type": "object",
                                        "properties": {
                                            "total_count": {
                                                "type": "number"
                                            },
                                            "can_like": {
                                                "type": "boolean"
                                            },
                                            "has_liked": {
                                                "type": "boolean"
                                            }
                                        },
                                        "required": [
                                            "total_count",
                                            "can_like",
                                            "has_liked"
                                        ]
                                    }
                                },
                                "required": [
                                    "summary"
                                ]
                            },
                            "attachments": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "description": {
                                                    "type": "string"
                                                },
                                                "unshimmed_url": {
                                                    "type": "string"
                                                },
                                                "media_type": {
                                                    "type": "number"
                                                },
                                                "target": {
                                                    "type": "object",
                                                    "properties": {
                                                        "id": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "id"
                                                    ]
                                                },
                                                "title": {
                                                    "type": "string"
                                                },
                                                "media": {
                                                    "type": "object",
                                                    "properties": {
                                                        "source": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "source"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "unshimmed_url",
                                                "media_type",
                                                //"target"
                                            ]
                                        }
                                    }
                                },
                                "required": [
                                    "data"
                                ]
                            }
                        },
                        "required": [
                            "id",
                            "created_time",
                            "updated_time",
                            "message",
                            "picture",
                            "full_picture",
                            "privacy",
                            "from",
                            "is_published",
                            "is_hidden",
                            "permalink_url",
                            "likes",
                            "attachments"
                        ]
                    }
                },
                "after": {
                    "type": "string"
                }
            },
            "required": [
                "entries",
                "after"
            ]
        },
        "page": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "link": {
                    "type": "string"
                },
                "website": {
                    "type": "string"
                },
                "picture": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "height": {
                                    "type": "number"
                                },
                                "is_silhouette": {
                                    "type": "boolean"
                                },
                                "url": {
                                    "type": "string"
                                },
                                "width": {
                                    "type": "number"
                                }
                            },
                            "required": [
                                "height",
                                "is_silhouette",
                                "url",
                                "width"
                            ]
                        }
                    },
                    "required": [
                        "data"
                    ]
                },
                "category": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name",
                "link",
                "website",
                "picture",
                "category",
                "username"
            ]
        }
    },
    "required": [
        "data",
        "page"
    ]
};
module.exports = {
    feedSchema
};