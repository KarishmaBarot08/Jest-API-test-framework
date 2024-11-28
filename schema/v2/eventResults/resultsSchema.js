const resultsSchema = {
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type":["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type":["object","null"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type":["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type":["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type":["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type":["object","null"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type":["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["null","object"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type":["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type":["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["null","string"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type":["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type":["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type":["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["null","string"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type":["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type":["string","null"]
                },
                "radio": {
                  "type":["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type":["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["null","object"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["null","string"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type":["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type":["string","null"]
                },
                "tvImageLink": {
                  "type":["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": {}
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type":["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"],
                  "properties": {
                    "game_winner": {
                      "type": "string"
                    },
                    "this_team_is_home_team": {
                      "type": "boolean"
                    },
                    "home_full_name": {
                      "type": "string"
                    },
                    "home_short_name": {
                      "type": "string"
                    },
                    "away_full_name": {
                      "type": "string"
                    },
                    "away_short_name": {
                      "type": "string"
                    },
                    "period_label": {
                      "type": ["string","null"]
                    },
                    "periods": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_home_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_away_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    }
                  },
                  "required": [
                    "game_winner",
                    "this_team_is_home_team",
                    "home_full_name",
                    "home_short_name",
                    "away_full_name",
                    "away_short_name",
                    "period_label",
                    "periods",
                    "period_home_score",
                    "period_away_score"
                  ]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type":["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type":["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type":["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"],
                  "properties": {
                    "game_winner": {
                      "type": "string"
                    },
                    "this_team_is_home_team": {
                      "type": "boolean"
                    },
                    "home_full_name": {
                      "type": "string"
                    },
                    "home_short_name": {
                      "type": "string"
                    },
                    "away_full_name": {
                      "type": "string"
                    },
                    "away_short_name": {
                      "type": "string"
                    },
                    "period_label": {
                      "type": ["string","null"]
                    },
                    "periods": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_home_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_away_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    }
                  },
                  "required": [
                    "game_winner",
                    "this_team_is_home_team",
                    "home_full_name",
                    "home_short_name",
                    "away_full_name",
                    "away_short_name",
                    "period_label",
                    "periods",
                    "period_home_score",
                    "period_away_score"
                  ]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type":["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type":["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type":["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type":["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type": ["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type": ["string","null"]
                },
                "tvImage": {
                  "type": ["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type":["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type": ["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"],
                  "properties": {
                    "game_winner": {
                      "type": "string"
                    },
                    "this_team_is_home_team": {
                      "type": "boolean"
                    },
                    "home_full_name": {
                      "type": "string"
                    },
                    "home_short_name": {
                      "type": "string"
                    },
                    "away_full_name": {
                      "type": "string"
                    },
                    "away_short_name": {
                      "type": "string"
                    },
                    "period_label": {
                      "type": ["string","null"]
                    },
                    "periods": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_home_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "period_away_score": {
                      "type": "array",
                      "items": [
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    }
                  },
                  "required": [
                    "game_winner",
                    "this_team_is_home_team",
                    "home_full_name",
                    "home_short_name",
                    "away_full_name",
                    "away_short_name",
                    "period_label",
                    "periods",
                    "period_home_score",
                    "period_away_score"
                  ]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "gamePregameStoryId": {
              "type": ["null","integer"]
            },
            "gamePostgameStoryId": {
              "type": ["integer","null"]
            },
            "date": {
              "type": "string"
            },
            "endDate": {
              "type": ["string","null"]
            },
            "dateUtc": {
              "type": ["string","null"]
            },
            "endDateUtc": {
              "type": ["string","null"]
            },
            "time": {
              "type": ["string","null"]
            },
            "isDoubleHeader": {
              "type": "boolean"
            },
            "showAtVs": {
              "type": "boolean"
            },
            "tbd": {
              "type": "boolean"
            },
            "allDay": {
              "type": "boolean"
            },
            "teamPrefix": {
              "type": ["string","null"]
            },
            "status": {
              "type": "string"
            },
            "locationIndicator": {
              "type": "string"
            },
            "neutralHometeam": {
              "type": "boolean"
            },
            "location": {
              "type": ["string","null"]
            },
            "isConference": {
              "type": "boolean"
            },
            "conference": {
              "type": ["string","null"]
            },
            "conferenceAbbrev": {
              "type": ["string","null"]
            },
            "conferenceLogo": {
              "type": "null"
            },
            "isSpotlight": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "tournament": {
              "type": ["string","null"]
            },
            "ticketLink": {
              "type": "null"
            },
            "sport": {
              "type": "object",
              "properties": {
                "nonSport": {
                  "type": "boolean"
                },
                "atVs": {
                  "type": "boolean"
                },
                "gameSynonym": {
                  "type": "string"
                },
                "globalSportShortName": {
                  "type": "string"
                },
                "shortTitle": {
                  "type": ["string","null"]
                },
                "scheduleId": {
                  "type": "integer"
                },
                "abbrev": {
                  "type": "string"
                },
                "shortDisplay": {
                  "type": "null"
                },
                "shortName": {
                  "type": "string"
                },
                "globalSportId": {
                  "type": "null"
                },
                "globalSportNameSlug": {
                  "type": "null"
                },
                "globalSportGender": {
                  "type": "string"
                },
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                }
              },
              "required": [
                "nonSport",
                "atVs",
                "gameSynonym",
                "globalSportShortName",
                "shortTitle",
                "scheduleId",
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
            "schedule": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "id",
                "title",
                "url"
              ]
            },
            "opponent": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "prefix": {
                  "type": ["null","string"]
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "image",
                "prefix",
                "name"
              ]
            },
            "media": {
              "type": "object",
              "properties": {
                "video": {
                  "type": ["string","null"]
                },
                "videoText": {
                  "type": ["null","string"]
                },
                "audio": {
                  "type":["null","string"]
                },
                "audioText": {
                  "type": "null"
                },
                "stats": {
                  "type": ["null","string"]
                },
                "tickets": {
                  "type": ["string","null"]
                },
                "gameNote": {
                  "type": "null"
                },
                "gamePromotionName": {
                  "type": ["null","string"]
                },
                "tv": {
                  "type":["string","null"]
                },
                "tvImage": {
                  "type":["string","null"]
                },
                "tvImageLink": {
                  "type": ["string","null"]
                },
                "radio": {
                  "type": ["string","null"]
                },
                "custom1": {
                  "type": "null"
                },
                "custom2": {
                  "type": "null"
                },
                "custom3": {
                  "type": "null"
                },
                "gameFiles": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "cssClass": {
                          "type": "null"
                        },
                        "title": {
                          "type": "string"
                        },
                        "url": {
                          "type": ["string","null"]
                        }
                      },
                      "required": [
                        "cssClass",
                        "title",
                        "url"
                      ]
                    }
                  ]
                },
                "program": {
                  "type": "null"
                },
                "programText": {
                  "type": "null"
                }
              },
              "required": [
                "video",
                "videoText",
                "audio",
                "audioText",
                "stats",
                "tickets",
                "gameNote",
                "gamePromotionName",
                "tv",
                "tvImage",
                "tvImageLink",
                "radio",
                "custom1",
                "custom2",
                "custom3",
                "gameFiles",
                "program",
                "programText"
              ]
            },
            "story": {
              "type": ["object","null"],
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "url": {
                  "type": ["string","null"]
                },
                "relativeImageSource": {
                  "type": "string"
                },
                "absoluteImageSource": {
                  "type": "string"
                },
                "date": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "url",
                "relativeImageSource",
                "absoluteImageSource",
                "date"
              ]
            },
            "result": {
              "type": ["object","null"],
              "properties": {
                "status": {
                  "type": "string"
                },
                "teamScore": {
                  "type": ["null","string"]
                },
                "opponentScore": {
                  "type": ["null","string"]
                },
                "preScore": {
                  "type":["null","string"]
                },
                "postScore": {
                  "type": ["null","string"]
                },
                "boxScore": {
                  "type": ["null","string"]
                },
                "gameId": {
                  "type": "integer"
                },
                "lineScores": {
                  "type": ["object","null"]
                }
              },
              "required": [
                "status",
                "teamScore",
                "opponentScore",
                "preScore",
                "postScore",
                "boxScore",
                "gameId",
                "lineScores"
              ]
            },
            "gameFacility": {
              "type": ["null","object"]
            },
            "promotion": {
              "type": "object",
              "properties": {
                "name": {
                  "type": ["null","string"]
                },
                "link": {
                  "type": "null"
                },
                "image": {
                  "type": "null"
                },
                "caption": {
                  "type": "null"
                },
                "altText": {
                  "type": "null"
                }
              },
              "required": [
                "name",
                "link",
                "image",
                "caption",
                "altText"
              ]
            },
            "eventImage": {
              "type": "object",
              "properties": {
                "image": {
                  "type": ["null","string"]
                },
                "altText": {
                  "type": ["null","string"]
                },
                "caption": {
                  "type": "null"
                },
                "link": {
                  "type": "null"
                }
              },
              "required": [
                "image",
                "altText",
                "caption",
                "link"
              ]
            }
          },
          "required": [
            "id",
            "gamePregameStoryId",
            "gamePostgameStoryId",
            "date",
            "endDate",
            "dateUtc",
            "endDateUtc",
            "time",
            "isDoubleHeader",
            "showAtVs",
            "tbd",
            "allDay",
            "teamPrefix",
            "status",
            "locationIndicator",
            "neutralHometeam",
            "location",
            "isConference",
            "conference",
            "conferenceAbbrev",
            "conferenceLogo",
            "isSpotlight",
            "type",
            "tournament",
            "ticketLink",
            "sport",
            "schedule",
            "opponent",
            "media",
            "story",
            "result",
            "gameFacility",
            "promotion",
            "eventImage"
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

module.exports = {
  resultsSchema
};