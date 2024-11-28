const settingsSchema = {
    "type": "object",
    "properties": {
        "allAccessEnabled": {
            "type": "boolean"
        },
        "youTubeEnabled": {
            "type": "boolean"
        },
        "youTubeChannelId": {
            "type": "string"
        },
        "youTubePlaylistId": {
            "type": "string"
        },
        "watchButtonUrl": {
            "type": "string"
        }
    },
    "required": [
        "allAccessEnabled",
        "youTubeEnabled",
        "youTubeChannelId",
        "youTubePlaylistId",
        "watchButtonUrl"
    ]
};
module.exports = {
    settingsSchema
};