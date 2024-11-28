const rosterBioSchema = {
    "type": "object",
    "properties": {
      "rosterPlayerId": {
        "type": "number"
      },
      "playerId": {
        "type": "number"
      },
      "rosterDisplayTitle": {
        "type": "string"
      },
      "seasonSlug": {
        "type": "string"
      },
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
        "type": ["string","null"]
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
      "weight": {
        "type":["number","null"]
      },
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
      "letters": {},
      "hide": {
        "type": "boolean"
      },
      "hideBio": {
        "type": "boolean"
      },
      "custom1": {
        "type": ["string","null"]
      },
      "custom2": {},
      "custom3": {},
      "image": {
        "type": ["object","null"],
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
            "type": ["string","null"]
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
      "images": {
        "type": "array",
        "items": {}
      },
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
            "type": ["string","null"]
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
      "bio": {
        "type": ["string","null"]
      },
      "bioFields": {
        "type": "object",
        "properties": {
          "rp_academic_year": {
            "type": "string"
          },
          "rp_position_short": {
            "type": "string"
          },
          "rp_custom1": {
            "type": "string"
          },
          "height": {
            "type": "string"
          },
          "rp_weight": {
            "type": "string"
          },
          "player_previous_school": {
            "type": "string"
          },
          "player_hometown": {
            "type": "string"
          }
        },
        "required": [
          "rp_academic_year",
        //   "rp_position_short",
        //   "rp_custom1",
          "height",
        //   "rp_weight",
        //   "player_previous_school",
          "player_hometown"
        ]
      },
      "historicalFields": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "rosterPlayerId": {
              "type": "number"
            },
            "image": {
              "type": ["object","null"],
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
                  "type": ["string","null"]
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
            "season": {
              "type": "string"
            },
            "year": {
              "type": "number"
            },
            "weight": {
              "type": ["number","null"]
            },
            "weightTrend": {
              "type": "number"
            },
            "heightFeet": {
              "type": ["number","null"]
            },
            "heightInches": {
              "type": ["number","null"]
            },
            "height": {
              "type": "string"
            },
            "heightTrend": {
              "type": "number"
            },
            "position": {
              "type": "string"
            },
            "jerseyNumber": {
              "type": "string"
            },
            "academicYear": {
              "type": "string"
            },
            "isCaptain": {
              "type": "boolean"
            }
          },
          "required": [
            "rosterPlayerId",
            "image",
            "season",
            "year",
            "weight",
            "weightTrend",
            "heightFeet",
            "heightInches",
            "height",
            "heightTrend",
            "position",
            "jerseyNumber",
            "academicYear",
            "isCaptain"
          ]
        }
      },
      "hasWePlayedMoments": {
        "type": "boolean"
      },
      "lastUpdated": {
        "type": "string"
      },
      "displayFields": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "title": {
              "type": ["string","null"]
            },
            "description": {
              "type": "string"
            },
            "dbField": {
              "type": ["string","null"]
            },
            "specialColumn": {
              "type": ["string","null"]
            },
            "print": {
              "type": "boolean"
            }
          },
          "required": [
            "title",
            "description",
            "print"
          ]
        }
      },
      "rankedBioFields": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "bioField": {
              "type": "string"
            },
            "rank": {
              "type": "number"
            }
          },
          "required": [
            "label",
            "value",
            "bioField",
            "rank"
          ]
        }
      },
      "settings": {
        "type": "object",
        "properties": {
          "showXmlStatsOnRpPage": {
            "type": "boolean"
          },
          "showHistoricalInfoOnRpPage": {
            "type": "boolean"
          }
        },
        "required": [
          "showXmlStatsOnRpPage",
          "showHistoricalInfoOnRpPage"
        ]
      },
      "statsSeasons": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "season": {
              "type": "string"
            },
            "year": {
              "type": "number"
            },
            "rosterPlayerId": {
              "type": "number"
            }
          },
          "required": [
            "season",
            "year",
            "rosterPlayerId"
          ]
        }
      }
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
  };
  module.exports = {
    rosterBioSchema
  };