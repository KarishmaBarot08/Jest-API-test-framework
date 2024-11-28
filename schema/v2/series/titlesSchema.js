const titlesSchema = {
    "type": "array",
    "items": {
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
    }
};
module.exports = {
    titlesSchema
};