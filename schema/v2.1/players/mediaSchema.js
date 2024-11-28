const mediaSchema = {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "postDate": {
          "type": "string"
        },
        "image": {
          "type": "object",
          "properties": {
            "mediaCaption": {},
            "url": {
              "type": "string"
            },
            "absoluteUrl": {
              "type": "string"
            },
            "altText": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "creditName": {
              "type": "string"
            }
          },
          "required": [
            "mediaCaption",
            "url",
            "absoluteUrl",
            "altText",
            "title"
          ]
        },
        "url": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "type",
        "title",
        "postDate",
        "image",
        "url"
      ]
    }
  };
  module.exports = {
    mediaSchema
  };