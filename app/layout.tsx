import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "STONIX | Outcomes. Not Just Marketing.",
  description: "Performance marketing, creative, and CRO for brands ready to scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased bg-ember-bg text-ember-text">
        {children}
      </body>
    </html>
  );
}
