const hallOfFameSchema = {
    "type": "object",
    "properties": {
        "members": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "inductionYear": {
                        "type": "number"
                    },
                    "bio": {
                        "type": "string"
                    },
                    "id": {
                        "type": "number"
                    },
                    "classYear": {
                        "type": ["number","null"]
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "sports": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "image": {},
                    "social": {
                        "type": "object",
                        "properties": {
                            "apple": {},
                            "cameo": {},
                            "facebook": {},
                            "google": {},
                            "linkedin": {},
                            "instagram": {},
                            "snapchat": {},
                            "tiktok": {},
                            "twitch": {},
                            "twitter": {},
                            "vimeo": {},
                            "youtube": {}
                        },
                        "required": [
                            "apple",
                            "cameo",
                            "facebook",
                            "google",
                            "linkedin",
                            "instagram",
                            "snapchat",
                            "tiktok",
                            "twitch",
                            "twitter",
                            "vimeo",
                            "youtube"
                        ]
                    }
                },
                "required": [
                    "inductionYear",
                    "bio",
                    "id",
                    "classYear",
                    "firstName",
                    "lastName",
                    "sports",
                    "image",
                    "social"
                ]
            }
        },
        "groups": {
            "type": "object",
            "properties": {
                "C": {
                    "type": ["array","null"],
                    "items": {
                        "type": "object",
                        "properties": {
                            "inductionYear": {
                                "type": "number"
                            },
                            "bio": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "classYear": {
                                "type": ["number","null"]
                            },
                            "firstName": {
                                "type": "string"
                            },
                            "lastName": {
                                "type": "string"
                            },
                            "sports": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "image": {},
                            "social": {
                                "type": "object",
                                "properties": {
                                    "apple": {},
                                    "cameo": {},
                                    "facebook": {},
                                    "google": {},
                                    "linkedin": {},
                                    "instagram": {},
                                    "snapchat": {},
                                    "tiktok": {},
                                    "twitch": {},
                                    "twitter": {},
                                    "vimeo": {},
                                    "youtube": {}
                                },
                                "required": [
                                    "apple",
                                    "cameo",
                                    "facebook",
                                    "google",
                                    "linkedin",
                                    "instagram",
                                    "snapchat",
                                    "tiktok",
                                    "twitch",
                                    "twitter",
                                    "vimeo",
                                    "youtube"
                                ]
                            }
                        },
                        "required": [
                            "inductionYear",
                            "bio",
                            "id",
                            "classYear",
                            "firstName",
                            "lastName",
                            "sports",
                            "image",
                            "social"
                        ]
                    }
                }
             },
            // "required": [
            //     "C"
            // ]
        }
    },
    "required": [
        "members",
        "groups"
    ]
};
module.exports = {
    hallOfFameSchema
};