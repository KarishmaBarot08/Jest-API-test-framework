const settingsSchema = {
    "type": "object",
    "properties": {
        "mobileAppleAppId": {
            "type": ["string","null"]
        }
    },
    "required": [
        "mobileAppleAppId"
    ]
};
module.exports = {
    settingsSchema
};