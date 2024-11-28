const podcastsSchema = {
    "type": "object",
    "properties": {
        "items": {
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
                    "description": {
                        "type": "string"
                    },
                    "rawDescription": {
                        "type": "string"
                    },
                    "dateCreated": {
                        "type": "string"
                    },
                    "datePublished": {
                        "type": "string"
                    },
                    "absoluteUrl": {
                        "type": "string"
                    },
                    "fileName": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "enclosureLength": {
                        "type": "string"
                    },
                    "enclosureType": {
                        "type": "string"
                    },
                    "imageFilePath": {
                        "type": "string"
                    },
                    "imageFileName": {
                        "type": "string"
                    },
                    "imagePath": {
                        "type": "string"
                    },
                    "categoryId": {
                        "type": "number"
                    },
                    "categoryImagePath": {
                        "type": "string"
                    },
                    "categoryImageFilePath": {
                        "type": "string"
                    },
                    "categoryImageFileName": {
                        "type": "string"
                    },
                    "categoryName": {
                        "type": ["string","null"]
                    },
                    "sports": {
                        "type": "array",
                        "items": {}
                    }
                },
                "required": [
                    "id",
                    "title",
                    "description",
                    "rawDescription",
                    "dateCreated",
                    "datePublished",
                    "absoluteUrl",
                    "fileName",
                    "url",
                    "enclosureLength",
                    "enclosureType",
                    "imageFilePath",
                    "imageFileName",
                    "imagePath",
                    "categoryId",
                    "categoryImagePath",
                    "categoryImageFilePath",
                    "categoryImageFileName",
                    "categoryName",
                    "sports"
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
    podcastsSchema
};