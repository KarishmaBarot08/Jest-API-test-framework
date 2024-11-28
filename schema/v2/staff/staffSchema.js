const staffSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "image": {
            "type": ["object","null"],
            "properties": {
              "url": {
                "type": "string"
              },
              "alt": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "alt"
            ]
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "title": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title"
            ]
          },
          "socialMedia": {
            "type": "object",
            "properties": {
              "apple": {
                "type": "string"
              },
              "cameo": {
                "type": "string"
              },
              "facebook": {
                "type": "string"
              },
              "google": {
                "type": "string"
              },
              "linkedin": {
                "type": "string"
              },
              "instagram": {
                "type": "string"
              },
              "snapchat": {
                "type": "string"
              },
              "tiktok": {
                "type": "string"
              },
              "twitch": {
                "type": "string"
              },
              "twitter": {
                "type": "string"
              },
              "vimeo": {
                "type": "string"
              },
              "youtube": {
                "type": "string"
              }
            },
            "required": [
              "apple",
              "cameo",
              "facebook",
              "google",
              "linkedin",
              "instagram",
              "snapchat",
              "tiktok",
              "twitch",
              "twitter",
              "vimeo",
              "youtube"
            ]
          },
          "socialMediaList": {
            "type": "object",
            "properties": {
              "Twitter": {
                "type": ["object", "null"],
                "properties": {
                  "userName": {
                    "type": "string"
                  },
                  "url": {
                    "type": "string"
                  }
                },
                "required": [
                  "userName",
                  "url"
                ]
              },
              "Instagram": {},
              "Facebook": {},
              "YouTube": {},
              "Snapchat": {},
              "TikTok": {},
              "Cameo": {},
              "Twitch": {},
              "LinkedIn": {},
              "Shop": {}
            },
            "required": [
              "Instagram",
              "Facebook",
              "YouTube",
              "Snapchat",
              "TikTok",
              "Cameo",
              "Twitch",
              "LinkedIn",
              "Shop"
            ]
          },
          "socialMediaR": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "platformName": {
                  "type": "string"
                },
                "userName": {
                  "type": ["string", "null"]
                },
                "url": {
                  "type": ["string", "null"]
                },
                "icon": {
                  "type": ["string","null"]
                },
                "oldIcon": {
                  "type": ["string","null"]
                }
              },
              "required": [
                "platformName",
                "icon",
                "oldIcon"
              ]
            }
          },
          "custom1": {
            "type": "string"
          },
          "custom2": {
            "type": "string"
          },
          "custom3": {
            "type": "string"
          },
          "custom4": {
            "type": "string"
          },
          "bio": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "displayFields": {
            "type": "object",
            "properties": {
              "staff_title": {
                "type": "string"
              },
              "staff_email": {
                "type": "string"
              },
              "staff_phone": {
                "type": "string"
              },
              "staff_custom_1": {
                "type": "string"
              },
              "staff_twitter": {
                "type": "string"
              }
            },
            "required": [
              "staff_title",
              // "staff_email",
              // "staff_phone"
            ]
          },
          "images": {}
        },
        "required": [
          "id",
          "firstName",
          "lastName",
          "title",
          "email",
          "phone",
          "image",
          "category",
          "socialMedia",
          "socialMediaList",
          "socialMediaR",
          "custom1",
          "custom2",
          "custom3",
          "custom4",
          "bio",
          "url",
          "displayFields",
          "images"
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
  staffSchema
};