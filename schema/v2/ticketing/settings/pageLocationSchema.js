const pageLocationSchema = {
    "type": "object",
    "properties": {
        "showOnSportFile": {
            "type": "boolean"
        },
        "showOnRoster": {
            "type": "boolean"
        },
        "showOnRosterBio": {
            "type": "boolean"
        },
        "showOnCoaches": {
            "type": "boolean"
        },
        "showOnCoachesBio": {
            "type": "boolean"
        },
        "showOnArchives": {
            "type": "boolean"
        },
        "showOnBoxscore": {
            "type": "boolean"
        },
        "showOnFacilities": {
            "type": "boolean"
        }
    },
    "required": [
        "showOnSportFile",
        "showOnRoster",
        "showOnRosterBio",
        "showOnCoaches",
        "showOnCoachesBio",
        "showOnArchives",
        "showOnBoxscore",
        "showOnFacilities"
    ]
};
module.exports = {
    pageLocationSchema
};