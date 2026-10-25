import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/content";
// Self-hosted fonts (bundled from npm, no Google request at build or runtime).
// Each package ships latin, latin-ext and vietnamese subsets, which covers Yorùbá and Igbo dot-below letters.
import "@fontsource-variable/archivo/standard.css";
import "@fontsource-variable/archivo/standard-italic.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "More Labs · Narrative infrastructure for Africa’s next generation",
    description: SITE.description,
    url: SITE.url,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "More Labs",
    description: SITE.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  viewportFit: "cover",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: ["More Labs", "More Laboratories"],
  url: SITE.url,
  email: "hello@morelabsdigital.com",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  foundingDate: "2017",
  subOrganization: [
    { "@type": "NewsMediaOrganization", name: "MoreBranches", url: "https://morebranches.com" },
    { "@type": "Organization", name: "Broad Street" },
    { "@type": "Organization", name: "MORE100" },
    { "@type": "Organization", name: "Nawa!" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
