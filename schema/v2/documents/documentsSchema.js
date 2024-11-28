const documentsSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "documentId": {
                        "type": "number"
                    },
                    "documentTitle": {
                        "type": "string"
                    },
                    "documentType": {
                        "type": "string"
                    },
                    "documentPath": {
                        "type": "string"
                    },
                    "metadataDescription": {
                        "type": "string"
                    },
                    "unavailableAccessibility": {
                        "type": "boolean"
                    },
                    "createdAt": {
                        "type": "string"
                    },
                    "sportIds": {
                        "type": "array",
                        "items": {
                            "type": "number"
                        }
                    },
                    "lastUpdated": {
                        "type": "string"
                    },
                    "downloadUrl": {
                        "type": "string"
                    }
                },
                "required": [
                    "documentId",
                    "documentTitle",
                    "documentType",
                    "documentPath",
                    "metadataDescription",
                    "unavailableAccessibility",
                    "createdAt",
                    "sportIds",
                    "lastUpdated",
                    "downloadUrl"
                ]
            }
        },
        "total": {
            "type": "number"
        },
        "page": {
            "type": "number"
        },
        "pages": {
            "type": "number"
        }
    },
    "required": [
        "items",
        "total",
        "page",
        "pages"
    ]
};
module.exports = {
    documentsSchema
};