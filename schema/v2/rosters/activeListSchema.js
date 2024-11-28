const activeListSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "rosterId": {
                "type": "number"
            },
            "displayTitle": {
                "type": "string"
            },
            "seasonTitle": {
                "type": "string"
            },
            "globalSportNameSlug": {
                "type": "string"
            }
        },
        "required": [
            "rosterId",
            "displayTitle",
            "seasonTitle",
            "globalSportNameSlug"
        ]
    }
};
module.exports = {
    activeListSchema
}