const categoriesSchema = {
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
        "mediaId": {
          "type": "number"
        }
      },
      "required": [
        "id",
        "title",
        "mediaId"
      ]
    }
  };
  module.exports = {
    categoriesSchema
  };