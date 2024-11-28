const storiesSchema = {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["null","string"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type":["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": "string"
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type":["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type":["null","string"]
                  },
                  "archive": {
                    "type":["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type":["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type":["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "time": {
                        "type": "string"
                      },
                      "conference": {
                        "type": "boolean"
                      },
                      "conferenceTitle": {
                        "type": ["null","string"]
                      },
                      "conferenceAbbrev": {
                        "type": ["null","string"]
                      },
                      "conferenceLogo": {
                        "type": "null"
                      },
                      "location": {
                        "type": "string"
                      },
                      "locationIndicator": {
                        "type": "string"
                      },
                      "neutralHometeam": {
                        "type": "null"
                      },
                      "atVs": {
                        "type": "string"
                      },
                      "status": {
                        "type": "string"
                      },
                      "noplayText": {
                        "type": "string"
                      },
                      "type": {
                        "type": ["null","string"]
                      },
                      "gameTeamPrefix": {
                        "type": "null"
                      },
                      "gamePromotionText": {
                        "type": "null"
                      },
                      "gamePromotionLink": {
                        "type": "string"
                      },
                      "promotionImageCaption": {
                        "type": "null"
                      },
                      "promotionImageLink": {
                        "type": "null"
                      },
                      "promotionImagePath": {
                        "type": "null"
                      },
                      "isADoubleheader": {
                        "type": "boolean"
                      },
                      "displayVsatIndicator": {
                        "type": "boolean"
                      },
                      "gameProgram": {
                        "type": "string"
                      },
                      "gameProgramLink": {
                        "type": "null"
                      },
                      "opponent": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "title": {
                            "type": ["string","null"]
                          },
                          "prefix": {
                            "type": "string"
                          },
                          "website": {
                            "type": "string"
                          },
                          "websiteLabel": {
                            "type": "string"
                          },
                          "location": {
                            "type": "string"
                          },
                          "conference": {
                            "type": "boolean"
                          },
                          "mascot": {
                            "type": "string"
                          },
                          "image": {
                            "type": "object",
                            "properties": {
                              "fullpath": {
                                "type": "string"
                              },
                              "filename": {
                                "type": "string"
                              },
                              "path": {
                                "type": "string"
                              },
                              "title": {
                                "type": ["string","null"]
                              },
                              "alt": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "fullpath",
                              "filename",
                              "path",
                              "title",
                              "alt"
                            ]
                          }
                        },
                        "required": [
                          "id",
                          "title",
                          "prefix",
                          "website",
                          "websiteLabel",
                          "location",
                          "conference",
                          "mascot",
                          "image"
                        ]
                      },
                      "media": {
                        "type": "object",
                        "properties": {
                          "tv": {
                            "type": "string"
                          },
                          "tvImage": {
                            "type": ["null","string"]
                          },
                          "tvImageLink": {
                            "type": "string"
                          },
                          "radio": {
                            "type": "string"
                          },
                          "video": {
                            "type": ["object","null"],
                            "properties": {
                              "title": {
                                "type": ["string","null"]
                              },
                              "url": {
                                "type": "string"
                              },
                              "label": {
                                "type": "string"
                              },
                              "cssClass": {
                                "type": "null"
                              }
                            },
                            "required": [
                              "title",
                              "url",
                              "label",
                              "cssClass"
                            ]
                          },
                          "audio": {
                            "type": "null"
                          },
                          "stats": {
                            "type": ["object","null"],
                            "properties": {
                              "title": {
                                "type": ["string","null"]
                              },
                              "url": {
                                "type": "string"
                              },
                              "label": {
                                "type": "string"
                              },
                              "cssClass": {
                                "type": "null"
                              }
                            },
                            "required": [
                              "title",
                              "url",
                              "label",
                              "cssClass"
                            ]
                          },
                          "tickets": {
                            "type": "null"
                          },
                          "preview": {
                            "type": ["null","object"]
                          },
                          "gamefiles": {
                            "type": "array",
                            "items": [
                              {
                                "type": "object",
                                "properties": {
                                  "scheduleId": {
                                    "type": "integer"
                                  },
                                  "gameId": {
                                    "type": "integer"
                                  },
                                  "gamefileRank": {
                                    "type": "integer"
                                  },
                                  "gamefileLink": {
                                    "type": "string"
                                  },
                                  "gamefileTitle": {
                                    "type": "string"
                                  },
                                  "gamefileClass": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "scheduleId",
                                  "gameId",
                                  "gamefileRank",
                                  "gamefileLink",
                                  "gamefileTitle",
                                  "gamefileClass"
                                ]
                              }
                            ]
                          },
                          "customDisplayFields": {
                            "type": "array",
                            "items": {}
                          },
                          "gameNote": {
                            "type": "null"
                          }
                        },
                        "required": [
                          "tv",
                          "tvImage",
                          "tvImageLink",
                          "radio",
                          "video",
                          "audio",
                          "stats",
                          "tickets",
                          "preview",
                          "gamefiles",
                          "customDisplayFields",
                          "gameNote"
                        ]
                      },
                      "result": {
                        "type": ["object","null"],
                        "properties": {
                          "status": {
                            "type": "string"
                          },
                          "teamScore": {
                            "type": "string"
                          },
                          "opponentScore": {
                            "type": "string"
                          },
                          "prescoreInfo": {
                            "type": "string"
                          },
                          "postscoreInfo": {
                            "type": "string"
                          },
                          "boxscore": {
                            "type": ["string","null"]
                          },
                          "recap": {
                            "type": "object",
                            "properties": {
                              "title": {
                                "type": ["string","null"]
                              },
                              "url": {
                                "type": "string"
                              },
                              "label": {
                                "type": "string"
                              },
                              "cssClass": {
                                "type": "null"
                              }
                            },
                            "required": [
                              "title",
                              "url",
                              "label",
                              "cssClass"
                            ]
                          }
                        },
                        "required": [
                          "status",
                          "teamScore",
                          "opponentScore",
                          "prescoreInfo",
                          "postscoreInfo",
                          "boxscore",
                          "recap"
                        ]
                      },
                      "facility": {
                        "type": ["null","string"]
                      },
                      "tournament": {
                        "type": ["object","null"],
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "title": {
                            "type": ["string","null"]
                          },
                          "website": {
                            "type": "string"
                          },
                          "color": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "title",
                          "website",
                          "color"
                        ]
                      },
                      "galleries": {
                        "type": "array",
                        "items": {}
                      },
                      "previewStoryId": {
                        "type": ["null","integer"]
                      },
                      "postStoryId": {
                        "type": ["integer","null"]
                      },
                      "hasWePlayedMoments": {
                        "type": "boolean"
                      },
                      "ticketLink": {
                        "type": "null"
                      },
                      "gameScheduleInclude": {
                        "type": "boolean"
                      },
                      "gameCalendarExclude": {
                        "type": "boolean"
                      },
                      "allDay": {
                        "type": "boolean"
                      },
                      "tbd": {
                        "type": "boolean"
                      },
                      "isSpotlight": {
                        "type": "boolean"
                      },
                      "dateUtc": {
                        "type": "string"
                      },
                      "endDateUtc": {
                        "type": ["null","string"]
                      },
                      "id": {
                        "type": "integer"
                      },
                      "date": {
                        "type": "string"
                      },
                      "enddate": {
                        "type": ["null","string"]
                      },
                      "sport": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "title": {
                            "type": ["string","null"]
                          },
                          "abbreviation": {
                            "type": "string"
                          },
                          "shortname": {
                            "type": "string"
                          },
                          "shortDisplay": {
                            "type": "string"
                          },
                          "globalSportShortname": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "title",
                          "abbreviation",
                          "shortname",
                          "shortDisplay",
                          "globalSportShortname"
                        ]
                      }
                    },
                    "required": [
                      "time",
                      "conference",
                      "conferenceTitle",
                      "conferenceAbbrev",
                      "conferenceLogo",
                      "location",
                      "locationIndicator",
                      "neutralHometeam",
                      "atVs",
                      "status",
                      "noplayText",
                      "type",
                      "gameTeamPrefix",
                      "gamePromotionText",
                      "gamePromotionLink",
                      "promotionImageCaption",
                      "promotionImageLink",
                      "promotionImagePath",
                      "isADoubleheader",
                      "displayVsatIndicator",
                      "gameProgram",
                      "gameProgramLink",
                      "opponent",
                      "media",
                      "result",
                      "facility",
                      "tournament",
                      "galleries",
                      "previewStoryId",
                      "postStoryId",
                      "hasWePlayedMoments",
                      "ticketLink",
                      "gameScheduleInclude",
                      "gameCalendarExclude",
                      "allDay",
                      "tbd",
                      "isSpotlight",
                      "dateUtc",
                      "endDateUtc",
                      "id",
                      "date",
                      "enddate",
                      "sport"
                    ]
                  }
                ]
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type":["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type":["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type":["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type":["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": ["string","null"]
                      },
                      "thumbnail": {
                        "type": ["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          },
          {
            "type": "object",
            "properties": {
              "contentId": {
                "type": "string"
              },
              "contentTitle": {
                "type": "string"
              },
              "contentDate": {
                "type": "string"
              },
              "contentUrl": {
                "type": "string"
              },
              "contentImageUrl": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "title": {
                "type": ["string","null"]
              },
              "titleInRotator": {
                "type": "boolean"
              },
              "subHeadline": {
                "type": "string"
              },
              "teaser": {
                "type": "string"
              },
              "byline": {
                "type": "string"
              },
              "appExclusive": {
                "type": "boolean"
              },
              "date": {
                "type": "string"
              },
              "formattedDate": {
                "type": "string"
              },
              "sportDisplay": {
                "type": "string"
              },
              "sport": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "abbreviation": {
                    "type": "string"
                  },
                  "shortTitle": {
                    "type": "string"
                  },
                  "shortname": {
                    "type": "string"
                  },
                  "facebook": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
                  },
                  "gender": {
                    "type": "string"
                  },
                  "pinterest": {
                    "type": "string"
                  },
                  "instagram": {
                    "type": "string"
                  },
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "youtubePlaylistId": {
                    "type": "string"
                  },
                  "globalSportShortname": {
                    "type": "string"
                  },
                  "tickets": {
                    "type": "string"
                  },
                  "globalSportId": {
                    "type": ["integer","null"]
                  },
                  "nonSport": {
                    "type": "boolean"
                  },
                  "showAtVs": {
                    "type": "boolean"
                  },
                  "globalSportNameSlug": {
                    "type": "string"
                  },
                  "gameSynonym": {
                    "type": ["string","null"]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "abbreviation",
                  "shortTitle",
                  "shortname",
                  "facebook",
                  "twitter",
                  "gender",
                  "pinterest",
                  "instagram",
                  "youtube",
                  "youtubePlaylistId",
                  "globalSportShortname",
                  "tickets",
                  "globalSportId",
                  "nonSport",
                  "showAtVs",
                  "globalSportNameSlug",
                  "gameSynonym"
                ]
              },
              "globalSportMapName": {
                "type": "string"
              },
              "imageSource": {
                "type": "string"
              },
              "imageFocalPoint": {
                "type": "null"
              },
              "imageAltText": {
                "type": "string"
              },
              "imageCaption": {
                "type": "string"
              },
              "imageCreditText": {
                "type": ["null","string"]
              },
              "insideContentImage": {
                "type": "null"
              },
              "primaryImage": {
                "type": "object",
                "properties": {
                  "caption": {
                    "type": "string"
                  },
                  "creditText": {
                    "type": ["null","string"]
                  },
                  "focalPoint": {
                    "type": "null"
                  },
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
                    "type": ["string","null"]
                  },
                  "creditName": {
                    "type": "null"
                  }
                },
                "required": [
                  "caption",
                  "creditText",
                  "focalPoint",
                  "url",
                  "absoluteUrl",
                  "altText",
                  "title",
                  "creditName"
                ]
              },
              "alternateImage": {
                "type": "null"
              },
              "video": {
                "type": ["object","null"],
                "properties": {
                  "youtube": {
                    "type": ["null","string"]
                  },
                  "archive": {
                    "type": ["null","integer"]
                  },
                  "metadata": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type":["string","null"]
                      },
                      "thumbnail": {
                        "type":["null","string"]
                      }
                    },
                    "required": [
                      "title",
                      "thumbnail"
                    ]
                  }
                },
                "required": [
                  "youtube",
                  "archive",
                  "metadata"
                ]
              },
              "url": {
                "type": "string"
              },
              "redirectAbsoluteUrl": {
                "type": "string"
              },
              "links": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "linkId": {
                        "type": "integer"
                      },
                      "linkUrl": {
                        "type": "string"
                      },
                      "linkText": {
                        "type": "string"
                      },
                      "created": {
                        "type": "string"
                      },
                      "galleryId": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "linkId",
                      "linkUrl",
                      "linkText",
                      "created",
                      "galleryId"
                    ]
                  }
                ]
              },
              "homepageFeedTemplate": {
                "type": "string"
              },
              "contentTemplate": {
                "type": "string"
              },
              "type": {
                "type": ["null","string"]
              },
              "gamePostStoryId": {
                "type": "null"
              },
              "games": {
                "type": "array",
                "items": {}
              },
              "players": {
                "type": "null"
              },
              "galleryId": {
                "type": "integer"
              },
              "galleryImages": {
                "type": "array",
                "items": {}
              },
              "writer": {
                "type": "null"
              },
              "isBlockBased": {
                "type": "boolean"
              },
              "content": {
                "type": "null"
              },
              "blocks": {
                "type": "null"
              },
              "storyMetaKeywords": {
                "type": ["null","string"]
              },
              "storyMetaDescription": {
                "type": ["null","string"]
              },
              "storyMetaOgDescription": {
                "type": "null"
              },
              "sportShortname": {
                "type": "string"
              },
              "isMediaOnStoryPage": {
                "type": "boolean"
              },
              "applyStandardFormatting": {
                "type": "boolean"
              }
            },
            "required": [
              "contentId",
              "contentTitle",
              "contentDate",
              "contentUrl",
              "contentImageUrl",
              "id",
              "title",
              "titleInRotator",
              "subHeadline",
              "teaser",
              "byline",
              "appExclusive",
              "date",
              "formattedDate",
              "sportDisplay",
              "sport",
              "globalSportMapName",
              "imageSource",
              "imageFocalPoint",
              "imageAltText",
              "imageCaption",
              "imageCreditText",
              "insideContentImage",
              "primaryImage",
              "alternateImage",
              "video",
              "url",
              "redirectAbsoluteUrl",
              "links",
              "homepageFeedTemplate",
              "contentTemplate",
              "type",
              "gamePostStoryId",
              "games",
              "players",
              "galleryId",
              "galleryImages",
              "writer",
              "isBlockBased",
              "content",
              "blocks",
              "storyMetaKeywords",
              "storyMetaDescription",
              "storyMetaOgDescription",
              "sportShortname",
              "isMediaOnStoryPage",
              "applyStandardFormatting"
            ]
          }
        ]
      },
      "total": {
        "type": "integer"
      },
      "page": {
        "type": "integer"
      },
      "pages": {
        "type": "integer"
      }
    },
    "required": [
      "items",
      "total",
      "page",
      "pages"
    ]
  };
module.exports = storiesSchema;