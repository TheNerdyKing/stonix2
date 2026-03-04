interface DictItem {
    nav: { services: string; results: string; testimonials: string; contact: string; call: string };
    hero: {
        pulse: string;
        title1: string;
        title2: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        badges: string[];
        stats: { val: string; label: string }[];
        dashboard: {
            domain: string;
            kpi1: string;
            kpi2: string;
            kpi3: string;
            chartTitle: string;
            chartGrowth: string;
            activityTitle: string;
            act1: string;
            act1val: string;
            act1time: string;
            act2: string;
            act2val: string;
            act2time: string;
        };
        clientsLabel: string;
    };
    about: { subtitle: string; title1: string; title2: string; p1: string; p2: string; p3: string; p4: string };
    services: {
        preTitle: string;
        title1: string;
        title2: string;
        desc: string;
        cta: string;
        list: { id: string; title: string; subtitle: string; desc: string; perks: string[]; mockMetric: string }[];
    };
    testimonials: { preTitle: string; title1: string; title2: string; reviews: { name: string; role: string; text: string }[] };
    pricing: {
        preTitle: string;
        title1: string;
        title2: string;
        subtitle: string;
        popularLabel: string;
        plans: { name: string; nameDisplay: string; desc: string; price: string; period: string; cta: string; perks: string[] }[];
    };
    methodology: {
        preTitle: string;
        title1: string;
        title2: string;
        desc: string;
        steps: { num: string; title: string; desc: string }[];
    };
    results: {
        preTitle: string;
        title1: string;
        title2: string;
        desc: string;
        btn: string;
        challengeLabel: string;
        resultLabel: string;
        cases: { industry: string; client: string; challenge: string; result: string; metrics: { label: string; val: string; bad?: boolean }[] }[];
    };
    bento: {
        left: { title1: string; title2: string; campaignSlot: string; revenue: string; roas: string; performance: string };
        right: { title1: string; title2: string; roasLabel: string };
    };
    finalCTA: {
        preTitle: string;
        title1: string;
        title2: string;
        cta: string;
        benefits: string[];
        mock: { title: string; subtitle: string; email: string; website: string; tomorrow: string; time: string };
    };
    contact: {
        preTitle: string;
        title1: string;
        title2: string;
        addressTitle: string;
        addressValue: string;
        phoneTitle: string;
        phoneValue: string;
        emailTitle: string;
        emailValue: string;
        formName: string;
        formPhone: string;
        formBusiness: string;
        formEmail: string;
        formSubmit: string;
        agreed: string;
        successText: string;
    };
    footer: { rights: string; privacy: string; terms: string };
}

export const dictionaries: Record<"he" | "en", DictItem> = {
    he: {
        nav: { services: "שירותים", results: "תוצאות", testimonials: "המלצות", contact: "יצירת קשר", call: "שיחת אסטרטגיה חינם" },
        hero: {
            pulse: "שיווק ביצועים מהדור הבא",
            title1: "תוצאות.",
            title2: "לא רק שיווק.",
            subtitle: "אנחנו יוצרים מנועי צמיחה דיגיטליים שעובדים בשבילך – עם אסטרטגיות מבוססות נתונים, קריאייטיב מדויק וניהול קמפיינים שמביא תוצאות.",
            ctaPrimary: "שיחת אסטרטגיה חינם",
            ctaSecondary: "ראו תוצאות",
            badges: ["ניסיון של 5+ שנים", "2,200+ לידים בקמפיין", "ללא התחייבות"],
            stats: [
                { val: "2,209", label: "לידים בפייסבוק" },
                { val: "₪24.85", label: "עלות ממוצעת לליד" },
                { val: "118", label: "הוספות לסל בקורס" },
                { val: "4.8x", label: "ROAS ממוצע" },
            ],
            dashboard: {
                domain: "app.stonix.agency",
                kpi1: "ROAS ממוצע",
                kpi2: "עלות לליד",
                kpi3: "לידים חדשים",
                chartTitle: "הכנסות חודשיות",
                chartGrowth: "+147% YoY",
                activityTitle: "פעילות אחרונה",
                act1: "קמפיין Meta – לידים",
                act1val: "+23 לידים",
                act1time: "לפני 2 דק'",
                act2: "Google Search – המרה",
                act2val: "עסקה חדשה",
                act2time: "לפני 8 דק'"
            },
            clientsLabel: "עובדים עם מותגים מובילים"
        },
        about: {
            subtitle: "מי אנחנו?",
            title1: "מנוע צמיחה",
            title2: "לעסק שלך.",
            p1: "אנחנו ב STONIX מתמחים בבניית אסטרטגיות שיווק שמייצרות תוצאות אמיתיות לעסקים.",
            p2: "יותר פניות, יותר לקוחות, יותר הכנסות - דרך עבודה מדויקת, חכמה ומבוססת נתונים. אנחנו מלווים עסקים מכל התחומים בתהליך מסודר של בניית נוכחות דיגיטלית חזקה: מהגדרת המסר והמיתוג, דרך יצירת תוכן מדוייק, ועד לניהול קמפיינים ממומנים שמביאים תנועה איכותית וממירה.",
            p3: "העבודה שלנו מבוססת על שילוב בין קריאייטיב, אסטרטגיה וניתוח נתונים - כדי שכל פעולה תשרת מטרה עסקית ברורה. אנחנו בונים מערך שיווקי שעובד בשבילכם יום יום. במהלך הדרך אנחנו מקפידים על שקיפות מלאה, מדידה רציפה ושיפור מתמיד - כדי שתדעו בכל רגע מה קורה, מה עובד, ואיך ממשיכים לצמוח.",
            p4: "המטרה שלנו פשוטה: לעזור לעסקים להפוך את הדיגיטל שלהם למנוע צמיחה אמיתי."
        },
        services: {
            preTitle: "המומחיות שלנו",
            title1: "מעטפת שיווקית",
            title2: "שעובדת בשבילכם.",
            desc: "כל שירות בנוי סביב מדד אחד: תוצאות מדידות. אנחנו לא עובדים על תחושת בטן. אנחנו עובדים על תובנות.",
            cta: "קבלו הצעה מותאמת אישית",
            list: [
                {
                    id: "paid",
                    title: "קידום ממומן",
                    subtitle: "Meta · Google · TikTok",
                    desc: "קמפיינים מדויקים שמביאים לידים איכותיים ולקוחות משלמים. ניהול מלא, אופטימיזציה יומית ודיווח שקוף.",
                    perks: ["ניהול תקציב חכם", "טרגוט מדויק", "A/B Testing מתמיד"],
                    mockMetric: "4.8x ROAS"
                },
                {
                    id: "cro",
                    title: "CRO ואופטימיזציה",
                    subtitle: "Landing Pages · Funnels",
                    desc: "אנחנו הופכים קליקים להכנסות. ניתוח מעמיק של הפאנל, בניית דפי נחיתה שממירים ובדיקות שמשפרות תמיד.",
                    perks: ["ניתוח התנהגות משתמשים", "בדיקות A/B", "שיפור בהמרות"],
                    mockMetric: "3.2x המרות"
                },
                {
                    id: "creative",
                    title: "קריאייטיב וסטודיו",
                    subtitle: "Ads · Videos · Copy",
                    desc: "צילומי חוץ, עריכת וידאו, קופירייטינג וכתיבת תסריטים שגורמים לקהל היעד לבחור בכם.",
                    perks: ["צילום והפקה", "עריכת וידאו", "קופירייטינג מנצח"],
                    mockMetric: "-38% CPM"
                },
                {
                    id: "strategy",
                    title: "ייעוץ וליווי",
                    subtitle: "Strategy · Growth · Data",
                    desc: "STONIX הוקמה כדי להפסיק לקרוא לזה שיווק. בניית אסטרטגיות מוכחות המחברות בין נראות, אמון ומכירה בצורה מדויקת.",
                    perks: ["מיפוי עסקי", "אסטרטגיה חכמה", "בקרת נתונים"],
                    mockMetric: "+148% צמיחה"
                }
            ]
        },
        testimonials: {
            preTitle: "לקוחות ממליצים",
            title1: "הם אמרו את זה,",
            title2: "לא אנחנו.",
            reviews: [
                {
                    name: "שירן א.",
                    role: "מנכ\"לית, מותג אופנה",
                    text: "לינואר, היית נפלאה! את פשוט קרן שמש שעברה אצלנו. השירות, האנרגיה והתוצאות בקמפיינים היו מעבר לכל ציפייה. תודה על הליווי הצמוד והתוצאות המדהימות."
                },
                {
                    name: "רועי ב.",
                    role: "מייסד, סוכנות נדל\"ן",
                    text: "חוויה כל כך מהנה ומקצועית. היה כיף לעבוד איתכם והתוצאות דיברו בעד עצמן – כמות הלידים עלתה משמעותית והאיכות השתפרה פלאים. מומלץ בחום!"
                },
                {
                    name: "מיכאל ג.",
                    role: "בעלים, רשת מרפאות",
                    text: "סוף סוף סוכנות שמתעסקת בתוצאות ולא בדיבורים. ה ROAS שלנו עלה ל-4.8x תוך חודשיים של עבודה משותפת. צוות של מקצוענים אמיתיים."
                }
            ]
        },
        pricing: {
            preTitle: "תמחור ושקיפות",
            title1: "בחרו את המסלול",
            title2: "שמתאים לכם.",
            subtitle: "ללא הסתרה, ללא מחירים מפתיעים. רק ערך ברור לכל שקל.",
            popularLabel: "הכי פופולרי",
            plans: [
                {
                    name: "Starter",
                    nameDisplay: "סטארטר",
                    desc: "לעסקים שמתחילים וצריכים בסיס חזק",
                    price: "₪3,500",
                    period: "/ חודש",
                    cta: "התחייבות מינימלית",
                    perks: [
                        "ניהול קמפיינים בפלטפורמה אחת",
                        "עד ₪20K תקציב מדיה",
                        "דו\"ח חודשי",
                        "תמיכה בוואטסאפ"
                    ]
                },
                {
                    name: "Growth",
                    nameDisplay: "צמיחה",
                    desc: "לעסקים שצומחים ורוצים לשחק בליג אחר",
                    price: "₪7,500",
                    period: "/ חודש",
                    cta: "הכי פופולרי",
                    perks: [
                        "ניהול מלא – Meta + Google",
                        "עד ₪60K תקציב מדיה",
                        "CRO בסיסי + A/B Testing",
                        "קריאייטיב – 8 קמפיינים",
                        "דיווח שבועי + BI Dashboard",
                        "מנהל חשבון ייעודי"
                    ]
                },
                {
                    name: "Scale",
                    nameDisplay: "סקייל",
                    desc: "לחברות שמוכנות לדחוף הכל עד הסוף",
                    price: "מחיר מותאם",
                    period: "",
                    cta: "נדבר על עסקה",
                    perks: [
                        "אסטרטגיית שיווק מלאה",
                        "תקציב ללא הגבלה",
                        "CRO מתקדם + Funnel מלא",
                        "קריאייטיב בלתי מוגבל",
                        "דיווח יומי + Slack channel",
                        "ליווי אסטרטגי C-level"
                    ]
                }
            ]
        },
        methodology: {
            preTitle: "השיטה שלנו",
            title1: "כך אנחנו עובדים - ",
            title2: "וכך מגיעות תוצאות.",
            desc: "אין ניחושים. יש תהליך. מבחינתנו, הצלחה נמדדת בדבר אחד: האם העסק שלכם גדל.",
            steps: [
                { num: '01', title: 'מיפוי עסקי', desc: 'הגדרת מטרה ומחקר מתחרים מדויק' },
                { num: '02', title: 'מערכת שיווקית', desc: 'בניית משפך, דפי נחיתה ותשתית המרות' },
                { num: '03', title: 'הפקה וביצוע', desc: 'קריאייטיב, קמפיינים והשקת מערך הפרסום' },
                { num: '04', title: 'מדידה והכפלה', desc: 'ניתוח, עדכון ואופטימיזציה לסילום התקציב' }
            ]
        },
        results: {
            preTitle: "קבלות בשטח",
            title1: "תוצאות שמדברות",
            title2: "מספרים.",
            desc: "בסוף היום אנחנו נמדדים על מטריקה אחת: הצמיחה של העסק שלך. הנה כמה דוגמאות למה שעשינו לאחרונה.",
            btn: "רוצים גם?",
            challengeLabel: "האתגר",
            resultLabel: "התוצאה",
            cases: [
                {
                    industry: "E-commerce",
                    client: "מותג אופנה וביוטי",
                    challenge: "הגדלת מכירות לקורס דיגיטלי והורדת עלות רכישה.",
                    result: "הפקת 118 הוספות לסל ורכישות רבות ב-₪32 בלבד להוספה.",
                    metrics: [
                        { label: "הוספות לסל", val: "118" },
                        { label: "עלות להוספה", val: "₪32" },
                        { label: "ROAS", val: "4.8x" },
                        { label: "שיפור", val: "+140%" }
                    ]
                },
                {
                    industry: "Real Estate",
                    client: "סוכנות נדל\"ן מובילה",
                    challenge: "ייצור לידים איכותיים עבור פרויקט יוקרה במרכז.",
                    result: "ייצור של 2,209 לידים איכותיים בפייסבוק בעלות של ₪24.85 לליד.",
                    metrics: [
                        { label: "לידים", val: "2,209" },
                        { label: "עלות לליד", val: "₪24.85" },
                        { label: "איכות ליד", val: "94%" },
                        { label: "יחס המרה", val: "12%" }
                    ]
                }
            ]
        },
        bento: {
            left: {
                title1: "תנו לתוצאות",
                title2: "לדבר בעד עצמן",
                campaignSlot: "קמפיין מוביל",
                revenue: "הכנסות ₪82K",
                roas: "שיא ROAS",
                performance: "ביצועים"
            },
            right: {
                title1: "להשיג את היעדים",
                title2: "במהירות שיא",
                roasLabel: "ROAS"
            }
        },
        finalCTA: {
            preTitle: "בואו נדבר",
            title1: "מוכנים",
            title2: "לשבור שיאים?",
            cta: "תיאום שיחת אסטרטגיה",
            benefits: [
                "קמפיינים מבוססי נתונים ודיוק מקסימלי",
                "דיווח ושקיפות מלאה בזמן אמת",
                "ניהול ייעודי ומקצועי לכל אורך הדרך"
            ],
            mock: {
                title: "שיחת אסטרטגיה",
                subtitle: "שיחת אבחון ראשונית. ללא התחייבות.",
                email: "כתובת מייל...",
                website: "אתר החברה...",
                tomorrow: "מחר",
                time: "10:00"
            }
        },
        contact: {
            preTitle: "יצירת קשר",
            title1: "מוכנים לצמוח?",
            title2: "דברו איתנו.",
            addressTitle: "כתובת",
            addressValue: "שד' ההסתדרות 236, חיפה",
            phoneTitle: "טלפון",
            phoneValue: "055-2664456",
            emailTitle: "אימייל",
            emailValue: "a.s.mediagroup2023@gmail.com",
            formName: "שם מלא",
            formPhone: "מספר טלפון",
            formBusiness: "שם העסק",
            formEmail: "כתובת מייל",
            formSubmit: "שליחת פרטים",
            agreed: "אני מאשר קבלת הצעות שיווקיות ומסכים למדיניות הפרטיות",
            successText: "קיבלנו! נחזור אליכם הכי מהר שאנחנו יכולים."
        },
        footer: {
            rights: "כל הזכויות שמורות ל-STONIX",
            privacy: "מדיניות פרטיות",
            terms: "תנאי שימוש"
        }
    },
    en: {
        nav: { services: "Services", results: "Results", testimonials: "Clients", contact: "Contact", call: "Free Strategy Call" },
        hero: {
            pulse: "Next-Gen Performance Marketing",
            title1: "Outcomes.",
            title2: "Not Just Marketing.",
            subtitle: "We create digital growth engines that work for you – with data-driven strategies, precise creative, and campaign management that delivers results.",
            ctaPrimary: "Free Strategy Call",
            ctaSecondary: "View Results",
            badges: ["5+ Years Experience", "2,200+ Leads Generated", "No Commitment"],
            stats: [
                { val: "2,209", label: "Facebook Leads" },
                { val: "₪24.85", label: "Avg Cost Per Lead" },
                { val: "118", label: "Course Cart Adds" },
                { val: "4.8x", label: "Average ROAS" },
            ],
            dashboard: {
                domain: "app.stonix.agency",
                kpi1: "Avg ROAS",
                kpi2: "Cost Per Lead",
                kpi3: "New Leads",
                chartTitle: "Monthly Revenue",
                chartGrowth: "+147% YoY",
                activityTitle: "Recent Activity",
                act1: "Meta Campaign – Leads",
                act1val: "+23 Leads",
                act1time: "2 mins ago",
                act2: "Google Search – Sale",
                act2val: "New Deal Closed",
                act2time: "8 mins ago"
            },
            clientsLabel: "Trusted by top brands"
        },
        about: {
            subtitle: "Who Are We?",
            title1: "Growth Engine",
            title2: "For Your Business.",
            p1: "At STONIX, we specialize in building marketing strategies that generate real results for businesses.",
            p2: "More leads, more clients, more revenue - through precise, smart, and data-driven execution. We guide businesses across all sectors through a structured process of building a strong digital presence: from defining the message and branding, to creating precise content, to managing paid campaigns that bring high-quality, converting traffic.",
            p3: "Our work methodology combines creative, strategy, and continuous data analysis - ensuring every action serves a clear business goal. We maintain full transparency, continuous tracking, and constant improvement.",
            p4: "Our goal is simple: To help businesses transform their digital presence into a true growth engine."
        },
        services: {
            preTitle: "Our Expertise",
            title1: "A Marketing Wrapper",
            title2: "That Works For You.",
            desc: "Every service is built around one single metric: measurable results. We don't rely on gut feelings. We rely on data insights.",
            cta: "Get a Custom Proposal",
            list: [
                {
                    id: "paid",
                    title: "Paid Advertising",
                    subtitle: "Meta · Google · TikTok",
                    desc: "Precise campaigns that deliver high-quality leads and paying customers. Full management, daily optimization, and transparent reporting.",
                    perks: ["Smart Budgeting", "Precise Targeting", "Continuous A/B Testing"],
                    mockMetric: "4.8x ROAS"
                },
                {
                    id: "cro",
                    title: "CRO & Optimization",
                    subtitle: "Landing Pages · Funnels",
                    desc: "We turn clicks into revenue. In-depth funnel analysis, building high-converting landing pages, and ongoing split testing.",
                    perks: ["User Behavior Analysis", "A/B Testing", "Conversion Lift"],
                    mockMetric: "3.2x Conv."
                },
                {
                    id: "creative",
                    title: "Creative Studio",
                    subtitle: "Ads · Videos · Copy",
                    desc: "Outdoor shoots, video editing, copywriting, and script writing that make your target audience choose you over your competition.",
                    perks: ["Shooting & Prod.", "Video Editing", "Winning Copy"],
                    mockMetric: "-38% CPM"
                },
                {
                    id: "strategy",
                    title: "Consulting & Strategy",
                    subtitle: "Strategy · Growth · Data",
                    desc: "STONIX was established to stop calling it just marketing. We build proven strategies that connect visibility, trust, and sales.",
                    perks: ["Business Mapping", "Smart Strategy", "Data Control"],
                    mockMetric: "+148% Growth"
                }
            ]
        },
        testimonials: {
            preTitle: "Client Reviews",
            title1: "They said it,",
            title2: "not us.",
            reviews: [
                {
                    name: "Shiran A.",
                    role: "CEO, Fashion Brand",
                    text: "Linoar, you were wonderful! You are truly a ray of sun for our business. The service, energy, and campaign results were beyond expectations. Thank you for the close support and amazing outcomes."
                },
                {
                    name: "Roy B.",
                    role: "Founder, Real Estate Agency",
                    text: "Such an enjoyable and professional experience. It was fun working with you and the results spoke for themselves – the lead volume increased significantly and the quality improved tremendously. Highly recommended!"
                },
                {
                    name: "Michael G.",
                    role: "Owner, Clinic Network",
                    text: "Finally, an agency that focuses on outcomes rather than just talk. Our ROAS spiked to 4.8x within two months of working together. A team of true professionals."
                }
            ]
        },
        pricing: {
            preTitle: "Pricing & Transparency",
            title1: "Choose the Path",
            title2: "That Fits You.",
            subtitle: "No hidden fees, no surprise pricing. Just clear value for every dollar.",
            popularLabel: "Most Popular",
            plans: [
                {
                    name: "Starter",
                    nameDisplay: "Starter",
                    desc: "For businesses starting out and needing a strong foundation",
                    price: "$950",
                    period: "/ month",
                    cta: "Min Commitment",
                    perks: [
                        "Single-platform ad management",
                        "Up to $5K media spend",
                        "Monthly report",
                        "WhatsApp support"
                    ]
                },
                {
                    name: "Growth",
                    nameDisplay: "Growth",
                    desc: "For growing businesses wanting to play in a different league",
                    price: "$1,950",
                    period: "/ month",
                    cta: "Most Popular",
                    perks: [
                        "Full management – Meta + Google",
                        "Up to $15K media spend",
                        "Basic CRO + A/B Testing",
                        "Creative – 8 campaigns",
                        "Weekly reporting + BI Dashboard",
                        "Dedicated account manager"
                    ]
                },
                {
                    name: "Scale",
                    nameDisplay: "Scale",
                    desc: "For companies ready to push everything to the max",
                    price: "Custom",
                    period: "",
                    cta: "Let's Talk Business",
                    perks: [
                        "Complete marketing strategy",
                        "Unlimited budget",
                        "Advanced CRO + Full Funnel",
                        "Unlimited creative",
                        "Daily reporting + Slack channel",
                        "C-level strategic support"
                    ]
                }
            ]
        },
        methodology: {
            preTitle: "Our Methodology",
            title1: "How We Work - ",
            title2: "How Results Arrive.",
            desc: "No guessing. Just processes. For us, success is measured by one thing: is your business growing.",
            steps: [
                { num: '01', title: 'Business Mapping', desc: 'Goal definition and precise competitor research' },
                { num: '02', title: 'Marketing System', desc: 'Building funnels, landing pages, and conversion infrastructure' },
                { num: '03', title: 'Execution', desc: 'Creative, campaigns, and launching the advertising array' },
                { num: '04', title: 'Measure & Scale', desc: 'Analysis, refinements, and budget scaling optimization' }
            ]
        },
        results: {
            preTitle: "Proof of Work",
            title1: "Let The Results",
            title2: "Speak For Themselves.",
            desc: "Measurable outcomes from campaign strategies that drive actual business growth.",
            btn: "Want Similar Results?",
            challengeLabel: "The Challenge",
            resultLabel: "The Result",
            cases: [
                {
                    industry: "E-commerce",
                    client: "Fashion & Beauty Brand",
                    challenge: "Increasing digital course sales and lowering CAC.",
                    result: "Generated 118 cart adds at only ₪32 per add.",
                    metrics: [
                        { label: "Cart Adds", val: "118" },
                        { label: "Cost Per Add", val: "₪32" },
                        { label: "ROAS", val: "4.8x" },
                        { label: "Improvement", val: "+140%" }
                    ]
                },
                {
                    industry: "Real Estate",
                    client: "Leading Property Agency",
                    challenge: "Generating high-quality leads for a luxury project.",
                    result: "Produced 2,209 quality Facebook leads at ₪24.85 per lead.",
                    metrics: [
                        { label: "Leads", val: "2,209" },
                        { label: "Cost Per Lead", val: "₪24.85" },
                        { label: "Lead Quality", val: "94%" },
                        { label: "Conv. Rate", val: "12%" }
                    ]
                }
            ]
        },
        bento: {
            left: {
                title1: "Let the Results",
                title2: "Speak for Themselves",
                campaignSlot: "Top Campaign",
                revenue: "$82K Revenue",
                roas: "Peak ROAS",
                performance: "Performance"
            },
            right: {
                title1: "Reach Your Goals",
                title2: "at Maximum Velocity",
                roasLabel: "ROAS"
            }
        },
        finalCTA: {
            preTitle: "Let's Talk",
            title1: "Ready to",
            title2: "Break Records?",
            cta: "Book Strategy Call",
            benefits: [
                "Precision-targeted, data-driven campaigns",
                "Real-time performance tracking & reporting",
                "Transparent, dedicated account management"
            ],
            mock: {
                title: "Strategy Session",
                subtitle: "Free discovery call. No commitment.",
                email: "Email address...",
                website: "Company website...",
                tomorrow: "Tomorrow",
                time: "10:00 AM"
            }
        },
        contact: {
            preTitle: "Contact Us",
            title1: "Ready To Grow?",
            title2: "Let's Talk.",
            addressTitle: "Address",
            addressValue: "HaHistadrut 236, Haifa",
            phoneTitle: "Phone",
            phoneValue: "055-2664456",
            emailTitle: "Email",
            emailValue: "a.s.mediagroup2023@gmail.com",
            formName: "Full Name",
            formPhone: "Phone Number",
            formBusiness: "Business Name",
            formEmail: "Email Address",
            formSubmit: "Send Details",
            agreed: "I agree to receive marketing offers and accept the privacy policy",
            successText: "Received! We will get back to you as soon as possible."
        },
        footer: {
            rights: "All rights reserved to STONIX",
            privacy: "Privacy Policy",
            terms: "Terms of Use"
        }
    }
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale): DictItem {
    return dictionaries[locale];
}
