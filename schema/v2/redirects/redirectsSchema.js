const redirectsSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "from": {
                "type": "string"
            },
            "to": {
                "type": "string"
            }
        },
        "required": [
            "from",
            "to"
        ]
    }
};
module.exports = {
    redirectsSchema
}