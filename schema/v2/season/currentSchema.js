const currentSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "title": {
            "type": "string"
        },
        "shortName": {},
        "startDate": {
            "type": "string"
        },
        "created": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "title",
        "shortName",
        "startDate",
        "created"
    ]
};
module.exports = {
    currentSchema
};