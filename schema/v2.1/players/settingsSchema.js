const settingsSchema = {
    "type": "object",
    "properties": {
        "wePlayedIntegrationEnabled": {
            "type": "boolean"
        }
    },
    "required": [
        "wePlayedIntegrationEnabled"
    ]
};
module.exports = {
    settingsSchema
};