export const dictionaries = {
    en: {
        hero: {
            tagline: "Next-Gen Performance",
            headline: "Outcomes.",
            subHeadline: "Not Just Marketing.",
            description: "We handle full-funnel performance marketing so you can focus on scale. One clear goal: aggressive revenue growth.",
            primaryCta: "Book a Call",
            secondaryCta: "See Results",
            nav: {
                services: "Services",
                results: "Results",
                contact: "Book a Call"
            }
        },
        services: {
            title: "How We Win",
            items: [
                {
                    id: "growth",
                    title: "Growth Acceleration",
                    desc: "Scale your user acquisition profitably with data-driven paid media."
                },
                {
                    id: "creative",
                    title: "Performance Creative",
                    desc: "Ad creatives that convert. Tested, iterated, and optimized for ROAS."
                },
                {
                    id: "cro",
                    title: "Conversion Rate Optimization",
                    desc: "Turn clicks into revenue. We rebuild landing pages for maximum conversion."
                },
                {
                    id: "analytics",
                    title: "Advanced Tracking",
                    desc: "Server-side tracking and attribution so every dollar is accounted for."
                }
            ]
        },
        contact: {
            title: "Ready to scale?",
            subtitle: "Let's build a growth engine for your brand.",
            button: "Let's Talk"
        }
    },
    he: {
        hero: {
            tagline: "הדור הבא של הביצועים",
            headline: "תוצאות.",
            subHeadline: "לא שיווק.",
            description: "אנחנו מטפלים בכל מה שקשור לפרסום - כדי שיהיה לך שקט נפשי. עם מטרה אחת ברורה: להביא לך יותר לקוחות.",
            primaryCta: "דברו איתנו",
            secondaryCta: "תנו לתוצאות לדבר",
            nav: {
                services: "שירותים",
                results: "תוצאות",
                contact: "דברו איתנו"
            }
        },
        // The rest of the Hebrew dictionary acts as a target for Drive translations. Replace with exact Drive translation texts later.
        services: {
            title: "איך אנחנו מנצחים",
            items: [
                {
                    id: "growth",
                    title: "צמיחה מואצת",
                    desc: "טקסט מתוך הדרייב"
                },
                // ...
            ]
        }
    }
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale) {
    return dictionaries[locale];
}
