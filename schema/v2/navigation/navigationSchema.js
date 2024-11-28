const navigationSchema = {
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
            "rank": {
                "type": "number"
            },
            "url": {
                "type": "string"
            },
            "openInNewWindow": {
                "type": "boolean"
            },
            "includeSocialMedia": {
                "type": "boolean"
            },
            "includeScheduleRosterNews": {
                "type": "boolean"
            },
            "includeStats": {
                "type": "boolean"
            },
            "includeTickets": {
                "type": "boolean"
            },
            "includeYouTube": {
                "type": "boolean"
            },
            "className": {
                "type": "string"
            },
            "items": {
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
                        "icon": {
                            "type": ["string", "null"]
                        },
                        "separator": {
                            "type": "boolean"
                        },
                        "openInNewWindow": {
                            "type": "boolean"
                        },
                        "sportIdAssociation": {
                            "type": ["number", "null"]
                        },
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
                                    "type": "string"
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
                        "socialMediaLinks": {
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
                                    "icon": {
                                        "type": "string"
                                    },
                                    "separator": {
                                        "type": "boolean"
                                    },
                                    "openInNewWindow": {
                                        "type": "boolean"
                                    },
                                    "sportIdAssociation": {},
                                    "sport": {},
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
                        "scheduleRosterNewsLinks": {
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
                                    "icon": {
                                        "type": ["string", "null"]
                                    },
                                    "separator": {
                                        "type": "boolean"
                                    },
                                    "openInNewWindow": {
                                        "type": "boolean"
                                    },
                                    "sportIdAssociation": {},
                                    "sport": {},
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
                        "items": {
                            "type": "array",
                            "items": {}
                        },
                        "stats": {},
                        "tickets": {
                            "type": ["object", "null"],
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
                                "icon": {
                                    "type": ["string", "null"]
                                },
                                "separator": {
                                    "type": "boolean"
                                },
                                "openInNewWindow": {
                                    "type": "boolean"
                                },
                                "sportIdAssociation": {},
                                "sport": {},
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
                        },
                        "youtube": {}
                    },
                    "required": [
                        "id",
                        "title",
                        "shortTitle",
                        "rank",
                        "column",
                        "url",
                        "separator",
                        "openInNewWindow",
                        "className",
                        "items",
                        "stats",
                        "youtube"
                    ]
                }
            },
            "columns": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "column": {
                            "type": "number"
                        },
                        "items": {
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
                                    "icon": {
                                        "type": ["string", "null"]
                                    },
                                    "separator": {
                                        "type": "boolean"
                                    },
                                    "openInNewWindow": {
                                        "type": "boolean"
                                    },
                                    "sportIdAssociation": {
                                        "type": ["number", "null"]
                                    },
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
                                                "type": "string"
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
                                    "socialMediaLinks": {
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
                                                "icon": {
                                                    "type": ["string", "null"]
                                                },
                                                "separator": {
                                                    "type": "boolean"
                                                },
                                                "openInNewWindow": {
                                                    "type": "boolean"
                                                },
                                                "sportIdAssociation": {},
                                                "sport": {},
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
                                    "scheduleRosterNewsLinks": {
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
                                                "icon": {
                                                    "type": ["string", "null"]
                                                },
                                                "separator": {
                                                    "type": "boolean"
                                                },
                                                "openInNewWindow": {
                                                    "type": "boolean"
                                                },
                                                "sportIdAssociation": {},
                                                "sport": {},
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
                                    "items": {
                                        "type": "array",
                                        "items": {}
                                    },
                                    "stats": {},
                                    "tickets": {
                                        "type": ["object", "null"],
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
                                            "icon": {
                                                "type": "string"
                                            },
                                            "separator": {
                                                "type": "boolean"
                                            },
                                            "openInNewWindow": {
                                                "type": "boolean"
                                            },
                                            "sportIdAssociation": {},
                                            "sport": {},
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
                                    },
                                    "youtube": {}
                                },
                                "required": [
                                    "id",
                                    "title",
                                    "shortTitle",
                                    "rank",
                                    "column",
                                    "url",
                                    "separator",
                                    "openInNewWindow",
                                    "className",
                                    "items",
                                    "stats",
                                    "youtube"
                                ]
                            }
                        }
                    },
                    "required": [
                        "column",
                        "items"
                    ]
                }
            },
            "ad": {}
        },
        "required": [
            "id",
            "title",
            "rank",
            "url",
            "openInNewWindow",
            "includeSocialMedia",
            "includeScheduleRosterNews",
            "includeStats",
            "includeTickets",
            "includeYouTube",
            "className",
            "items",
            "columns",
            "ad"
        ]
    }
};
module.exports = {
    navigationSchema
};