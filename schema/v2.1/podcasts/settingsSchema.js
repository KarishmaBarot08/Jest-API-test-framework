const settingsSchema = {
    "type": "object",
    "properties": {
      "siteHostName": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "rssImage": {
        "type": "string"
      },
      "authorName": {
        "type": "string"
      },
      "managingEmail": {
        "type": "string"
      },
      "showAllInFeed": {
        "type": "boolean"
      },
      "hubContent": {
        "type": "string"
      }
    },
    "required": [
      "siteHostName",
      "title",
      "description",
      "rssImage",
      "authorName",
      "managingEmail",
      "showAllInFeed",
      "hubContent"
    ]
  };
  module.exports = {
    settingsSchema
  };