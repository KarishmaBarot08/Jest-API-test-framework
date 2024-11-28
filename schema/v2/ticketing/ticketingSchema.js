const ticketingSchema = {
    "type": "object",
    "properties": {
        "seasonCodes": {
            "type": "array",
            "items": {}
        },
        "events": {
            "type": "array",
            "items": {}
        },
        "miscEvents": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string"
                    },
                    "sport_id": {
                        "type": "number"
                    },
                    "season_code": {
                        "type": "string"
                    },
                    "item_code": {
                        "type": "string"
                    },
                    "information": {
                        "type": "string"
                    },
                    "deposit_title": {
                        "type": "string"
                    },
                    "link": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "name",
                            "url"
                        ]
                    },
                    "maximum_quantity": {
                        "type": "number"
                    },
                    "active": {
                        "type": "boolean"
                    },
                    "show_quantity": {
                        "type": "boolean"
                    },
                    "ticket_url": {
                        "type": "string"
                    },
                    "linkValues": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "sportId": {
                                "type": "number"
                            },
                            "seasonDeposit": {
                                "type": "boolean"
                            },
                            "seasonCode": {
                                "type": "string"
                            },
                            "itemCode": {
                                "type": "string"
                            },
                            "redirect": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "name",
                            "sportId",
                            "seasonDeposit",
                            "seasonCode",
                            "itemCode",
                            "redirect"
                        ]
                    },
                    "itemCode": {
                        "type": "string"
                    },
                    "seasonCode": {
                        "type": "string"
                    }
                },
                "required": [
                    "type",
                    "sport_id",
                    "season_code",
                    "item_code",
                    "information",
                    "deposit_title",
                    "link",
                    "maximum_quantity",
                    "active",
                    "show_quantity",
                    "ticket_url",
                    "linkValues",
                    "itemCode",
                    "seasonCode"
                ]
            }
        }
    },
    "required": [
        "seasonCodes",
        "events",
        "miscEvents"
    ]
};
module.exports = {
    ticketingSchema
};