const filtersOpponentsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
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
            "value",
            "name",
            "statTitle"
        ]
    }
};
module.exports = {
    filtersOpponentsSchema
};