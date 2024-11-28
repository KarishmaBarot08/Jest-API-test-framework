const yearByYearSchema = {
    "description": "",
    "type": "object",
    "properties": {
        "2005-06": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2006-07": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2007-08": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2008-09": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2009-10": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2010-11": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2011-12": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2012-13": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2013-14": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2014-15": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2015-16": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2016-17": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2017-18": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2018-19": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2019-20": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2020-21": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": ["string", "null"],
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2021-22": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": "string",
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2022-23": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": "string",
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        },
        "2023-24": {
            "type": "object",
            "properties": {
                "games": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "required": [
                            "gameId",
                            "sportTitle",
                            "gameDate",
                            "resultStatus",
                            "gameOpponent",
                            "gameLocationIndicator",
                            "gameLocation",
                            "gameConference",
                            "gameType",
                            "opponentId",
                            "opponentName",
                            "resultTeamScore",
                            "resultOpponentScore",
                            "boxscoreLink"
                        ],
                        "properties": {
                            "gameId": {
                                "type": "number"
                            },
                            "sportTitle": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameDate": {
                                "type": "string",
                                "minLength": 1
                            },
                            "resultStatus": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameOpponent": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocationIndicator": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameLocation": {
                                "type": "string",
                                "minLength": 1
                            },
                            "gameConference": {
                                "type": "boolean"
                            },
                            "gameType": {
                                "type": "string",
                                "minLength": 1
                            },
                            "opponentId": {
                                "type": ["number", "null"]
                            },
                            "opponentName": {
                                "type": "string",
                                //   "minLength": 1
                            },
                            "resultTeamScore": {
                                "type": "string"
                            },
                            "resultOpponentScore": {
                                "type": "string"
                            },
                            "boxscoreLink": {
                                "type": "string"
                            }
                        }
                    }
                },
                "records": {
                    "type": "object",
                    "properties": {
                        "overall": {},
                        "conference": {},
                        "home": {},
                        "away": {},
                        "neutral": {}
                    },
                    "required": []
                }
            },
            "required": [
                "games",
                "records"
            ]
        }
    },
    "required": [
        // "2005-06",
        // "2006-07",
        // "2007-08",
        // "2008-09",
        // "2009-10",
        // "2010-11",
        // "2011-12",
        // "2012-13",
        // "2013-14",
        // "2014-15",
        // "2015-16",
        // "2016-17",
        // "2017-18",
        // "2018-19",
        // "2019-20",
        // "2020-21",
        // "2021-22",
        // "2022-23",
        // "2023-24"
    ]
};
module.exports = {
    yearByYearSchema
};