"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteNavigationProps = {
  activePage?: "home" | "products" | "founder";
};

function CloseIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 8h14M5 16h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

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

export default function SiteNavigation({
  activePage = "home",
}: SiteNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav aria-label="Primary navigation" className="site-navigation shell">
        <Link
          aria-label="Praevoryn home"
          className="wordmark"
          href="/"
          onClick={closeMenu}
        >
          <span
            aria-hidden="true"
            className="brand-mark brand-mark-light"
          >
            <Image
              alt=""
              height={64}
              priority
              src="/praevoryn-mark.png"
              width={64}
            />
          </span>

          <span>PRAEVORYN</span>
        </Link>

        <div className="desktop-navigation-links">
          <Link href="/#about">About</Link>

          <Link
            className={
              activePage === "products" ? "active-nav-link" : undefined
            }
            href="/products"
          >
            Products
          </Link>

          <Link href="/#principles">Principles</Link>

          <Link
            className={
              activePage === "founder" ? "active-nav-link" : undefined
            }
            href="/founder"
          >
            Founder
          </Link>
        </div>

        <Link className="desktop-contact-link" href="/#contact">
          Contact
          <ArrowIcon />
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="mobile-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <div className="mobile-menu-content shell">
            <p className="mobile-menu-label">NAVIGATION</p>

            <div className="mobile-menu-links">
              <Link href="/" onClick={closeMenu}>
                <span>01</span>
                Home
              </Link>

              <Link href="/#about" onClick={closeMenu}>
                <span>02</span>
                About
              </Link>

              <Link href="/products" onClick={closeMenu}>
                <span>03</span>
                Products
              </Link>

              <Link href="/#principles" onClick={closeMenu}>
                <span>04</span>
                Principles
              </Link>

              <Link href="/founder" onClick={closeMenu}>
                <span>05</span>
                Founder
              </Link>

              <Link href="/#contact" onClick={closeMenu}>
                <span>06</span>
                Contact
              </Link>
            </div>

            <div className="mobile-menu-footer">
              <p>FOLLOW PRAEVORYN</p>

              <div>
                <a
                  href="https://x.com/praevoryn"
                  onClick={closeMenu}
                  rel="noreferrer"
                  target="_blank"
                >
                  X / Twitter
                </a>

                <a
                  href="https://www.instagram.com/praevoryn?igsi=MXU4MWc4dDB0cWQ2Yg=="
                  onClick={closeMenu}
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}