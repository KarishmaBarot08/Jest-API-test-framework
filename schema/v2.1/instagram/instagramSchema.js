const instagramSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "contentId": {
                        "type": "string"
                    },
                    "contentTitle": {
                        "type": "string"
                    },
                    "contentDate": {
                        "type": "string"
                    },
                    "contentUrl": {
                        "type": "string"
                    },
                    "contentImageUrl": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    },
                    "link": {
                        "type": "string"
                    },
                    "tags": {
                        "type": "array",
                        "items": {}
                    },
                    "comments": {
                        "type": "array",
                        "items": {}
                    },
                    "likes": {
                        "type": "object",
                        "properties": {
                            "count": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "count"
                        ]
                    },
                    "images": {
                        "type": "object",
                        "properties": {
                            "thumbnail": {
                                "type": ["object", "null"],
                                "properties": {
                                    "width": {},
                                    "height": {},
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
                            "lowResolution": {
                                "type": "object",
                                "properties": {
                                    "width": {},
                                    "height": {},
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
                            "standardResolution": {
                                "type": "object",
                                "properties": {
                                    "width": {},
                                    "height": {},
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
                            "lowResolution",
                            "standardResolution"
                        ]
                    },
                    "caption": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "text": {
                                "type": "string"
                            },
                            "createdTime": {},
                            "from": {}
                        },
                        "required": [
                            "id",
                            "text",
                            "createdTime",
                            "from"
                        ]
                    },
                    "video": {},
                    "user": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "fullName": {
                                "type": "string"
                            },
                            "profilePicture": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "fullName",
                            "profilePicture",
                            "username"
                        ]
                    },
                    "date": {
                        "type": "string"
                    },
                    "createdTime": {
                        "type": "number"
                    }
                },
                "required": [
                    "contentId",
                    "contentTitle",
                    "contentDate",
                    "contentUrl",
                    "contentImageUrl",
                    "id",
                    "link",
                    "tags",
                    "comments",
                    "likes",
                    "images",
                    "caption",
                    "video",
                    "user",
                    "date",
                    "createdTime"
                ]
            }
        },
        "before": {
            "type": "string"
        },
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
    instagramSchema
};