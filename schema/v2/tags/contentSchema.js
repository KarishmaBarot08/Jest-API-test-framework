const contentSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "check": {
                        "type": "boolean"
                    },
                    "createdDateString": {
                        "type": "string"
                    },
                    "postDateString": {
                        "type": "string"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "tagId": {
                                    "type": "number"
                                },
                                "tagName": {
                                    "type": "string"
                                },
                                "tagSlug": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "tagId",
                                "tagName",
                                "tagSlug"
                            ]
                        }
                    },
                    "image": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "absoluteUrl": {},
                            "altText": {
                                "type": "string"
                            },
                            "title": {},
                            "creditName": {}
                        },
                        "required": [
                            "url",
                            "absoluteUrl",
                            "altText",
                            "title",
                            "creditName"
                        ]
                    },
                    "url": {
                        "type": "string"
                    },
                    "tagId": {
                        "type": "number"
                    },
                    "tagName": {
                        "type": "string"
                    },
                    "tagDescription": {
                        "type": "string"
                    },
                    "id": {
                        "type": "number"
                    },
                    "section": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "sports": {
                        "type": "string"
                    },
                    "hidden": {
                        "type": "boolean"
                    },
                    "fileName": {
                        "type": "string"
                    },
                    "createdDate": {
                        "type": "string"
                    },
                    "postDate": {
                        "type": "string"
                    }
                },
                "required": [
                    "check",
                    "createdDateString",
                    "postDateString",
                    "tags",
                    "image",
                    "url",
                    "tagId",
                    "tagName",
                    "tagDescription",
                    "id",
                    "section",
                    "title",
                    "sports",
                    "hidden",
                    "fileName",
                    "createdDate",
                    "postDate"
                ]
            }
        },
        "total": {
            "type": "number"
        },
        "page": {
            "type": "number"
        },
        "pages": {
            "type": "number"
        }
    },
    "required": [
        "items",
        "total",
        "page",
        "pages"
    ]
};
module.exports = {
    contentSchema
};