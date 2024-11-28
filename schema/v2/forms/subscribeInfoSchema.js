const subscribeInfoSchema = {
    "type": "object",
    "properties": {
        "title": {},
        "description": {},
        "hideCompanyField": {
            "type": "boolean"
        },
        "emailWhitelistNote": {
            "type": "string"
        },
        "categories": {
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
        }
    },
    "required": [
        "title",
        "description",
        "hideCompanyField",
        "emailWhitelistNote",
        "categories"
    ]
};
module.exports = {
    subscribeInfoSchema
};