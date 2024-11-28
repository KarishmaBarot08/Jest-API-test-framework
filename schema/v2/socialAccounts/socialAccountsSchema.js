const socialAccountsSchema = {
    "type": "object",
    "properties": {
        "accounts": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "users": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "title": {
                                    "type": ["string", "null"]
                                },
                                "instagram": {
                                    "type": "object",
                                    "properties": {
                                        "icon": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": ["string", "null"]
                                        },
                                        "link": {
                                            "type": ["string", "null"]
                                        }
                                    },
                                    "required": [
                                        "icon"
                                    ]
                                },
                                "twitter": {
                                    "type": "object",
                                    "properties": {
                                        "icon": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": ["string", "null"]
                                        },
                                        "link": {
                                            "type": ["string", "null"]
                                        }
                                    },
                                    "required": [
                                        "icon"
                                    ]
                                },
                                "facebook": {
                                    "type": "object",
                                    "properties": {
                                        "icon": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": ["string", "null"]
                                        },
                                        "link": {
                                            "type": ["string", "null"]
                                        }
                                    },
                                    "required": [
                                        "icon"
                                    ]
                                },
                                "youtube": {
                                    "type": "object",
                                    "properties": {
                                        "icon": {
                                            "type": "string"
                                        },
                                        "username": {},
                                        "link": {}
                                    },
                                    "required": [
                                        "icon",
                                        "username",
                                        "link"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "instagram",
                                "twitter",
                                "facebook",
                                "youtube"
                            ]
                        }
                    }
                },
                "required": [
                    "name",
                    "users"
                ]
            }
        }
    },
    "required": [
        "accounts"
    ]
};
module.exports = {
    socialAccountsSchema
};