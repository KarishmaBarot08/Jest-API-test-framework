const rssSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "rssUrl": {
                "type": "string"
            },
            "rssFolowUrl": {
                "type": "string"
            },
            "sportId": {
                "type": "number"
            },
            "sportTitle": {
                "type": "string"
            },
            "sportShortName": {
                "type": "string"
            },
            "sportRank": {
                "type": "number"
            }
        },
        "required": [
            "rssUrl",
            "rssFolowUrl",
            "sportId",
            "sportTitle",
            "sportShortName",
            "sportRank"
        ]
    }
};
module.exports = {
    rssSchema
};