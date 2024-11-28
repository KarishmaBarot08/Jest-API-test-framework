const filtersYearsSchema = {
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
    filtersYearsSchema
};