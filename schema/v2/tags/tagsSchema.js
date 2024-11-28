const tagsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "count": {
                "type": "number"
            },
            "id": {
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "slug": {
                "type": "string"
            },
            "active": {
                "type": "boolean"
            },
            "description": {
                "type": ["string", "null"]
            }
        },
        "required": [
            "count",
            "id",
            "name",
            "slug",
            "active"
        ]
    }
};
module.exports = {
    tagsSchema
};