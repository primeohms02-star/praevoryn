import Image from "next/image";
import type { Metadata } from "next";

import SiteNavigation from "../components/SiteNavigation";

const founderUrl = "https://www.praevoryn.com/founder";

export const metadata: Metadata = {
  title: "Chukwudumebi Orakwue, Founder and CEO",
  description:
    "Meet Chukwudumebi Orakwue, founder and CEO of Praevoryn and founder of ASCEND.",
  alternates: { canonical: "/founder" },
  openGraph: {
    type: "profile",
    url: founderUrl,
    title: "Chukwudumebi Orakwue | Founder and CEO of Praevoryn",
    description:
      "The founder of Praevoryn and ASCEND is building human-centred technology for clarity, opportunity and progress.",
    images: [
      {
        url: "/chukwudumebi-orakwue.jpg",
        alt: "Chukwudumebi Orakwue, founder and CEO of Praevoryn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwudumebi Orakwue | Founder and CEO of Praevoryn",
    description: "Founder of Praevoryn and ASCEND.",
    images: ["/chukwudumebi-orakwue.jpg"],
  },
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${founderUrl}#person`,
  name: "Chukwudumebi Orakwue",
  url: founderUrl,
  image: "https://www.praevoryn.com/chukwudumebi-orakwue.jpg",
  jobTitle: "Founder and CEO",
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.praevoryn.com/#organization",
    name: "Praevoryn",
  },
  knowsAbout: ["Praevoryn", "ASCEND", "human-centred technology"],
  sameAs: [
    "https://www.linkedin.com/in/chukwudumebi-orakwue-198230419",
  ],
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h13M14 7l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function FounderPage() {
  return (
    <main className="inner-page founder-page">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <SiteNavigation activePage="founder" />

      <section className="founder-hero shell">
        <div className="founder-portrait">
          <Image
            alt="Chukwudumebi Orakwue, Founder and CEO of Praevoryn"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 46vw"
            src="/chukwudumebi-orakwue.jpg"
          />

          <div className="founder-image-label">
            <span>FOUNDER / 01</span>
            <span>PRAEVORYN</span>
          </div>
        </div>

        <div className="founder-introduction">
          <p className="eyebrow">
            <span />
            Founder and CEO
          </p>

          <h1>
            Chukwudumebi
            <br />
            <em>Orakwue.</em>
          </h1>

          <p className="founder-lead">
            Building technology that gives people the clarity, direction and
            opportunity to move forward.
          </p>

          <a
            className="founder-linkedin"
            href="https://www.linkedin.com/in/chukwudumebi-orakwue-198230419"
            rel="noreferrer"
            target="_blank"
          >
            Connect on LinkedIn
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="founder-story shell">
        <p className="section-label section-label-light">
          01 — The conviction
        </p>

        <div className="founder-story-grid">
          <h2>
            Direction can change
            <br />
            the course of a life.
          </h2>

          <div>
            <p>
              Praevoryn began with a personal conviction shaped by experience.
              While moving through university, Chukwudumebi saw how easily
              capable people could make costly decisions when they lacked
              guidance, clarity and access to the right opportunities.
            </p>

            <p>
              That experience became the foundation for ASCEND, which
              Chukwudumebi founded as Praevoryn&apos;s flagship platform. The
              system helps people understand where they are, decide where they
              are going and build structured progress toward that future.
            </p>

            <p>
              Praevoryn carries that belief further. It exists to build
              intelligent systems that strengthen human agency and create
              meaningful progress across different areas of life.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-belief shell">
        <p>THE FOUNDER&apos;S BELIEF</p>

        <blockquote>
          “The most powerful technology does not replace human potential. It
          helps people recognise it, direct it and build upon it.”
        </blockquote>
      </section>

      <footer className="inner-footer shell">
        <p>© 2026 Praevoryn</p>

        <div>
          <a
            href="https://x.com/praevoryn"
            rel="noreferrer"
            target="_blank"
          >
            X
          </a>

          <a
            href="https://www.instagram.com/praevoryn"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>

              <a
                href="https://www.linkedin.com/company/praevoryn/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
        </div>
      </footer>
    </main>
  );
}
