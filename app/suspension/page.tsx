import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Suspended",
  description: "This service is currently suspended.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SuspensionPage() {
  return (
    <>
      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root ── */
        html, body {
          height: 100%;
          width: 100%;
          background: #000;
          color: #fff;
          font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
          overflow-x: hidden;
        }

        /* ── Full-screen wrapper ── */
        .suspension-root {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #000;
          gap: 0;
        }

        /* ── Main text block ── */
        .suspension-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 1.5rem;
          gap: 2rem;
          flex: 1;
        }

        /* ── Headline ── */
        .suspension-headline {
          font-size: clamp(2rem, 6vw, 5.5rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          line-height: 1.1;
          text-transform: uppercase;
          color: #fff;
          animation: pulse 2.8s ease-in-out infinite, flicker 6s step-start infinite;
          max-width: 900px;
        }

        /* ── Sub-line ── */
        .suspension-subline {
          font-size: clamp(0.95rem, 2.2vw, 1.5rem);
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          animation: fadeSlideUp 1.2s ease forwards;
          opacity: 0;
          animation-delay: 0.4s;
        }

        /* ── Separator ── */
        .suspension-divider {
          width: clamp(60px, 12vw, 120px);
          height: 3px;
          background: #fff;
          animation: expandLine 1s ease forwards;
          transform-origin: center;
          transform: scaleX(0);
          animation-delay: 0.2s;
        }

        /* ── Marquee ribbon at bottom ── */
        .marquee-track {
          width: 100%;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding: 0.75rem 0;
          background: #000;
          white-space: nowrap;
        }

        .marquee-inner {
          display: inline-flex;
          animation: marqueeScroll 18s linear infinite;
        }

        .marquee-inner span {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          padding-right: 4rem;
        }

        /* ── Animations ── */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.75; }
        }

        @keyframes flicker {
          0%   { opacity: 1; }
          92%  { opacity: 1; }
          93%  { opacity: 0.6; }
          94%  { opacity: 1; }
          96%  { opacity: 0.7; }
          97%  { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandLine {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="suspension-root">
        {/* ── Centre content ── */}
        <div className="suspension-center">
          <h1 className="suspension-headline">
            SERVICE SUSPENDED DUE TO UNPAID BALANCE
          </h1>

          <div className="suspension-divider" aria-hidden="true" />

          <p className="suspension-subline">
            Please contact the service provider to restore access.
          </p>
        </div>

        {/* ── Marquee ribbon ── */}
        <div className="marquee-track" aria-hidden="true">
          <div className="marquee-inner">
            {/* Duplicate items so the loop is seamless */}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>
                SERVICE SUSPENDED &nbsp;·&nbsp; UNPAID BALANCE &nbsp;·&nbsp; CONTACT SERVICE PROVIDER &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
