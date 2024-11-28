const awardsIdSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "aowTypeId": {
            "type": "number"
        },
        "aowTypeTitle": {
            "type": "string"
        },
        "playerId": {
            "type": "number"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "gender": {},
        "homeTown": {
            "type": "string"
        },
        "highSchool": {
            "type": "string"
        },
        "major": {},
        "previousTeam": {},
        "sportTitle": {},
        "externalLink": {},
        "sport": {
            "type": "object",
            "properties": {
                "seasonId": {},
                "conferenceId": {},
                "rosterId": {},
                "scheduleId": {},
                "usesPoints": {
                    "type": "boolean"
                },
                "hasDoubleHeader": {
                    "type": "boolean"
                },
                "defaultLocation": {},
                "defaultFacility": {},
                "created": {
                    "type": "string"
                },
                "oldId": {},
                "defaultStatsLink": {},
                "usesSidearmStats": {
                    "type": "boolean"
                },
                "conferenceXml": {},
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
                    "type": "string"
                },
                "facebookId": {},
                "twitterName": {
                    "type": "string"
                },
                "instagramName": {
                    "type": "string"
                },
                "googlePlusId": {},
                "pinterestName": {
                    "type": "string"
                },
                "youtubeName": {
                    "type": "string"
                },
                "globalSportShortName": {
                    "type": "string"
                },
                "statsLink": {},
                "scheduleUpcomingGamesToShow": {
                    "type": "number"
                },
                "scheduleUpcomingGamesBackgroundImage": {},
                "scheduleUpcomingGamesBackgroundFullWidth": {
                    "type": "boolean"
                },
                "ticketsLink": {
                    "type": "string"
                },
                "ticketmasterAttractionId": {},
                "appPriority": {
                    "type": "number"
                },
                "displaySocialMedia": {},
                "youtubePlaylistId": {},
                "nonSportOnArchive": {
                    "type": "boolean"
                },
                "hasHockeySystem": {
                    "type": "boolean"
                },
                "displayNextEvent": {},
                "displayOpponentHistory": {},
                "nonSportOnCalendar": {
                    "type": "boolean"
                },
                "imagesJson": {},
                "momentIds": {},
                "defaultVideoLink": {},
                "hasHockey3V3": {
                    "type": "boolean"
                },
                "gameSynonym": {},
                "abbrev": {
                    "type": "string"
                },
                "shortDisplay": {},
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
        },
        "positionLong": {
            "type": "string"
        },
        "positionShort": {
            "type": "string"
        },
        "shortHighlights": {
            "type": "string"
        },
        "highlights": {
            "type": "string"
        },
        "rpAcademicYear": {
            "type": "number"
        },
        "academicYear": {
            "type": "string"
        },
        "academicYearFull": {
            "type": "string"
        },
        "jerseyNumber": {},
        "useBioPhoto": {
            "type": "boolean"
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
                "title": {},
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
        "backgroundImage": {},
        "url": {
            "type": "string"
        },
        "date": {
            "type": "string"
        },
        "socialMedia": {
            "type": "object",
            "properties": {
                "apple": {
                    "type": "string"
                },
                "cameo": {
                    "type": "string"
                },
                "facebook": {
                    "type": "string"
                },
                "google": {
                    "type": "string"
                },
                "linkedin": {
                    "type": "string"
                },
                "instagram": {
                    "type": "string"
                },
                "snapchat": {
                    "type": "string"
                },
                "tiktok": {
                    "type": "string"
                },
                "twitch": {
                    "type": "string"
                },
                "twitter": {
                    "type": "string"
                },
                "vimeo": {
                    "type": "string"
                },
                "youtube": {
                    "type": "string"
                }
            },
            "required": [
                "apple",
                "cameo",
                "facebook",
                "google",
                "linkedin",
                "instagram",
                "snapchat",
                "tiktok",
                "twitch",
                "twitter",
                "vimeo",
                "youtube"
            ]
        },
        "socialMediaR": {},
        "aowExpires": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "aowTypeId",
        "aowTypeTitle",
        "playerId",
        "firstName",
        "lastName",
        "gender",
        "homeTown",
        "highSchool",
        "major",
        "previousTeam",
        "sportTitle",
        "externalLink",
        "sport",
        "positionLong",
        "positionShort",
        "shortHighlights",
        "highlights",
        "rpAcademicYear",
        "academicYear",
        "academicYearFull",
        "jerseyNumber",
        "useBioPhoto",
        "image",
        "backgroundImage",
        "url",
        "date",
        "socialMedia",
        "socialMediaR",
        "aowExpires"
    ]
};
module.exports = {
    awardsIdSchema
};