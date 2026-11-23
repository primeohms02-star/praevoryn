import Image from "next/image";
import type { Metadata } from "next";

import SiteNavigation from "../components/SiteNavigation";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ASCEND for personal growth and Vybkick for turning TikTok ideas into editable scripts.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: "https://www.praevoryn.com/products",
    title: "Products | Praevoryn",
    description:
      "Explore ASCEND and Vybkick, two products by Praevoryn.",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://ascendai.space/#software",
  name: "ASCEND",
  url: "https://ascendai.space",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "ASCEND is an operating system for human potential that helps people find direction, discover relevant opportunities and make measurable progress.",
  creator: {
    "@type": "Organization",
    "@id": "https://www.praevoryn.com/#organization",
    name: "Praevoryn",
    url: "https://www.praevoryn.com",
  },
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

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, { "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": "https://www.vybkick.com/#software", name: "Vybkick", url: "https://www.vybkick.com", operatingSystem: "Web", applicationCategory: "MultimediaApplication", creator: productSchema.creator }]).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <SiteNavigation activePage="products" />

      <header className="inner-hero shell">
        <p className="eyebrow">
          <span />
          The Praevoryn portfolio
        </p>

        <h1>
          Intelligent systems
          <br />
          <em>built for progress.</em>
        </h1>

        <p>
          Praevoryn develops focused technology platforms designed around
          meaningful human ambitions, enduring needs and measurable progress.
        </p>
      </header>

      <section className="portfolio-section shell">
        <div className="portfolio-heading">
          <p className="section-label section-label-light">
            01 — Active products
          </p>

          <p>
            Each Praevoryn product operates with its own identity and mission,
            supported by a shared commitment to human-centred intelligence.
          </p>
        </div>

        <article className="portfolio-product">
          <div className="portfolio-product-top">
            <span>01</span>
            <span>FLAGSHIP PLATFORM</span>
            <span>ACTIVE / 2026</span>
          </div>

          <div className="portfolio-product-body">
            <div className="portfolio-product-identity">
              <Image
                alt="ASCEND logo"
                height={90}
                src="/ascend-logo.png"
                width={90}
              />

              <h2>ASCEND</h2>
            </div>

            <div className="portfolio-product-copy">
              <p className="portfolio-product-kicker">
                AN OPERATING SYSTEM FOR HUMAN POTENTIAL
              </p>

              <p>
                ASCEND is Praevoryn&apos;s flagship product. It helps people
                understand where they are, choose a direction, discover
                relevant opportunities and turn their goals into measurable
                progress.
              </p>

              <a
                href="https://ascendai.space"
                rel="noreferrer"
                target="_blank"
              >
                Visit ASCEND
                <ArrowIcon />
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio-product" id="vybkick">
          <div className="portfolio-product-top"><span>02</span><span>CREATOR TOOL</span><span>CREATOR PILOT</span></div>
          <div className="portfolio-product-body">
            <div className="portfolio-product-identity" style={{ gap: "clamp(16px, 2vw, 28px)" }}>
              <span style={{ display: "block", width: "clamp(48px, 7vw, 82px)", flexShrink: 0 }}>
                <Image src="data:image/png;base64,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" alt="" width={90} height={90} style={{ display: "block", width: "100%", height: "auto" }} unoptimized />
              </span>
              <h2>VYBKICK</h2>
            </div>
            <div className="portfolio-product-copy">
              <p>Vybkick helps TikTok creators figure out what to say on camera. Bring a rough idea, choose your language, tone and video length, and Vyb suggests an opening, talking points and an ending. Pick the lines you like, make them sound like you, and save your draft for filming.</p>
              <a href="https://www.vybkick.com/">Explore Vybkick <ArrowIcon /></a>
            </div>
          </div>
        </article>
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
