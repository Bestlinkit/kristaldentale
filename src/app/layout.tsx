import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import WhatsAppButton from "@/components/site/whatsapp-button";
import SmoothScroll from "@/components/SmoothScroll";
import { CLINIC_INFO } from "@/data/clinicData";

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
  metadataBase: new URL("https://kristaldentaleclinic.com.ng"),
  title: "Kristal Dentale Clinic | Dental Care in Akure, Ondo State",
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
    "Dental clinic Ondo State"
  ],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [{ url: "/icon.png" }],
    shortcut: ["/favicon.png"]
  },
  authors: [{ name: "Kristal Dentale Clinic" }],
  verification: {
    google: "DmzNUVieDkrcHVJsu4Q2FwQKeEfBSQ2r2jpf-pJ1wXM"
  },
  openGraph: {
    title: "Kristal Dentale Clinic | Dental Care in Akure, Ondo State",
    description:
      "Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, including orthodontics, dental bridges, crowns, veneers, whitening, implants, fillings and routine dental care.",
    url: "https://kristaldentaleclinic.com.ng",
    siteName: "Kristal Dentale Clinic",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/kristal-logo-clean.png",
        width: 600,
        height: 600,
        alt: "Kristal Dentale Clinic Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristal Dentale Clinic | Dental Care in Akure, Ondo State",
    description:
      "Professional dental care in Oke Aro, Akure, including orthodontics, dental bridges, veneers, whitening and comprehensive dental care.",
    images: ["/images/kristal-logo-clean.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0B1730] antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>

        {/* LocalBusiness / Dentist Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: CLINIC_INFO.name,
              telephone: "+2348134280545",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "116 Idanre Road, Beside Idanre Garage Shopping Complex (Robino Global)",
                addressLocality: "Oke Aro, Akure",
                addressRegion: "Ondo State",
                addressCountry: "Nigeria"
              },
              url: "https://kristaldentaleclinic.com.ng",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  opens: "08:30",
                  closes: "17:30"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
