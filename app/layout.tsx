import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "STONIX | תוצאות. לא רק שיווק.",
  description: "STONIX – סוכנות שיווק ביצועים מובילה. קידום ממומן, קריאייטיב, CRO ואוטומציה. תוצאות מדידות ואמיתיות לכל גודל עסק.",
  keywords: "שיווק דיגיטלי, קידום ממומן, פייסבוק, גוגל, CRO, STONIX",
  openGraph: {
    title: "STONIX | תוצאות. לא רק שיווק.",
    description: "סוכנות שיווק ביצועים – נייצר לכם צמיחה אמיתית",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ background: "#05060A", color: "#F8FAFC", fontFamily: "'Heebo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
