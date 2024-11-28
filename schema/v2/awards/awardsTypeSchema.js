const typesSchema = {
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
            "display": {
                "type": "string"
            }
        },
        "required": [
            "id",
            "title",
            "display"
        ]
    }
};
module.exports = {
    typesSchema
};