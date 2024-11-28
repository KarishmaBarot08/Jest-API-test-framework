const ticketingExperienceSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "globalTicketExperienceConfig": {
            "type": "object",
            "properties": {
                "contact": {
                    "type": "object",
                    "properties": {
                        "address": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "phone": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "address",
                        "email",
                        "phone"
                    ]
                },
                "footerLinks": {
                    "type": "array",
                    "items": {}
                },
                "headerLinks": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "body": {
                                "type": "string"
                            },
                            "icon": {
                                "type": "string"
                            },
                            "imagePath": {
                                "type": "string"
                            },
                            "text": {
                                "type": "string"
                            },
                            "title": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "body",
                            "icon",
                            "imagePath",
                            "text",
                            "title",
                            "url"
                        ]
                    }
                },
                "hours": {
                    "type": "string"
                },
                "isContactInfoAtTop": {
                    "type": "boolean"
                }
            },
            "required": [
                "contact",
                "footerLinks",
                "headerLinks",
                "hours",
                "isContactInfoAtTop"
            ]
        },
        "sports": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "sportId": {
                        "type": "number"
                    },
                    "sportTitle": {
                        "type": "string"
                    },
                    "sportShortName": {
                        "type": "string"
                    },
                    "ticketExperience": {
                        "type": "object",
                        "properties": {
                            "image": {
                                "type": "object",
                                "properties": {
                                    "absoluteUrl": {
                                        "type": "string"
                                    },
                                    "altText": {
                                        "type": "string"
                                    },
                                    "createdOn": {
                                        "type": "string"
                                    },
                                    "credit": {},
                                    "dimensions": {
                                        "type": ["object", "null"],
                                        "properties": {
                                            "height": {
                                                "type": "number"
                                            },
                                            "width": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "height",
                                            "width"
                                        ]
                                    },
                                    "fileName": {
                                        "type": "string"
                                    },
                                    "id": {
                                        "type": "number"
                                    },
                                    "title": {
                                        "type": ["string", "null"]
                                    },
                                    "updatedOn": {
                                        "type": "string"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "absoluteUrl",
                                    "altText",
                                    "createdOn",
                                    "credit",
                                    "fileName",
                                    "id",
                                    "updatedOn",
                                    "url"
                                ]
                            },
                            "sections": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "isSlider": {
                                            "type": "boolean"
                                        },
                                        "links": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "body": {
                                                        "type": "string"
                                                    },
                                                    "icon": {
                                                        "type": "string"
                                                    },
                                                    "imagePath": {
                                                        "type": "string"
                                                    },
                                                    "text": {
                                                        "type": "string"
                                                    },
                                                    "title": {
                                                        "type": "string"
                                                    },
                                                    "url": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "body",
                                                    "icon",
                                                    "imagePath",
                                                    "text",
                                                    "title",
                                                    "url"
                                                ]
                                            }
                                        },
                                        "showTitle": {
                                            "type": "boolean"
                                        },
                                        "title": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "isSlider",
                                        "links",
                                        "showTitle",
                                        "title"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "image",
                            "sections"
                        ]
                    },
                    "ranking": {
                        "type": "number"
                    }
                },
                "required": [
                    "sportId",
                    "sportTitle",
                    "sportShortName",
                    "ticketExperience",
                    "ranking"
                ]
            }
        }
    },
    "required": [
        "globalTicketExperienceConfig",
        "sports"
    ]
};
module.exports = {
    ticketingExperienceSchema
};