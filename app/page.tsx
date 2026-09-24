import Image from "next/image";
import Link from "next/link";

import SiteNavigation from "./components/SiteNavigation";

const siteUrl = "https://www.praevoryn.com";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Praevoryn — Building what comes next",
  headline: "Praevoryn builds human-centred technology for progress",
  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  mainEntity: { "@id": `${siteUrl}/#organization` },
  primaryImageOfPage: { "@id": `${siteUrl}/#logo` },
  inLanguage: "en",
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

function PraevorynMark({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`brand-mark ${light ? "brand-mark-light" : ""}`}
    >
      <Image
        alt=""
        height={64}
        priority
        src="/praevoryn-mark.png"
        width={64}
      />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />

      <section className="hero" id="top">
        <SiteNavigation activePage="home" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-glow" />

        <div aria-hidden="true" className="hero-animated-mark">
          <div className="hero-mark-halo" />

          <Image
            alt=""
            height={700}
            priority
            src="/praevoryn-mark.png"
            width={700}
          />
        </div>

        <div className="hero-content shell">
          <p className="eyebrow">
            <span />
            Praevoryn / Human-centred technology
          </p>

          <h1>
            Building what
            <br />
            <em>comes next.</em>
          </h1>

          <p className="hero-copy">
            Praevoryn builds intelligent systems that help people move
            forward—with greater clarity, capability and agency.
          </p>

          <a className="primary-link" href="#about">
            Discover Praevoryn
            <ArrowIcon />
          </a>
        </div>

        <div className="hero-footer shell">
          <span>01 / PRAEVORYN</span>
          <span>SCROLL TO EXPLORE —</span>
        </div>
      </section>

      <section className="manifesto section shell" id="about">
        <p className="section-label">01 — Our purpose</p>

        <div className="two-column">
          <h2>
            Technology should expand
            <br />
            what people can become.
          </h2>

          <div className="body-copy">
            <p>
              We believe progress is meaningful when it strengthens human
              potential. That belief shapes what we build, how we build it and
              who we build it for.
            </p>

            <p>
              Praevoryn is a human-centred technology company and the company
              behind ASCEND. We create enduring intelligent systems around
              real human ambitions—not technology for its own sake.
            </p>
          </div>
        </div>

        <div className="positioning-statement">
          <span>OUR POSITIONING</span>

          <p>
            A human-centred technology company
            <br />
            building intelligent systems for progress.
          </p>

          <PraevorynMark />
        </div>
      </section>

      <section className="systems" id="systems">
        <div className="section shell">
          <p className="section-label section-label-light">
            02 — Our products
          </p>

          <div className="systems-heading">
            <h2>
              One company.
              <br />
              <em>Expanding possibility.</em>
            </h2>

            <p>
              We develop focused platforms with the ambition and architecture
              to create meaningful progress at scale.
            </p>
          </div>

          <article className="ascend-card">
            <div className="ascend-meta">
              <span>FLAGSHIP PLATFORM</span>
              <span>ACTIVE / 2026</span>
            </div>

            <div className="ascend-body">
              <div className="ascend-name">
                <div className="ascend-logo-container">
                  <Image
                    alt="ASCEND logo"
                    height={110}
                    src="/ascend-logo.png"
                    width={110}
                  />
                </div>

                <h3>ASCEND</h3>
              </div>

              <div className="ascend-copy">
                <p className="ascend-kicker">
                  AN OPERATING SYSTEM FOR HUMAN POTENTIAL
                </p>

                <p>
                  ASCEND is Praevoryn&apos;s flagship product. It helps people
                  discover their direction, find relevant opportunities and
                  turn ambition into structured, measurable progress.
                </p>

                <a
                  href="https://ascendai.space"
                  rel="noreferrer"
                  target="_blank"
                >
                  Explore ASCEND
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="ascend-progress">
              <span />
            </div>
          </article>

          <div className="products-page-link">
            <Link href="/products">
              View the Praevoryn portfolio
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="principles section shell" id="principles">
        <p className="section-label">03 — How we build</p>

        <div className="principles-heading">
          <h2>Principles before products.</h2>

          <p>
            Every system we build is measured against the same enduring
            commitments.
          </p>
        </div>

        <div className="principles-list">
          <article>
            <span>01</span>
            <h3>Human at the centre</h3>
            <p>
              Technology begins with human needs, realities and potential.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Intelligence with purpose</h3>
            <p>
              Intelligence is valuable when it produces clarity, agency and
              progress.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Built to endure</h3>
            <p>
              We favour considered systems over fleeting features and
              short-term noise.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Progress for more people</h3>
            <p>
              We design for access, relevance and meaningful impact across
              borders.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner shell">
          <p className="section-label section-label-light">
            04 — What comes next
          </p>

          <div className="footer-call-to-action">
            <h2>
              Let&apos;s build what
              <br />
              <em>comes next.</em>
            </h2>

            <a href="mailto:hello@praevoryn.com">
              Start a conversation
              <ArrowIcon />
            </a>
          </div>

          <div className="footer-navigation">
            <div>
              <p>COMPANY</p>
              <Link href="/founder">Founder</Link>
              <Link href="/products">Products</Link>
            </div>

            <div>
              <p>SOCIAL</p>

              <a
                href="https://x.com/praevoryn"
                rel="noreferrer"
                target="_blank"
              >
                X / Twitter
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
          </div>

          <div className="footer-bottom">
            <Link className="wordmark" href="/">
              <PraevorynMark light />
              <span>PRAEVORYN</span>
            </Link>

            <p>
              © 2026 Praevoryn. Building intelligent systems for progress.
            </p>

            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
