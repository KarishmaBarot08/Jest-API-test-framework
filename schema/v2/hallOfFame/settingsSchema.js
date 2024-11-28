const settingsSchema = {
    "type": "object",
    "properties": {
        "clientId": {
            "type": ["integer","null"]
        },
        "hallOfFameTitle": {
            "type": "string"
        },
        "hallOfFameBlurb": {
            "type": ["null","string"]
        },
        "hallOfFameTemplate": {
            "type": ["string","null"]
        },
        "hallOfFameBioTemplate": {
            "type": "string"
        },
        "hallOfFameHideClass": {
            "type": "boolean"
        },
        "hallOfFameHideInduction": {
            "type": "boolean"
        },
        "hallOfFameDefaultFilter": {
            "type": "string"
        }
    },
    "required": [
        "clientId",
        "hallOfFameTitle",
        "hallOfFameBlurb",
        "hallOfFameTemplate",
        "hallOfFameBioTemplate",
        "hallOfFameHideClass",
        "hallOfFameHideInduction",
        "hallOfFameDefaultFilter"
    ]
};
module.exports = {
    settingsSchema
};