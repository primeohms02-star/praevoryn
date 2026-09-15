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
  logo: `${siteUrl}/praevoryn-mark.png`,
  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/founder#person`,
    name: "Chukwudumebi Orakwue",
    jobTitle: "Founder and CEO",
    url: `${siteUrl}/founder`,
  },
  sameAs: [
    "https://x.com/praevoryn",
    "https://www.instagram.com/praevoryn",
      "https://www.linkedin.com/company/praevoryn/",
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
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
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
