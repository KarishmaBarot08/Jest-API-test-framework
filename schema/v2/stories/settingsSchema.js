const settingsSchema = {
    "type": "object",
    "properties": {
        "defaultTemplate": {
            "type": "string"
        },
        "customCss": {
            "type": "string"
        },
        "endlessScrollIsEnabled": {
            "type": "boolean"
        },
        "featuredTemplatesCustomization": {
            "type": "object",
            "properties": {
                "logoImage": {},
                "headerBackgroundColor": {
                    "type": "string"
                },
                "hidePreviousPage": {
                    "type": "boolean"
                },
                "featuredTemplate1": {
                    "type": "object",
                    "properties": {
                        "hideRelatedStories": {
                            "type": "boolean"
                        },
                        "hidePostDate": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "hideRelatedStories",
                        "hidePostDate"
                    ]
                }
            },
            "required": [
                "logoImage",
                "headerBackgroundColor",
                "hidePreviousPage",
                "featuredTemplate1"
            ]
        }
    },
    "required": [
        "defaultTemplate",
        "customCss",
        "endlessScrollIsEnabled",
        "featuredTemplatesCustomization"
    ]
};
module.exports = {
    settingsSchema
};