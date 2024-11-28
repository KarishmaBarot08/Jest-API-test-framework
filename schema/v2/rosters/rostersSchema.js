const rostersSchema = {
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
            "templateId": {
              "type": ["number","null"]
            },
            "breakdownSize": {
              "type": "string"
            },
            "displayTitle": {
              "type": "string"
            },
            "displayTemplate": {
              "type": "string"
            },
            "note": {
              "type": "string"
            },
            "noteLocation": {
              "type": "boolean"
            },
            "displayCoaches": {
              "type": "boolean"
            },
            "hide": {
              "type": "boolean"
            },
            "sortAlpha": {
              "type": "boolean"
            },
            "orderByWomenFirst": {
              "type": "boolean"
            },
            "contentTemplate": {
              "type": "string"
            },
            "displayFields": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string"
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
            "season": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "title": {
                  "type": "string"
                },
                "shortName": {},
                "startDate": {
                  "type": "string"
                },
                "created": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "shortName",
                "startDate",
                "created"
              ]
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
            "downloads": {},
            "sportFile": {},
            "statCrew": {},
            "allStaffImage": {},
            "players": {
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
                    "type": ["string","null"]
                  },
                  "highSchool": {
                    "type": ["string","null"]
                  },
                  "previousSchool": {
                    "type": ["string","null"]
                  },
                  "major": {},
                  "birthDate": {},
                  "gender": {
                    "type": "string"
                  },
                  "pronouns": {
                    "type": ["string","null"]
                  },
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
                          "type": ["string","null"]
                        },
                        "oldIcon": {
                          "type": ["string","null"]
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
                  "major",
                  "birthDate",
                  "gender",
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
            "coaches": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "bio": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
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
                  "images": {},
                  "displayFields": {
                    "type": "object",
                    "properties": {
                      "staff_title": {
                        "type": "string"
                      },
                      "staff_email": {
                        "type": "string"
                      },
                      "staff_phone": {
                        "type": "string"
                      },
                      "staff_custom_1": {
                        "type": "string"
                      },
                      "staff_twitter": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "staff_title",
                      // "staff_email",
                      // "staff_phone"
                    ]
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
                  "id": {
                    "type": "number"
                  },
                  "title": {
                    "type": ["string","null"]
                  },
                  "firstName": {
                    "type": "string"
                  },
                  "lastName": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "phone": {
                    "type": "string"
                  },
                  "url": {},
                  "staffId": {
                    "type": "number"
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
                          "type": ["string","null"]
                        },
                        "oldIcon": {
                          "type": ["string","null"]
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
                  "custom1": {
                    "type": "string"
                  },
                  "custom2": {
                    "type": "string"
                  },
                  "custom3": {
                    "type": "string"
                  },
                  "custom4": {
                    "type": "string"
                  }
                },
                "required": [
                  "bio",
                  "twitter",
                  "image",
                  "images",
                  "displayFields",
                  "sport",
                  "id",
                  "title",
                  "firstName",
                  "lastName",
                  "email",
                  "phone",
                  "url",
                  "staffId",
                  "socialMediaR",
                  "custom1",
                  "custom2",
                  "custom3",
                  "custom4"
                ]
              }
            },
            "support": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "bio": {
                    "type": "string"
                  },
                  "twitter": {
                    "type": "string"
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
                  "images": {},
                  "displayFields": {
                    "type": "object",
                    "properties": {
                      "staff_title": {
                        "type": "string"
                      },
                      "staff_email": {
                        "type": "string"
                      },
                      "staff_phone": {
                        "type": "string"
                      },
                      "staff_custom_1": {
                        "type": "string"
                      },
                      "staff_twitter": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "staff_title",
                      // "staff_email",
                      // "staff_phone",
                      // "staff_custom_1",
                      // "staff_twitter"
                    ]
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
                  "id": {
                    "type": "number"
                  },
                  "title": {
                    "type": "string"
                  },
                  "firstName": {
                    "type": "string"
                  },
                  "lastName": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "phone": {
                    "type": "string"
                  },
                  "url": {},
                  "staffId": {
                    "type": "number"
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
                          "type": ["string","null"]
                        },
                        "oldIcon": {
                          "type": ["string","null"]
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
                  "custom1": {
                    "type": "string"
                  },
                  "custom2": {
                    "type": "string"
                  },
                  "custom3": {
                    "type": "string"
                  },
                  "custom4": {
                    "type": "string"
                  }
                },
                "required": [
                  "bio",
                  "twitter",
                  "image",
                  "images",
                  "displayFields",
                  "sport",
                  "id",
                  "title",
                  "firstName",
                  "lastName",
                  "email",
                  "phone",
                  "url",
                  "staffId",
                  "socialMediaR",
                  "custom1",
                  "custom2",
                  "custom3",
                  "custom4"
                ]
              }
            }
          },
          "required": [
            "id",
            "templateId",
            "breakdownSize",
            "displayTitle",
            "displayTemplate",
            "note",
            "noteLocation",
            "displayCoaches",
            "hide",
            "sortAlpha",
            "orderByWomenFirst",
            "contentTemplate",
            "displayFields",
            "season",
            "sport",
            "image",
            "downloads",
            "sportFile",
            "statCrew",
            "allStaffImage",
            "players",
            "coaches",
            "support"
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
    rostersSchema
  }