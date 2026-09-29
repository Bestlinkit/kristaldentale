import { Metadata } from "next";

export const SITE_URL = "https://kristaldentaleclinic.com.ng";

export const CLINIC_SEO_DATA = {
  name: "Kristal Dentale Clinic",
  legalName: "Kristal Dentale Clinic",
  alternateName: "Kristal Dental Clinic Akure",
  description:
    "Kristal Dentale Clinic provides professional, patient-focused dental care in Oke Aro, Akure, Ondo State. Services include orthodontics, crowns, bridges, veneers, teeth whitening, implants, extractions, fillings, and preventive care.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/kristal-logo-official.png`,
  image: `${SITE_URL}/images/kristal-logo-clean.png`,
  telephone: "+2348134280545",
  phoneDisplay: "0813 428 0545",
  email: "admin@kristaldentaleclinic.com.ng",
  address: {
    streetAddress: "116 Idanre Road, Beside Idanre Garage Shopping Complex (Robino Global)",
    addressLocality: "Oke Aro",
    addressRegion: "Ondo State",
    addressCountry: "Nigeria",
  },
  geo: {
    latitude: "7.2346",
    longitude: "5.1931",
  },
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  leadClinician: {
    name: "Dr. Olupona",
    jobTitle: "Lead Clinician & Practice Director",
  },
  sameAs: [
    "https://www.tiktok.com/@kristaldentaleclinic",
  ],
  areaServed: [
    "Akure",
    "Oke Aro",
    "Ondo State",
  ],
};

/**
 * Generates standardized Next.js page metadata with canonical URLs, Open Graph, and Twitter tags
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
  const ogImage = image || `${SITE_URL}/images/kristal-logo-official.png`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: CLINIC_SEO_DATA.name,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: `${CLINIC_SEO_DATA.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Builds standard LocalBusiness / Dentist JSON-LD schema
 */
export function generateDentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#clinic`,
    name: CLINIC_SEO_DATA.name,
    alternateName: CLINIC_SEO_DATA.alternateName,
    description: CLINIC_SEO_DATA.description,
    url: SITE_URL,
    telephone: CLINIC_SEO_DATA.telephone,
    email: CLINIC_SEO_DATA.email,
    logo: CLINIC_SEO_DATA.logo,
    image: CLINIC_SEO_DATA.image,
    sameAs: CLINIC_SEO_DATA.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_SEO_DATA.address.streetAddress,
      addressLocality: CLINIC_SEO_DATA.address.addressLocality,
      addressRegion: CLINIC_SEO_DATA.address.addressRegion,
      addressCountry: CLINIC_SEO_DATA.address.addressCountry,
    },
    areaServed: CLINIC_SEO_DATA.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: CLINIC_SEO_DATA.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.dayOfWeek,
      opens: slot.opens,
      closes: slot.closes,
    })),
    employee: {
      "@type": "Person",
      name: CLINIC_SEO_DATA.leadClinician.name,
      jobTitle: CLINIC_SEO_DATA.leadClinician.jobTitle,
      worksFor: {
        "@type": "Dentist",
        name: CLINIC_SEO_DATA.name,
      },
    },
  };
}

/**
 * Builds BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const normalizedPath = item.path.startsWith("/") ? item.path : `/${item.path}`;
      const url = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: url,
      };
    }),
  };
}

/**
 * Builds Service JSON-LD schema
 */
export function generateServiceJsonLd({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined,
    provider: {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#clinic`,
      name: CLINIC_SEO_DATA.name,
      telephone: CLINIC_SEO_DATA.telephone,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Akure, Ondo State",
    },
  };
}
