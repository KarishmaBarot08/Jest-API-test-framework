const opponentListSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "opponent": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "name"
                        ]
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "gameId": {
                                    "type": "number"
                                },
                                "gameDate": {
                                    "type": "string"
                                },
                                "resultStatus": {
                                    "type": "string"
                                },
                                "gameLocationIndicator": {
                                    "type": "string"
                                },
                                "gameConference": {
                                    "type": "boolean"
                                },
                                "teamScore": {},
                                "opponentScore": {}
                            },
                            "required": [
                                "gameId",
                                "gameDate",
                                "resultStatus",
                                "gameLocationIndicator",
                                "gameConference",
                                "teamScore",
                                "opponentScore"
                            ]
                        }
                    },
                    "teamTotalPoints": {
                        "type": "number"
                    },
                    "opponentTotalPoints": {
                        "type": "number"
                    },
                    "allTimeAdjustmentsRecords": {
                        "type": "object",
                        "properties": {
                            "wins": {
                                "type": "number"
                            },
                            "losses": {
                                "type": "number"
                            },
                            "ties": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "wins",
                            "losses",
                            "ties"
                        ]
                    },
                    "allTotalRecords": {
                        "type": "object",
                        "properties": {
                            "wins": {
                                "type": "number"
                            },
                            "losses": {
                                "type": "number"
                            },
                            "ties": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "wins",
                            "losses",
                            "ties"
                        ]
                    },
                    "lastTenGameRecords": {
                        "type": "object",
                        "properties": {
                            "wins": {
                                "type": "number"
                            },
                            "losses": {
                                "type": "number"
                            },
                            "ties": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "wins",
                            "losses",
                            "ties"
                        ]
                    },
                    "currentStreak": {
                        "type": "object",
                        "properties": {
                            "wins": {
                                "type": "number"
                            },
                            "losses": {
                                "type": "number"
                            },
                            "ties": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "wins",
                            "losses",
                            "ties"
                        ]
                    },
                    "largestMarginOfVictory": {},
                    "smallestMarginOfVictory": {},
                    "opponentName": {
                        "type": "string"
                    },
                    "opponentId": {
                        "type": "number"
                    }
                },
                "required": [
                    "opponent",
                    "results",
                    "teamTotalPoints",
                    "opponentTotalPoints",
                    "allTimeAdjustmentsRecords",
                    "allTotalRecords",
                    "lastTenGameRecords",
                    "currentStreak",
                    "largestMarginOfVictory",
                    "smallestMarginOfVictory",
                    "opponentName",
                    "opponentId"
                ]
            }
        },
        "total": {
            "type": "number"
        },
        "page": {
            "type": "number"
        },
        "pages": {
            "type": "number"
        }
    },
    "required": [
        "items",
        "total",
        "page",
        "pages"
    ]
};
module.exports = {
    opponentListSchema
};