const idSchema = {
    "type": "object",
    "properties": {
        "seasonId": {
            "type": "number"
        },
        "conferenceId": {
            "type": "number"
        },
        "rosterId": {
            "type": ["number","null"]
        },
        "scheduleId": {
            "type": ["number","null"]
        },
        "usesPoints": {
            "type": "boolean"
        },
        "hasDoubleHeader": {
            "type": "boolean"
        },
        "defaultLocation": {
            "type": ["string","null"]
        },
        "defaultFacility": {},
        "created": {
            "type": "string"
        },
        "oldId": {},
        "defaultStatsLink": {
            "type": ["string","null"]
        },
        "usesSidearmStats": {
            "type": "boolean"
        },
        "conferenceXml": {
            "type": ["string","null"]
        },
        "conferenceDisplay": {
            "type": "boolean"
        },
        "nonSport": {
            "type": "boolean"
        },
        "atVs": {
            "type": "boolean"
        },
        "eventInclusion": {},
        "hasDepthChart": {
            "type": "boolean"
        },
        "hasOvertimeLosses": {
            "type": "boolean"
        },
        "hasOvertimeWins": {
            "type": "boolean"
        },
        "facebookPage": {
            "type": ["string","null"]
        },
        "facebookId": {
            "type": ["string","null"]
        },
        "twitterName": {
            "type": ["string","null"]
        },
        "instagramName": {
            "type": ["string","null"]
        },
        "googlePlusId": {},
        "pinterestName": {
            "type": ["string","null"]
        },
        "youtubeName": {
            "type": ["string","null"]
        },
        "globalSportShortName": {
            "type": ["string","null"]
        },
        "statsLink": {},
        "scheduleUpcomingGamesToShow": {
            "type": "number"
        },
        "scheduleUpcomingGamesBackgroundImage": {},
        "scheduleUpcomingGamesBackgroundFullWidth": {
            "type": "boolean"
        },
        "ticketsLink": {},
        "ticketmasterAttractionId": {
            "type": ["string","null"]
        },
        "appPriority": {
            "type": "number"
        },
        "displaySocialMedia": {
            "type": "boolean"
        },
        "youtubePlaylistId": {
            "type": "string"
        },
        "nonSportOnArchive": {
            "type": "boolean"
        },
        "hasHockeySystem": {
            "type": "boolean"
        },
        "displayNextEvent": {
            "type": "boolean"
        },
        "displayOpponentHistory": {
            "type": "boolean"
        },
        "nonSportOnCalendar": {
            "type": "boolean"
        },
        "imagesJson": {},
        "momentIds": {},
        "defaultVideoLink": {
            "type": ["string","null"]
        },
        "hasHockey3V3": {
            "type": "boolean"
        },
        "gameSynonym": {},
        "abbrev": {
            "type": ["string","null"]
        },
        "shortDisplay": {
            "type": ["string","null"]
        },
        "shortName": {
            "type": "string"
        },
        "globalSportId": {
            "type": ["number","null"]
        },
        "globalSportNameSlug": {
            "type": "string"
        },
        "globalSportGender": {
            "type": ["string","null"]
        },
        "id": {
            "type": "number"
        },
        "title": {
            "type": "string"
        }
    },
    "required": [
        "seasonId",
        "conferenceId",
        "rosterId",
        "scheduleId",
        "usesPoints",
        "hasDoubleHeader",
        "defaultLocation",
        "defaultFacility",
        "created",
        "oldId",
        "defaultStatsLink",
        "usesSidearmStats",
        "conferenceXml",
        "conferenceDisplay",
        "nonSport",
        "atVs",
        "eventInclusion",
        "hasDepthChart",
        "hasOvertimeLosses",
        "hasOvertimeWins",
        "facebookPage",
        "facebookId",
        "twitterName",
        "instagramName",
        "googlePlusId",
        "pinterestName",
        "youtubeName",
        "globalSportShortName",
        "statsLink",
        "scheduleUpcomingGamesToShow",
        "scheduleUpcomingGamesBackgroundImage",
        "scheduleUpcomingGamesBackgroundFullWidth",
        "ticketsLink",
        "ticketmasterAttractionId",
        "appPriority",
        "displaySocialMedia",
        "youtubePlaylistId",
        "nonSportOnArchive",
        "hasHockeySystem",
        "displayNextEvent",
        "displayOpponentHistory",
        "nonSportOnCalendar",
        "imagesJson",
        "momentIds",
        "defaultVideoLink",
        "hasHockey3V3",
        "gameSynonym",
        "abbrev",
        "shortDisplay",
        "shortName",
        "globalSportId",
        "globalSportNameSlug",
        "globalSportGender",
        "id",
        "title"
    ]
};
module.exports = {
    idSchema
};