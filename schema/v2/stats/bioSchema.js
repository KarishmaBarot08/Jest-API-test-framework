const bioSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "currentStats": {
            "type": "object",
            "properties": {
                "pitchingStats": {},
                "pitchingStatsTotal": {},
                "hittingStats": {},
                "hittingStatsTotal": {},
                "fieldingStats": {},
                "fieldingStatsTotal": {}
            },
            "required": [
                "pitchingStats",
                "pitchingStatsTotal",
                "hittingStats",
                "hittingStatsTotal",
                "fieldingStats",
                "fieldingStatsTotal"
            ]
        },
        "seasonHighStats": {
            "type": "object",
            "properties": {
                "pitchingStats": {
                    "type": "array",
                    "items": {}
                },
                "hittingStats": {
                    "type": "array",
                    "items": {}
                }
            },
            "required": [
                "pitchingStats",
                "hittingStats"
            ]
        }
    },
    "required": [
        // "currentStats",
        // "seasonHighStats"
    ]
};
module.exports = {
    bioSchema
};