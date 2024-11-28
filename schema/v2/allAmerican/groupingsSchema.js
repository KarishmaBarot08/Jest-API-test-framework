const groupingsSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "slug": {
                "type": "string"
            },
            "value": {
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "statTitle": {
                "type": "string"
            }
        },
        "required": [
            "slug",
            "value",
            "name",
            "statTitle"
        ]
    }
};
module.exports = {
    groupingsSchema
};