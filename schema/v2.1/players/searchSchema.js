const searchSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "text": {
                "type": "string"
            },
            "imagePath": {
                "type": "string"
            }
        },
        "required": [
            "id",
            "text",
            "imagePath"
        ]
    }
};
module.exports = {
    searchSchema
};