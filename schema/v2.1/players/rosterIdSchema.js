const rosterIdSchema = {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "rosterPlayerId": {
              "type": "number"
            },
            "playerId": {
              "type": "number"
            },
            "rosterDisplayTitle": {},
            "seasonSlug": {},
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "hometown": {
              "type": "string"
            },
            "highSchool": {},
            "previousSchool": {
              "type": "string"
            },
            "major": {},
            "birthDate": {},
            "gender": {
              "type": "string"
            },
            "pronouns": {},
            "facebookUsername": {},
            "instagramUsername": {},
            "twitterUsername": {},
            "snapchatUsername": {},
            "tiktokUsername": {},
            "cameoUsername": {},
            "youtubeUsername": {},
            "twitchUsername": {},
            "linkedinUsername": {},
            "shopUrl": {},
            "socialMedia": {
              "type": "object",
              "properties": {
                "Twitter": {},
                "Instagram": {},
                "Facebook": {},
                "YouTube": {},
                "Snapchat": {},
                "TikTok": {},
                "Cameo": {},
                "Twitch": {},
                "LinkedIn": {},
                "Shop": {}
              },
              "required": [
                "Twitter",
                "Instagram",
                "Facebook",
                "YouTube",
                "Snapchat",
                "TikTok",
                "Cameo",
                "Twitch",
                "LinkedIn",
                "Shop"
              ]
            },
            "socialMediaR": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "platformName": {
                    "type": "string"
                  },
                  "userName": {},
                  "url": {},
                  "icon": {
                    "type": "string"
                  },
                  "oldIcon": {
                    "type": "string"
                  }
                },
                "required": [
                  "platformName",
                  "userName",
                  "url",
                  "icon",
                  "oldIcon"
                ]
              }
            },
            "weight": {},
            "heightFeet": {
              "type": ["number","null"]
            },
            "heightInches": {
              "type": ["number","null"]
            },
            "positionShort": {
              "type": "string"
            },
            "positionLong": {
              "type": "string"
            },
            "jerseyNumber": {
              "type": "string"
            },
            "jerseyNumberSecond": {},
            "academicYearNumber": {
              "type": "number"
            },
            "academicYearShort": {
              "type": "string"
            },
            "academicYearLong": {
              "type": "string"
            },
            "isCaptain": {
              "type": "boolean"
            },
            "letters": {
              "type": "number"
            },
            "hide": {
              "type": "boolean"
            },
            "hideBio": {
              "type": "boolean"
            },
            "custom1": {
              "type": "string"
            },
            "custom2": {
              "type": "string"
            },
            "custom3": {
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
                "creditName": {}
              },
              "required": [
                "mediaCaption",
                "url",
                "absoluteUrl",
                "altText",
                "title",
                "creditName"
              ]
            },
            "headerImage": {},
            "images": {},
            "sport": {
              "type": "object",
              "properties": {
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "string"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "number"
                },
                "globalSportNameSlug": {
                  "type": "string"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "number"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "abbrev",
                "shortDisplay",
                "shortName",
                "globalSportId",
                "globalSportNameSlug",
                "globalSportGender",
                "id",
                "title"
              ]
            },
            "bio": {},
            "bioFields": {},
            "historicalFields": {},
            "hasWePlayedMoments": {
              "type": "boolean"
            },
            "lastUpdated": {
              "type": "string"
            },
            "displayFields": {},
            "rankedBioFields": {},
            "settings": {},
            "statsSeasons": {}
          },
          "required": [
            "rosterPlayerId",
            "playerId",
            "rosterDisplayTitle",
            "seasonSlug",
            "firstName",
            "lastName",
            "hometown",
            "highSchool",
            "previousSchool",
            "major",
            "birthDate",
            "gender",
            "pronouns",
            "facebookUsername",
            "instagramUsername",
            "twitterUsername",
            "snapchatUsername",
            "tiktokUsername",
            "cameoUsername",
            "youtubeUsername",
            "twitchUsername",
            "linkedinUsername",
            "shopUrl",
            "socialMedia",
            "socialMediaR",
            "weight",
            "heightFeet",
            "heightInches",
            "positionShort",
            "positionLong",
            "jerseyNumber",
            "jerseyNumberSecond",
            "academicYearNumber",
            "academicYearShort",
            "academicYearLong",
            "isCaptain",
            "letters",
            "hide",
            "hideBio",
            "custom1",
            "custom2",
            "custom3",
            "image",
            "headerImage",
            "images",
            "sport",
            "bio",
            "bioFields",
            "historicalFields",
            "hasWePlayedMoments",
            "lastUpdated",
            "displayFields",
            "rankedBioFields",
            "settings",
            "statsSeasons"
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
    rosterIdSchema
  };