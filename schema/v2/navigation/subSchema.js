const subSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "title": {
                "type": "string"
            },
            "shortTitle": {
                "type": ["string", "null"]
            },
            "rank": {
                "type": "number"
            },
            "column": {
                "type": "number"
            },
            "url": {
                "type": "string"
            },
            "icon": {},
            "separator": {
                "type": "boolean"
            },
            "openInNewWindow": {
                "type": "boolean"
            },
            "sportIdAssociation": {},
            "sport": {
                "type": ["object", "null"],
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "abbrev": {
                        "type": "string"
                    },
                    "shortTitle": {
                        "type": ["string", "null"]
                    },
                    "shortName": {
                        "type": "string"
                    },
                    "globalSportShortName": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "title",
                    "abbrev",
                    "shortTitle",
                    "shortName",
                    "globalSportShortName"
                ]
            },
            "className": {
                "type": "string"
            },
            "socialMediaLinks": {},
            "scheduleRosterNewsLinks": {},
            "items": {
                "type": ["array", "null"],
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "title": {
                            "type": "string"
                        },
                        "shortTitle": {},
                        "rank": {
                            "type": "number"
                        },
                        "column": {
                            "type": "number"
                        },
                        "url": {
                            "type": "string"
                        },
                        "icon": {},
                        "separator": {
                            "type": "boolean"
                        },
                        "openInNewWindow": {
                            "type": "boolean"
                        },
                        "sportIdAssociation": {},
                        "sport": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "number"
                                },
                                "title": {
                                    "type": "string"
                                },
                                "abbrev": {
                                    "type": "string"
                                },
                                "shortTitle": {
                                    "type": ["string", "null"]
                                },
                                "shortName": {
                                    "type": "string"
                                },
                                "globalSportShortName": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "abbrev",
                                "shortTitle",
                                "shortName",
                                "globalSportShortName"
                            ]
                        },
                        "className": {
                            "type": "string"
                        },
                        "socialMediaLinks": {},
                        "scheduleRosterNewsLinks": {},
                        "items": {},
                        "stats": {},
                        "tickets": {},
                        "youtube": {}
                    },
                    "required": [
                        "id",
                        "title",
                        "shortTitle",
                        "rank",
                        "column",
                        "url",
                        "icon",
                        "separator",
                        "openInNewWindow",
                        "sportIdAssociation",
                        "sport",
                        "className",
                        "socialMediaLinks",
                        "scheduleRosterNewsLinks",
                        "items",
                        "stats",
                        "tickets",
                        "youtube"
                    ]
                }
            },
            "stats": {},
            "tickets": {},
            "youtube": {}
        },
        "required": [
            "id",
            "title",
            "rank",
            "column",
            "url",
            "icon",
            "separator",
            "openInNewWindow",
            "sportIdAssociation",
            "className",
            "socialMediaLinks",
            "scheduleRosterNewsLinks",
            "stats",
            "tickets",
            "youtube"
        ]
    }
};
module.exports = {
    subSchema
};