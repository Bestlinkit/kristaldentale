import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import WhatsAppButton from "@/components/site/whatsapp-button";
import SmoothScroll from "@/components/SmoothScroll";
import { CLINIC_SEO_DATA, SITE_URL, generateDentistJsonLd } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kristal Dentale Clinic | Dentist in Akure, Ondo State",
    template: "%s | Kristal Dentale Clinic",
  },
  description:
    "Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, including orthodontics, dental bridges, crowns, veneers, whitening, implants, fillings and routine dental care.",
  keywords: [
    "Dental clinic in Akure",
    "Dentist in Akure",
    "Dental care in Akure",
    "Orthodontics in Akure",
    "Teeth whitening in Akure",
    "Dental implants Akure",
    "Kristal Dentale Clinic",
    "Dental crowns Akure",
    "Dentist in Oke Aro",
    "Dental clinic Ondo State",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/icon.png" }],
    shortcut: ["/favicon.png"],
  },
  authors: [{ name: "Kristal Dentale Clinic" }],
  verification: {
    google: "DmzNUVieDkrcHVJsu4Q2FwQKeEfBSQ2r2jpf-pJ1wXM",
  },
  openGraph: {
    title: "Kristal Dentale Clinic | Dentist in Akure, Ondo State",
    description:
      "Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, including orthodontics, dental bridges, crowns, veneers, whitening, implants, fillings and routine dental care.",
    url: SITE_URL,
    siteName: "Kristal Dentale Clinic",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/kristal-logo-official.png",
        width: 860,
        height: 272,
        alt: "Kristal Dentale Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristal Dentale Clinic | Dentist in Akure, Ondo State",
    description:
      "Professional dental care in Oke Aro, Akure, including orthodontics, dental bridges, veneers, whitening and comprehensive dental care.",
    images: ["/images/kristal-logo-official.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentistSchema = generateDentistJsonLd();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: CLINIC_SEO_DATA.name,
    description: CLINIC_SEO_DATA.description,
    publisher: {
      "@id": `${SITE_URL}/#clinic`,
    },
    inLanguage: "en-NG",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="DmzNUVieDkrcHVJsu4Q2FwQKeEfBSQ2r2jpf-pJ1wXM"
        />
        <link rel="author" href="https://bestlinkdigitaltech.online" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0B1730] antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>

        {/* Global Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentistSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
