import React from "react";
import type { Metadata } from "next";
import PortfolioView from "@/components/site/portfolio-view";
import { buildPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Work & Clinical Cases | Kristal Dentale Clinic Akure",
  description:
    "View selected clinical photographs, orthodontic alignment cases, dental bridges, and practice videos from Kristal Dentale Clinic in Oke Aro, Akure.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/portfolio" },
  ]);

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/portfolio#webpage`,
    url: `${SITE_URL}/portfolio`,
    name: "Our Work & Clinical Cases | Kristal Dentale Clinic Akure",
    description:
      "Selected clinical photographs and dental treatment cases from Kristal Dentale Clinic in Oke Aro, Akure, Ondo State.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#clinic`,
    },
    inLanguage: "en-NG",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <PortfolioView />
    </>
  );
}
