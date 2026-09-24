import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import "./globals.css";

const siteUrl = "https://www.praevoryn.com";

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Praevoryn",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#logo`,
    url: `${siteUrl}/praevoryn-mark.png`,
    contentUrl: `${siteUrl}/praevoryn-mark.png`,
    width: 1024,
    height: 1024,
    caption: "Praevoryn",
  },
  image: { "@id": `${siteUrl}/#logo` },
  email: "hello@praevoryn.com",
  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/founder#person`,
    name: "Chukwudumebi Orakwue",
    jobTitle: "Founder and CEO",
    url: `${siteUrl}/founder`,
    image: `${siteUrl}/chukwudumebi-orakwue.webp`,
    description:
      "Chukwudumebi Orakwue is a technology founder, the founder and CEO of Praevoryn, and the founder and CEO of ASCEND.",
    sameAs: [
      "https://www.linkedin.com/in/chukwudumebi-orakwue-198230419",
      "https://ascendai.space/founder",
    ],
  },
  sameAs: [
    "https://x.com/praevoryn",
    "https://www.instagram.com/praevoryn",
      "https://www.linkedin.com/company/praevoryn/",
    ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiries",
    email: "hello@praevoryn.com",
    availableLanguage: "English",
  },
  knowsAbout: [
    "Human-centred technology",
    "Intelligent systems",
    "Human potential",
    "Artificial intelligence",
    "Personal development technology",
    "Opportunity discovery",
  ],
  owns: {
    "@type": "SoftwareApplication",
    "@id": "https://ascendai.space/#software",
    name: "ASCEND",
    url: "https://ascendai.space",
    description: "An operating system for human potential.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Praevoryn",
  alternateName: "praevoryn.com",
  url: siteUrl,
  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Praevoryn | Human-Centred Technology Company",
    template: "%s | Praevoryn",
  },

  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",

  applicationName: "Praevoryn",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Praevoryn",
    "human-centred technology",
    "intelligent systems",
    "technology company",
    "ASCEND",
    "human potential",
  ],

  authors: [
    {
      name: "Praevoryn",
    },
  ],

  creator: "Praevoryn",
  publisher: "Praevoryn",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Praevoryn",
    title: "Praevoryn | Human-Centred Technology Company",
    description:
      "A human-centred technology company building intelligent systems for progress.",
    images: [
      {
        url: "/praevoryn-mark.png",
        width: 1024,
        height: 1024,
        alt: "Praevoryn",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Praevoryn | Human-Centred Technology Company",
    description:
      "A human-centred technology company building intelligent systems for progress.",
    images: ["/praevoryn-mark.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ibmPlexMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organisationSchema, websiteSchema]).replace(
              /</g,
              "\\u003c",
            ),
          }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
