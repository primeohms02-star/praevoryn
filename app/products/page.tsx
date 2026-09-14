import Image from "next/image";
import type { Metadata } from "next";

import SiteNavigation from "../components/SiteNavigation";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ASCEND, Praevoryn's flagship product: an operating system that helps people find direction, opportunities and measurable progress.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: "https://www.praevoryn.com/products",
    title: "Products | Praevoryn",
    description:
      "Praevoryn builds human-centred intelligent systems. Its flagship product is ASCEND, an operating system for human potential.",
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
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
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

        <div className="future-products">
          <article>
            <span>02</span>
            <p>FUTURE SYSTEM</p>
            <h3>What comes next is still being built.</h3>
          </article>

          <article>
            <span>03</span>
            <p>FUTURE SYSTEM</p>
            <h3>New possibilities will join the portfolio.</h3>
          </article>
        </div>
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
        </div>
      </footer>
    </main>
  );
}
