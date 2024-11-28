const withFusionCacheSchema = {
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
  withFusionCacheSchema
};