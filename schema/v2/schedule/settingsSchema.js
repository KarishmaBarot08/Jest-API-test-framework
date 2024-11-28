const settingsSchema = {
    "type": "object",
    "properties": {
        "opponentHistoryPageEnabled": {
            "type": "boolean"
        },
        "scheduleScoreDisplay": {
            "type": "string"
        },
        "isSeasonDepositEnabled": {
            "type": "boolean"
        },
        "scheduleDefaultView": {
            "type": "string"
        },
        "schedulePageShowAtVs": {
            "type": "boolean"
        }
    },
    "required": [
        "opponentHistoryPageEnabled",
        "scheduleScoreDisplay",
        "isSeasonDepositEnabled",
        "scheduleDefaultView",
        "schedulePageShowAtVs"
    ]
};
module.exports = {
    settingsSchema
};