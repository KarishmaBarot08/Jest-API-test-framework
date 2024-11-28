const seoSchema = {
    "type": "object",
    "properties": {
        "settings": {
            "type": "object",
            "properties": {
                "sitemap": {
                    "type": "object",
                    "properties": {
                        "enable_sitemap_xml": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "enable_sitemap_xml"
                    ]
                },
                "robots": {
                    "type": "object",
                    "properties": {
                        "seo_robots_header": {
                            "type": "string"
                        },
                        "seo_robots_footer": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "seo_robots_header",
                        "seo_robots_footer"
                    ]
                },
                "title": {
                    "type": "object",
                    "properties": {
                        "site_name": {
                            "type": "string"
                        },
                        "seo_title_on_this_day": {
                            "type": "string"
                        },
                        "seo_title_sms": {
                            "type": "string"
                        },
                        "seo_title_facilities_list": {
                            "type": "string"
                        },
                        "seo_title_facilities_page": {
                            "type": "string"
                        },
                        "seo_title_rss_list": {
                            "type": "string"
                        },
                        "seo_title_podcast_list": {
                            "type": "string"
                        },
                        "seo_title_podcast_player": {
                            "type": "string"
                        },
                        "seo_title_tag_list": {
                            "type": "string"
                        },
                        "seo_title_tag": {
                            "type": "string"
                        },
                        "seo_title_delimiter": {
                            "type": "string"
                        },
                        "seo_title_homepage": {
                            "type": "string"
                        },
                        "seo_title_sport_home": {
                            "type": "string"
                        },
                        "seo_title_roster_list": {
                            "type": "string"
                        },
                        "seo_title_roster_bio": {
                            "type": "string"
                        },
                        "seo_title_coach_list": {
                            "type": "string"
                        },
                        "seo_title_coach_bio": {
                            "type": "string"
                        },
                        "seo_title_support_staff_bio": {
                            "type": "string"
                        },
                        "seo_title_staff_list": {
                            "type": "string"
                        },
                        "seo_title_staff_bio": {
                            "type": "string"
                        },
                        "seo_title_hof_list": {
                            "type": "string"
                        },
                        "seo_title_hof_bio": {
                            "type": "string"
                        },
                        "seo_title_boxscore": {
                            "type": "string"
                        },
                        "seo_title_cumestats": {
                            "type": "string"
                        },
                        "seo_title_forms": {
                            "type": "string"
                        },
                        "seo_title_schedule": {
                            "type": "string"
                        },
                        "seo_title_calendar": {
                            "type": "string"
                        },
                        "seo_title_opponenthistory": {
                            "type": "string"
                        },
                        "seo_title_sportfile": {
                            "type": "string"
                        },
                        "seo_title_story": {
                            "type": "string"
                        },
                        "seo_title_archives": {
                            "type": "string"
                        },
                        "seo_title_splash": {
                            "type": "string"
                        },
                        "seo_title_galleries": {
                            "type": "string"
                        },
                        "seo_title_awards_list": {
                            "type": "string"
                        },
                        "seo_title_awards_bio": {
                            "type": "string"
                        },
                        "seo_title_404": {
                            "type": "string"
                        },
                        "seo_title_clippings": {
                            "type": "string"
                        },
                        "seo_title_coverage": {
                            "type": "string"
                        },
                        "seo_title_gameday": {
                            "type": "string"
                        },
                        "seo_title_signingday": {
                            "type": "string"
                        },
                        "seo_title_featurepage": {
                            "type": "string"
                        },
                        "seo_title_showcase": {
                            "type": "string"
                        },
                        "seo_title_document": {
                            "type": "string"
                        },
                        "seo_title_sport_videos_page": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "site_name",
                        "seo_title_on_this_day",
                        "seo_title_sms",
                        "seo_title_facilities_list",
                        "seo_title_facilities_page",
                        "seo_title_rss_list",
                        "seo_title_podcast_list",
                        "seo_title_podcast_player",
                        "seo_title_tag_list",
                        "seo_title_tag",
                        "seo_title_delimiter",
                        "seo_title_homepage",
                        "seo_title_sport_home",
                        "seo_title_roster_list",
                        "seo_title_roster_bio",
                        "seo_title_coach_list",
                        "seo_title_coach_bio",
                        "seo_title_support_staff_bio",
                        "seo_title_staff_list",
                        "seo_title_staff_bio",
                        "seo_title_hof_list",
                        "seo_title_hof_bio",
                        "seo_title_boxscore",
                        "seo_title_cumestats",
                        "seo_title_forms",
                        "seo_title_schedule",
                        "seo_title_calendar",
                        "seo_title_opponenthistory",
                        "seo_title_sportfile",
                        "seo_title_story",
                        "seo_title_archives",
                        "seo_title_splash",
                        "seo_title_galleries",
                        "seo_title_awards_list",
                        "seo_title_awards_bio",
                        "seo_title_404",
                        "seo_title_clippings",
                        "seo_title_coverage",
                        "seo_title_gameday",
                        "seo_title_signingday",
                        "seo_title_featurepage",
                        "seo_title_showcase",
                        "seo_title_document",
                        "seo_title_sport_videos_page"
                    ]
                },
                "meta": {
                    "type": "object",
                    "properties": {
                        "site_name": {
                            "type": "string"
                        },
                        "site_mascot_singular": {
                            "type": "string"
                        },
                        "site_mascot_plural": {
                            "type": "string"
                        },
                        "school_name": {
                            "type": "string"
                        },
                        "seo_meta_description_on_this_day": {
                            "type": "string"
                        },
                        "seo_meta_description_body_then_summary": {
                            "type": "string"
                        },
                        "seo_meta_description_sms": {
                            "type": "string"
                        },
                        "seo_meta_description_rss_list": {
                            "type": "string"
                        },
                        "seo_meta_description_facilities_list": {
                            "type": "string"
                        },
                        "seo_meta_description_facilities_page": {
                            "type": "string"
                        },
                        "seo_meta_description_galleries": {
                            "type": "string"
                        },
                        "seo_meta_description_tag_list": {
                            "type": "string"
                        },
                        "seo_meta_description_tag": {
                            "type": "string"
                        },
                        "seo_meta_description_404": {
                            "type": "string"
                        },
                        "seo_meta_description_signingday": {
                            "type": "string"
                        },
                        "seo_meta_description_featurepage": {
                            "type": "string"
                        },
                        "seo_meta_description_clippings": {
                            "type": "string"
                        },
                        "seo_meta_description_gameday": {
                            "type": "string"
                        },
                        "seo_meta_description_cumestats": {
                            "type": "string"
                        },
                        "seo_meta_description_calendar": {
                            "type": "string"
                        },
                        "seo_meta_description_boxscore": {
                            "type": "string"
                        },
                        "seo_meta_description_awards_list": {
                            "type": "string"
                        },
                        "seo_meta_description_hof_list": {
                            "type": "string"
                        },
                        "seo_meta_description_coach_list": {
                            "type": "string"
                        },
                        "seo_meta_description_roster_list": {
                            "type": "string"
                        },
                        "seo_meta_description_staff_list": {
                            "type": "string"
                        },
                        "seo_meta_og_image": {
                            "type": "string"
                        },
                        "seo_meta_og_image_alt": {
                            "type": "string"
                        },
                        "seo_meta_description_archives": {
                            "type": "string"
                        },
                        "seo_meta_description_sport_home": {
                            "type": "string"
                        },
                        "seo_meta_description_homepage": {
                            "type": "string"
                        },
                        "seo_meta_description_schedule": {
                            "type": "string"
                        },
                        "seo_meta_description_opponenthistory": {
                            "type": "string"
                        },
                        "seo_meta_og_determiner": {
                            "type": "string"
                        },
                        "seo_meta_og_locale": {
                            "type": "string"
                        },
                        "seo_meta_og_locale_alternate": {
                            "type": "string"
                        },
                        "seo_meta_description_sport_videos_page": {
                            "type": "string"
                        },
                        "seo_meta_description_weplayed_moments_page": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "site_name",
                        "site_mascot_singular",
                        "site_mascot_plural",
                        "school_name",
                        "seo_meta_description_on_this_day",
                        "seo_meta_description_body_then_summary",
                        "seo_meta_description_sms",
                        "seo_meta_description_rss_list",
                        "seo_meta_description_facilities_list",
                        "seo_meta_description_facilities_page",
                        "seo_meta_description_galleries",
                        "seo_meta_description_tag_list",
                        "seo_meta_description_tag",
                        "seo_meta_description_404",
                        "seo_meta_description_signingday",
                        "seo_meta_description_featurepage",
                        "seo_meta_description_clippings",
                        "seo_meta_description_gameday",
                        "seo_meta_description_cumestats",
                        "seo_meta_description_calendar",
                        "seo_meta_description_boxscore",
                        "seo_meta_description_awards_list",
                        "seo_meta_description_hof_list",
                        "seo_meta_description_coach_list",
                        "seo_meta_description_roster_list",
                        "seo_meta_description_staff_list",
                        "seo_meta_og_image",
                        "seo_meta_og_image_alt",
                        "seo_meta_description_archives",
                        "seo_meta_description_sport_home",
                        "seo_meta_description_homepage",
                        "seo_meta_description_schedule",
                        "seo_meta_description_opponenthistory",
                        "seo_meta_og_determiner",
                        "seo_meta_og_locale",
                        "seo_meta_og_locale_alternate",
                        "seo_meta_description_sport_videos_page",
                        "seo_meta_description_weplayed_moments_page"
                    ]
                }
            },
            "required": [
                "sitemap",
                "robots",
                "title",
                "meta"
            ]
        },
        "tokens": {
            "type": "object",
            "properties": {
                "keys": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "keys"
            ]
        }
    },
    "required": [
        "settings",
        "tokens"
    ]
};
module.exports = {
    seoSchema
};