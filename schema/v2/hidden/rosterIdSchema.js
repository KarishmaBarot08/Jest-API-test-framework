const rosterIdSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "templateId": {
            "type": ["integer","null"]
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
            "type": ["string","null"]
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
            "items": [
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
                            "type": "string"
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
                            "type": "string"
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
                            "type": "null"
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
                            "type": "null"
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
                            "type": "null"
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
                            "type": "null"
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
        "season": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": ["string","null"]
                },
                "shortName": {
                    "type": "null"
                },
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
        "image": {
            "type": "null"
        },
        "downloads": {
            "type": "null"
        },
        "sportFile": {
            "type": "null"
        },
        "statCrew": {
            "type": ["null","object"]
        },
        "allStaffImage": {
            "type": "null"
        },
        "players": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type":["null","string"]
                                        },
                                        "url": {
                                            "type": ["null","string"]
                                        },
                                        "icon": {
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                                    "type":["string","null"]
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type":["null","string"]
                        },
                        "previousSchool": {
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                    "type":["null","object"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
                        },
                        "heightFeet": {
                            "type": ["integer","null"]
                        },
                        "heightInches": {
                            "type":["integer","null"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
                        },
                        "heightFeet": {
                            "type":["integer","null"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
                        },
                        "heightFeet": {
                            "type": ["integer","null"]
                        },
                        "heightInches": {
                            "type":["integer","null"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
                        },
                        "heightFeet": {
                            "type":["integer","null"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                                            "type":["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                },
                {
                    "type": "object",
                    "properties": {
                        "rosterPlayerId": {
                            "type": "integer"
                        },
                        "playerId": {
                            "type": "integer"
                        },
                        "rosterDisplayTitle": {
                            "type": "null"
                        },
                        "seasonSlug": {
                            "type": "null"
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
                            "type": ["null","string"]
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
                            "type": ["null","integer"]
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
                            "type": "integer"
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
                            "type": "null"
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
                            "type": "null"
                        },
                        "bioFields": {
                            "type": "null"
                        },
                        "historicalFields": {
                            "type": "null"
                        },
                        "hasWePlayedMoments": {
                            "type": "boolean"
                        },
                        "lastUpdated": {
                            "type": "string"
                        },
                        "displayFields": {
                            "type": "null"
                        },
                        "rankedBioFields": {
                            "type": "null"
                        },
                        "settings": {
                            "type": "null"
                        },
                        "statsSeasons": {
                            "type": "null"
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
                }
            ]
        },
        "coaches": {
            "type": ["array","null"],
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "bio": {
                            "type": "string"
                        },
                        "twitter": {
                            "type": "string"
                        },
                        "image": {
                            "type": "object",
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
                        "images": {
                            "type": "null"
                        },
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
                                "staff_email",
                                "staff_phone",
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
                        "id": {
                            "type": "integer"
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
                        "url": {
                            "type": "null"
                        },
                        "staffId": {
                            "type": "integer"
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
                                            "type":["null","string"]
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
                },
                {
                    "type": "object",
                    "properties": {
                        "bio": {
                            "type": "string"
                        },
                        "twitter": {
                            "type": "string"
                        },
                        "image": {
                            "type": "object",
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
                        "images": {
                            "type": "null"
                        },
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
                                "staff_email",
                                "staff_phone",
                                //"staff_custom_1",
                                //"staff_twitter"
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
                        "id": {
                            "type": "integer"
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
                        "url": {
                            "type": "null"
                        },
                        "staffId": {
                            "type": "integer"
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
            ]
        },
        "support": {
            "type": ["array","null"],
            "items": {}
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
};
module.exports = {
    rosterIdSchema
};