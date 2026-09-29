import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, MapPin, ExternalLink } from "lucide-react";
import { IoLogoWhatsapp, IoLogoTiktok } from "react-icons/io5";
import { CLINIC_INFO } from "@/data/clinicData";
import AppointmentForm from "@/components/site/appointment-form";
import { buildPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book Dental Appointment in Akure | Kristal Dentale Clinic",
  description:
    "Contact Kristal Dentale Clinic at 116 Idanre Road, Oke Aro, Akure. Phone: 0813 428 0545. WhatsApp: +234 813 428 0545. Request your dental appointment online.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact & Appointments", path: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Book Dental Appointment in Akure | Kristal Dentale Clinic",
    description:
      "Contact Kristal Dentale Clinic in Oke Aro, Akure. Phone: 0813 428 0545. WhatsApp: +234 813 428 0545. Request your dental appointment online.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#clinic`,
    },
    inLanguage: "en-NG",
  };

  return (
    <div className="bg-[#FFFFFF] text-[#0B1730]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      
      {/* 1. Header with Breadcrumb */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#EEF6FC]/60 to-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#1765A8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#E83A9B]">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFF1F8] border border-[#E83A9B]/20 px-3.5 py-1.5 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-[#E83A9B]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#E83A9B]">
                CONTACT KRISTAL DENTALE CLINIC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0B1730] tracking-tight leading-[1.08]">
              Book Your Dental Appointment
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Have a dental concern or ready to schedule a consultation? Contact Kristal Dentale Clinic by phone, WhatsApp or using the appointment form below.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Contact & Form Section */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block mb-2">
                  CONTACT INFORMATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] tracking-tight">
                  Kristal Dentale Clinic
                </h2>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Professional dental care in Oke Aro, Akure, Ondo State.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#EEF6FC]/60 border border-[#E8EDF3] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1765A8] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      Location
                    </h3>
                    <p className="text-sm font-semibold text-[#0B1730] mt-1 leading-relaxed">
                      116 Idanre Road,<br />
                      Beside Idanre Garage Shopping Complex (Robino Global),<br />
                      Oke Aro, Akure, Ondo State, Nigeria.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-[#FFF1F8]/50 border border-[#E8EDF3] space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E83A9B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      Phone
                    </h3>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-base font-bold text-[#0B1730] hover:text-[#E83A9B] transition-colors mt-0.5 block"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E8EDF3]">
                  <IoLogoWhatsapp className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      WhatsApp Direct
                    </h3>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors mt-0.5 block"
                    >
                      +234 813 428 0545
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E8EDF3]">
                  <IoLogoTiktok className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                      TikTok
                    </h3>
                    <a
                      href="https://www.tiktok.com/@kristaldentaleclinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#0B1730] hover:text-[#E83A9B] transition-colors mt-0.5 inline-flex items-center gap-1.5"
                    >
                      <span>@kristaldentaleclinic</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8EDF3] space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                  Opening Hours
                </h3>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between font-medium">
                    <span className="text-[#0B1730]">Monday – Friday</span>
                    <span className="text-[#64748B]">8:30 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-[#0B1730]">Saturday</span>
                    <span className="text-[#64748B]">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-[#0B1730]">Sunday</span>
                    <span className="text-[#E83A9B] font-bold">Closed / Emergencies</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Appointment Request Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
