const overallSchema = {
    "type": "object",
    "properties": {
        "yearly": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "season": {
                        "type": "string"
                    },
                    "conferenceTies": {
                        "type": "number"
                    },
                    "overallTies": {
                        "type": "number"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "overallWins": {
                        "type": "number"
                    },
                    "overallLosses": {
                        "type": "number"
                    },
                    "overallWinPercent": {
                        "type": "string"
                    },
                    "conferenceWins": {
                        "type": "number"
                    },
                    "conferenceWinPercent": {
                        "type": "string"
                    },
                    "conferenceLosses": {
                        "type": "number"
                    }
                },
                "required": [
                    "season",
                    "conferenceTies",
                    "overallTies",
                    "firstName",
                    "lastName",
                    "overallWins",
                    "overallLosses",
                    "overallWinPercent",
                    "conferenceWins",
                    "conferenceWinPercent",
                    "conferenceLosses"
                ]
            }
        },
        "overall": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "numberOfSeasons": {
                        "type": "number"
                    },
                    "startYear": {
                        "type": "string"
                    },
                    "endYear": {
                        "type": "string"
                    },
                    "conferenceTies": {
                        "type": "number"
                    },
                    "overallTies": {
                        "type": "number"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "overallWins": {
                        "type": "number"
                    },
                    "overallLosses": {
                        "type": "number"
                    },
                    "overallWinPercent": {
                        "type": "string"
                    },
                    "conferenceWins": {
                        "type": "number"
                    },
                    "conferenceWinPercent": {
                        "type": "string"
                    },
                    "conferenceLosses": {
                        "type": "number"
                    }
                },
                "required": [
                    "numberOfSeasons",
                    "startYear",
                    "endYear",
                    "conferenceTies",
                    "overallTies",
                    "firstName",
                    "lastName",
                    "overallWins",
                    "overallLosses",
                    "overallWinPercent",
                    "conferenceWins",
                    "conferenceWinPercent",
                    "conferenceLosses"
                ]
            }
        }
    },
    "required": [
        "yearly",
        "overall"
    ]
};
module.exports = {
    overallSchema
};