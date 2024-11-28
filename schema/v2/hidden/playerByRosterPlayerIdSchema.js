const playerByRosterPlayerIdSchema = {
    "type": "object",
    "properties": {
        "rosterPlayerId": {
            "type": "integer"
        },
        "playerId": {
            "type": "integer"
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
        "highSchool": {
            "type": ["null","string"]
        },
        "previousSchool": {
            "type": ["string","null"]
        },
        "major": {
            "type": "null"
        },
        "birthDate": {
            "type": "null"
        },
        "gender": {
            "type": "string"
        },
        "pronouns": {
            "type": ["null","string"]
        },
        "facebookUsername": {
            "type": "null"
        },
        "instagramUsername": {
            "type": ["null","string"]
        },
        "twitterUsername": {
            "type": ["null","string"]
        },
        "snapchatUsername": {
            "type": "null"
        },
        "tiktokUsername": {
            "type": "null"
        },
        "cameoUsername": {
            "type": "null"
        },
        "youtubeUsername": {
            "type": "null"
        },
        "twitchUsername": {
            "type": "null"
        },
        "linkedinUsername": {
            "type": "null"
        },
        "shopUrl": {
            "type": ["null","string"]
        },
        "socialMedia": {
            "type": "object",
            "properties": {
                "Twitter": {
                    "type": ["null","object"]
                },
                "Instagram": {
                    "type": ["null","object"]
                },
                "Facebook": {
                    "type": "null"
                },
                "YouTube": {
                    "type": "null"
                },
                "Snapchat": {
                    "type": "null"
                },
                "TikTok": {
                    "type": "null"
                },
                "Cameo": {
                    "type": "null"
                },
                "Twitch": {
                    "type": "null"
                },
                "LinkedIn": {
                    "type": "null"
                },
                "Shop": {
                    "type": ["null","object"]
                }
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
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
                        }
                    },
                    "required": [
                        "platformName",
                        "userName",
                        "url",
                        "icon",
                        "oldIcon"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "platformName": {
                            "type": "string"
                        },
                        "userName": {
                            "type": ["null","string"]
                        },
                        "url": {
                            "type": ["null","string"]
                        },
                        "icon": {
                            "type": "string"
                        },
                        "oldIcon": {
                            "type": ["null","string"]
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
            ]
        },
        "weight": {
            "type": ["integer","null"]
        },
        "heightFeet": {
            "type": ["integer","null"]
        },
        "heightInches": {
            "type": ["integer","null"]
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
        "jerseyNumberSecond": {
            "type": "null"
        },
        "academicYearNumber": {
            "type": "integer"
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
            "type": ["null","integer"]
        },
        "hide": {
            "type": "boolean"
        },
        "hideBio": {
            "type": "boolean"
        },
        "custom1": {
            "type": ["string","null"]
        },
        "custom2": {
            "type": ["null","string"]
        },
        "custom3": {
            "type": ["null","string"]
        },
        "image": {
            "type": ["object","null"],
            "properties": {
                "mediaCaption": {
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
                    "type": ["string","null"]
                }
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
        "headerImage": {
            "type": "null"
        },
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
                    "type": "integer"
                },
                "globalSportNameSlug": {
                    "type": "string"
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
            "type": ["null","string"]
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
                // "rp_position_short",
                // "rp_custom1",
                "height",
                // "rp_weight",
                // "player_previous_school",
                "player_hometown"
            ]
        },
        "historicalFields": {
            "type": "array",
            "items": [
                {
                    "type": ["object","null"],
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "image": {
                            "type": ["object","null"],
                            "properties": {
                                "mediaCaption": {
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
                                    "type": ["string","null"]
                                }
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
                            "type": "integer"
                        },
                        "weight": {
                            "type": ["integer","null"]
                        },
                        "weightTrend": {
                            "type": "integer"
                        },
                        "heightFeet": {
                            "type": ["integer","null"]
                        },
                        "heightInches": {
                            "type":["integer","null"]
                        },
                        "height": {
                            "type": "string"
                        },
                        "heightTrend": {
                            "type": "integer"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "image": {
                            "type": ["object","null"],
                            "properties": {
                                "mediaCaption": {
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
                                    "type": ["string","null"]
                                }
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
                            "type": "integer"
                        },
                        "weight": {
                            "type": ["integer","null"]
                        },
                        "weightTrend": {
                            "type": "integer"
                        },
                        "heightFeet": {
                            "type": ["integer","null"]
                        },
                        "heightInches": {
                            "type": ["integer","null"]
                        },
                        "height": {
                            "type": "string"
                        },
                        "heightTrend": {
                            "type": "integer"
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
            ]
        },
        "hasWePlayedMoments": {
            "type": "boolean"
        },
        "lastUpdated": {
            "type": "string"
        },
        "displayFields": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": ["string","null"]
                        },
                        "description": {
                            "type": "string"
                        },
                        "dbField": {
                            "type": ["null","string"]
                        },
                        "specialColumn": {
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                },
                {
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
                            "type": ["null","string"]
                        },
                        "print": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "title",
                        "description",
                        "dbField",
                        "specialColumn",
                        "print"
                    ]
                }
            ]
        },
        "rankedBioFields": {
            "type": "array",
            "items": [
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                },
                {
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
                            "type": "integer"
                        }
                    },
                    "required": [
                        "label",
                        "value",
                        "bioField",
                        "rank"
                    ]
                }
            ]
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
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "season": {
                            "type": "string"
                        },
                        "year": {
                            "type": "integer"
                        },
                        "rosterPlayerId": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "season",
                        "year",
                        "rosterPlayerId"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "season": {
                            "type": "string"
                        },
                        "year": {
                            "type": "integer"
                        },
                        "rosterPlayerId": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "season",
                        "year",
                        "rosterPlayerId"
                    ]
                }
            ]
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
    playerByRosterPlayerIdSchema
};