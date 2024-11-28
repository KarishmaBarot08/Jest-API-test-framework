const upcomingSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": ["number", "null"] },
          "gamePregameStoryId": { "type": ["number", "null"] },
          "gamePostgameStoryId": { "type": ["number", "null"] },
          "date": { "type": ["string", "null"] },
          "endDate": { "type": ["string", "null"] },
          "dateUtc": { "type": ["string", "null"] },
          "endDateUtc": { "type": ["string", "null"] },
          "time": { "type": ["string", "null"] },
          "isDoubleHeader": { "type": ["boolean", "null"] },
          "showAtVs": { "type": ["boolean", "null"] },
          "tbd": { "type": ["boolean", "null"] },
          "allDay": { "type": ["boolean", "null"] },
          "teamPrefix": { "type": ["string", "null"] },
          "status": { "type": ["string", "null"] },
          "locationIndicator": { "type": ["string", "null"] },
          "neutralHometeam": { "type": ["boolean", "null"] },
          "location": { "type": ["string", "null"] },
          "isConference": { "type": ["boolean", "null"] },
          "conference": { "type": ["string", "null"] },
          "conferenceAbbrev": { "type": ["string", "null"] },
          "conferenceLogo": { "type": ["string", "null"] },
          "isSpotlight": { "type": ["boolean", "null"] },
          "type": { "type": ["string", "null"] },
          "tournament": { "type": ["string", "null"] },
          "ticketLink": { "type": ["string", "null"] },
          "sport": {
            "type": ["object", "null"],
            "properties": {
              "nonSport": { "type": ["boolean", "null"] },
              "atVs": { "type": ["boolean", "null"] },
              "gameSynonym": { "type": ["string", "null"] },
              "globalSportShortName": { "type": ["string", "null"] },
              "shortTitle": { "type": ["string", "null"] },
              "scheduleId": { "type": ["number", "null"] },
              "abbrev": { "type": ["string", "null"] },
              "shortDisplay": { "type": ["string", "null"] },
              "shortName": { "type": ["string", "null"] },
              "globalSportId": { "type": ["number", "null"] },
              "globalSportNameSlug": { "type": ["string", "null"] },
              "globalSportGender": { "type": ["string", "null"] },
              "id": { "type": ["number", "null"] },
              "title": { "type": ["string", "null"] }
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
            "type": ["object", "null"],
            "properties": {
              "id": { "type": ["number", "null"] },
              "title": { "type": ["string", "null"] },
              "url": { "type": ["string", "null"] }
            },
            "required": ["id", "title", "url"]
          },
          "opponent": {
            "type": ["object", "null"],
            "properties": {
              "id": { "type": ["number", "null"] },
              "title": { "type": ["string", "null"] },
              "image": { "type": ["string", "null"] },
              "prefix": { "type": ["string", "null"] },
              "name": { "type": ["string", "null"] }
            },
            "required": ["id", "title", "image", "prefix", "name"]
          },
          "media": {
            "type": ["object", "null"],
            "properties": {
              "video": { "type": ["string", "null"] },
              "videoText": { "type": ["string", "null"] },
              "audio": { "type": ["string", "null"] },
              "audioText": { "type": ["string", "null"] },
              "stats": { "type": ["string", "null"] },
              "tickets": { "type": ["string", "null"] },
              "gameNote": { "type": ["string", "null"] },
              "gamePromotionName": { "type": ["string", "null"] },
              "tv": { "type": ["string", "null"] },
              "tvImage": { "type": ["string", "null"] },
              "tvImageLink": { "type": ["string", "null"] },
              "radio": { "type": ["string", "null"] },
              "custom1": { "type": ["string", "null"] },
              "custom2": { "type": ["string", "null"] },
              "custom3": { "type": ["string", "null"] },
              "gameFiles": {
                "type": "array",
                "items": { "type": ["object", "null"] }
              },
              "program": { "type": ["string", "null"] },
              "programText": { "type": ["string", "null"] }
            },
            "required": [
              "video",
              "videoText",
              "audio",
              "audioText",
              "stats",
              "tickets",
              "gameNote",
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
          "story": { "type": ["object", "null"] },
          "result": { "type": ["object", "null"] },
          "gameFacility": {
            "type": ["object", "null"],
            "properties": {
              "id": { "type": ["number", "null"] },
              "title": { "type": ["string", "null"] },
              "url": { "type": ["string", "null"] }
            },
            "required": ["id", "title", "url"]
          },
          "promotion": {
            "type": ["object", "null"],
            "properties": {
              "name": { "type": ["string", "null"] },
              "link": { "type": ["string", "null"] },
              "image": { "type": ["string", "null"] },
              "caption": { "type": ["string", "null"] },
              "altText": { "type": ["string", "null"] }
            },
            "required": ["link", "image", "caption", "altText"]
          },
          "eventImage": {
            "type": ["object", "null"],
            "properties": {
              "image": { "type": ["string", "null"] },
              "altText": { "type": ["string", "null"] },
              "caption": { "type": ["string", "null"] },
              "link": { "type": ["string", "null"] }
            },
            "required": ["image", "altText", "caption", "link"]
          },
          "gameDate": { "type": ["string", "null"] },
          "gameId": { "type": ["number", "null"] }
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
          "promotion",
          "eventImage",
          "gameDate",
          "gameId"
        ]
      }
    },
    "total": { "type": ["number", "null"] },
    "page": { "type": ["number", "null"] },
    "pages": { "type": ["number", "null"] }
  },
  "required": ["items", "total", "page", "pages"]
};

module.exports = {
  upcomingSchema
};
