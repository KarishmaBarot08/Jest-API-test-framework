const settingsSchema = {
    "type": "object",
    "properties": {
        "staffInformation": {
            "type": "string"
        },
        "directoryDefaultView": {
            "type": "string"
        },
        "displayFields": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "field": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "title",
                    "field"
                ]
            }
        }
    },
    "required": [
        "staffInformation",
        "directoryDefaultView",
        "displayFields"
    ]
};
module.exports = {
    settingsSchema
};