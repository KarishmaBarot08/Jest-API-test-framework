const settingsSchema = {
    "type": "object",
    "properties": {
        "analyticsMeasurementIds": {
            "type": "array",
            "items": {}
        },
        "tagManagerCodes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": [
        "analyticsMeasurementIds",
        "tagManagerCodes"
    ]
};
module.exports = {
    settingsSchema
};