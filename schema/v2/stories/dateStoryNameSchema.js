const dateStoryNameSchema = {
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
            "type": "number"
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
                    "type": "number"
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
                    "type": "string"
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
                    "type": "number"
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
                    "type": "string"
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
        "imageFocalPoint": {},
        "imageAltText": {
            "type": "string"
        },
        "imageCaption": {
            "type": "string"
        },
        "imageCreditText": {},
        "insideContentImage": {},
        "primaryImage": {
            "type": "object",
            "properties": {
                "caption": {
                    "type": "string"
                },
                "creditText": {},
                "focalPoint": {},
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
        "alternateImage": {},
        "video": {
            "type": "object",
            "properties": {
                "youtube": {},
                "archive": {},
                "metadata": {
                    "type": "object",
                    "properties": {
                        "title": {},
                        "thumbnail": {}
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
        "type": {},
        "gamePostStoryId": {},
        "games": {
            "type": "array",
            "items": {}
        },
        "players": {
            "type": ["array","null"],
            "items": {
                "type": "object",
                "properties": {
                    "rosterPlayerId": {
                        "type": "number"
                    },
                    "rosterId": {
                        "type": "number"
                    },
                    "playerId": {
                        "type": "number"
                    },
                    "rpPositionShort": {
                        "type": "string"
                    },
                    "rpJerseyNumber": {
                        "type": "string"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "headshot": {
                        "type": "string"
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
                    }
                },
                "required": [
                    "rosterPlayerId",
                    "rosterId",
                    "playerId",
                    "rpPositionShort",
                    "rpJerseyNumber",
                    "firstName",
                    "lastName",
                    "headshot",
                    "sport"
                ]
            }
        },
        "galleryId": {
            "type": "number"
        },
        "galleryImages": {
            "type": "array",
            "items": {}
        },
        "writer": {},
        "isBlockBased": {
            "type": "boolean"
        },
        "content": {
            "type": "string"
        },
        "blocks": {},
        "storyMetaKeywords": {},
        "storyMetaDescription": {},
        "storyMetaOgDescription": {},
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
};
module.exports = {
    dateStoryNameSchema
};