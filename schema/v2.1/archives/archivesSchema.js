const archivesSchema = {
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "storyId": {
            "type": "string"
          },
          "storyRank": {
            "type": "number"
          },
          "sportTitle": {
            "type": "string"
          },
          "storyImage": {
            "type": "string"
          },
          "storyHeadline": {
            "type": "string"
          },
          "storySummary": {
            "type": "string"
          },
          "storyPostdate": {
            "type": "string"
          },
          "storyCreated": {
            "type": "string"
          },
          "storyFilename": {
            "type": "string"
          },
          "storyPath": {
            "type": "string"
          },
          "sportsCats": {
            "type": "string"
          }
        },
        "required": [
          "storyId",
          "storyRank",
          "sportTitle",
          "storyImage",
          "storyHeadline",
          "storySummary",
          "storyPostdate",
          "storyCreated",
          "storyFilename",
          "storyPath",
          "sportsCats"
        ]
      }
    },
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    }
  },
  "required": [
    "items",
    "before",
    "after"
  ]
};
module.exports = {
  archivesSchema
};