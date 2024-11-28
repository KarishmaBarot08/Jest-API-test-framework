const relatedSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "seasonTitle": {
                "type": "string"
            },
            "scheduleId": {
                "type": "number"
            },
            "isCurrent": {
                "type": "boolean"
            },
            "globalSportNameSlug": {
                "type": "string"
            }
        },
        "required": [
            "seasonTitle",
            "scheduleId",
            "isCurrent",
            "globalSportNameSlug"
        ]
    }
};
module.exports = {
    relatedSchema
};