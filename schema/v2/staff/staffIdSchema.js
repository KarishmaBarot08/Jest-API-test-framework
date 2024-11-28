const staffIDSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "title": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "image": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "alt": {
                    "type": "string"
                }
            },
            "required": [
                "url",
                "alt"
            ]
        },
        "category": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "title": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "title"
            ]
        },
        "socialMedia": {
            "type": "object",
            "properties": {
                "apple": {
                    "type": "string"
                },
                "cameo": {
                    "type": "string"
                },
                "facebook": {
                    "type": "string"
                },
                "google": {
                    "type": "string"
                },
                "linkedin": {
                    "type": "string"
                },
                "instagram": {
                    "type": "string"
                },
                "snapchat": {
                    "type": "string"
                },
                "tiktok": {
                    "type": "string"
                },
                "twitch": {
                    "type": "string"
                },
                "twitter": {
                    "type": "string"
                },
                "vimeo": {
                    "type": "string"
                },
                "youtube": {
                    "type": "string"
                }
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
        },
        "socialMediaList": {
            "type": "object",
            "properties": {
                "Twitter": {},
                "Instagram": {},
                "Facebook": {},
                "YouTube": {},
                "Snapchat": {},
                "TikTok": {},
                "Cameo": {},
                "Twitch": {},
                "LinkedIn": {},
                "Shop": {}
            },
            "required": [
                "Twitter",
                "Instagram",
                "Facebook",
                "YouTube",
                "Snapchat",
                "TikTok",
                "Cameo",
                "Twitch",
                "LinkedIn",
                "Shop"
            ]
        },
        "socialMediaR": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "platformName": {
                        "type": "string"
                    },
                    "userName": {},
                    "url": {},
                    "icon": {
                        "type": ["string","null"]
                    },
                    "oldIcon": {
                        "type": ["string","null"]
                    }
                },
                "required": [
                    "platformName",
                    "userName",
                    "url",
                    "icon",
                    "oldIcon"
                ]
            }
        },
        "custom1": {
            "type": "string"
        },
        "custom2": {
            "type": "string"
        },
        "custom3": {
            "type": "string"
        },
        "custom4": {
            "type": "string"
        },
        "bio": {
            "type": "string"
        },
        "url": {
            "type": "string"
        },
        "displayFields": {
            "type": "object",
            "properties": {
                "staff_title": {
                    "type": "string"
                },
                "staff_email": {
                    "type": "string"
                },
                "staff_phone": {
                    "type": "string"
                },
                "staff_custom_1": {
                    "type": "string"
                },
                "staff_twitter": {
                    "type": "string"
                }
            },
            "required": [
                "staff_title",
                "staff_email",
                "staff_phone",
                // "staff_custom_1",
                // "staff_twitter"
            ]
        },
        "images": {
            "type": "array",
            "items": {}
        }
    },
    "required": [
        "id",
        "firstName",
        "lastName",
        "title",
        "email",
        "phone",
        "image",
        "category",
        "socialMedia",
        "socialMediaList",
        "socialMediaR",
        "custom1",
        "custom2",
        "custom3",
        "custom4",
        "bio",
        "url",
        "displayFields",
        "images"
    ]
};
module.exports = {
    staffIDSchema
};