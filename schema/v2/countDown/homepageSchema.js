const homepageSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "title": {
            "type": "string"
        },
        "localDateTime": {
            "type": "string"
        },
        "game": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "date": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                },
                "locationIndicator": {
                    "type": "string"
                },
                "location": {
                    "type": "string"
                },
                "isConference": {
                    "type": "boolean"
                },
                "type": {
                    "type": "string"
                },
                "sport": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "title": {
                            "type": "string"
                        },
                        "abbreviation": {},
                        "shortname": {
                            "type": "string"
                        },
                        "shortTitle": {
                            "type": "string"
                        },
                        "globalSportId": {},
                        "nonSport": {
                            "type": "boolean"
                        },
                        "showAtVs": {
                            "type": "boolean"
                        },
                        "globalSportShortname": {},
                        "gender": {},
                        "youtube": {
                            "type": "string"
                        },
                        "facebook": {
                            "type": "string"
                        },
                        "twitter": {
                            "type": "string"
                        },
                        "instagram": {
                            "type": "string"
                        },
                        "pinterest": {
                            "type": "string"
                        },
                        "tickets": {},
                        "globalSportNameSlug": {},
                        "url": {},
                        "ranking": {},
                        "gameSynonym": {}
                    },
                    "required": [
                        "id",
                        "title",
                        "abbreviation",
                        "shortname",
                        "shortTitle",
                        "globalSportId",
                        "nonSport",
                        "showAtVs",
                        "globalSportShortname",
                        "gender",
                        "youtube",
                        "facebook",
                        "twitter",
                        "instagram",
                        "pinterest",
                        "tickets",
                        "globalSportNameSlug",
                        "url",
                        "ranking",
                        "gameSynonym"
                    ]
                },
                "opponent": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "title": {
                            "type": "string"
                        },
                        "image": {
                            "type": "string"
                        },
                        "website": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "title",
                        "image",
                        "website"
                    ]
                },
                "media": {
                    "type": "object",
                    "properties": {
                        "video": {
                            "type": "string"
                        },
                        "videoText": {},
                        "audio": {
                            "type": "string"
                        },
                        "audioText": {},
                        "stats": {
                            "type": "string"
                        },
                        "ticketLink": {},
                        "gameNote": {},
                        "gamePromotionName": {},
                        "tv": {
                            "type": "string"
                        },
                        "tvImage": {},
                        "tvImageLink": {
                            "type": "string"
                        },
                        "radio": {
                            "type": "string"
                        },
                        "custom1": {
                            "type": "string"
                        },
                        "custom2": {
                            "type": "string"
                        },
                        "custom3": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "video",
                        "videoText",
                        "audio",
                        "audioText",
                        "stats",
                        "ticketLink",
                        "gameNote",
                        "gamePromotionName",
                        "tv",
                        "tvImage",
                        "tvImageLink",
                        "radio",
                        "custom1",
                        "custom2",
                        "custom3"
                    ]
                },
                "promotion": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "link": {
                            "type": "string"
                        },
                        "image": {},
                        "caption": {
                            "type": "string"
                        },
                        "altText": {}
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
                        "link": {
                            "type": "string"
                        },
                        "image": {},
                        "caption": {},
                        "altText": {}
                    },
                    "required": [
                        "link",
                        "image",
                        "caption",
                        "altText"
                    ]
                },
                "facility": {}
            },
            "required": [
                "id",
                "date",
                "time",
                "locationIndicator",
                "location",
                "isConference",
                "type",
                "sport",
                "opponent",
                "media",
                "promotion",
                "eventImage",
                "facility"
            ]
        },
        "ad": {},
        "customInfo": {
            "type": "object",
            "properties": {
                "date": {},
                "description": {}
            },
            "required": [
                "date",
                "description"
            ]
        }
    },
    "required": [
        "id",
        "title",
        "localDateTime",
        "game",
        "ad",
        "customInfo"
    ]
};
module.exports = {
    homepageSchema
};