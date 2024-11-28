const relatedVideosSchema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "videoId": {
                        "type": "string"
                    },
                    "videoUrl": {
                        "type": "string"
                    },
                    "videoPlayer": {},
                    "videoThumbnailUrl": {
                        "type": "string"
                    },
                    "videoTitle": {
                        "type": "string"
                    },
                    "videoWidth": {
                        "type": ["number","null"]
                    },
                    "videoHeight": {
                        "type": ["number","null"]
                    },
                    "videoDate": {
                        "type": "string"
                    },
                    "videoRank": {
                        "type": "number"
                    },
                    "videoTags": {},
                    "videoType": {
                        "type": "string"
                    }
                },
                "required": [
                    "videoId",
                    "videoUrl",
                    "videoPlayer",
                    "videoThumbnailUrl",
                    "videoTitle",
                    "videoWidth",
                    "videoHeight",
                    "videoDate",
                    "videoRank",
                    "videoTags",
                    "videoType"
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
    relatedVideosSchema
};