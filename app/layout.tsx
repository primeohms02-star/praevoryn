import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import "./globals.css";

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
  metadataBase: new URL("https://praevoryn.com"),

  title: {
    default: "Praevoryn | Building What Comes Next",
    template: "%s | Praevoryn",
  },

  description:
    "Praevoryn is a human-centred technology company building intelligent systems for progress.",

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
    url: "https://praevoryn.com",
    siteName: "Praevoryn",
    title: "Praevoryn | Building What Comes Next",
    description:
      "A human-centred technology company building intelligent systems for progress.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Praevoryn | Building What Comes Next",
    description:
      "A human-centred technology company building intelligent systems for progress.",
  },

  icons: {
    icon: "/praevoryn-mark.png",
    shortcut: "/praevoryn-mark.png",
    apple: "/praevoryn-mark.png",
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
        {children}
      </body>
    </html>
  );
}