import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SERVICES_DATA, CLINIC_INFO } from "@/data/clinicData";
import ServiceCard from "@/components/site/service-card";
import { buildPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Dental Services & Treatments in Akure | Kristal Dentale Clinic",
  description:
    "Explore dental treatments at Kristal Dentale Clinic in Oke Aro, Akure: Orthodontics, bridges, crowns, veneers, teeth whitening, implants, fillings and cleanings.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Dental Services", path: "/services" },
  ]);

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dental Services at Kristal Dentale Clinic",
    description: "Professional dental care services provided in Oke Aro, Akure, Ondo State.",
    itemListElement: SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
      description: service.shortDescription,
    })),
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
          __html: JSON.stringify(serviceListSchema),
        }}
      />
      
      {/* Breadcrumb & Hero Header (Terra Academy Inspired) */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#EEF6FC]/60 via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#1765A8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#E83A9B]">Services</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFF1F8] border border-[#E83A9B]/20 px-3.5 py-1.5 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-[#E83A9B]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#E83A9B]">
                OUR DENTAL SERVICES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0B1730] tracking-tight leading-[1.08]">
              Dental Services For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1765A8] to-[#E83A9B]">
                Healthier, Confident Smiles
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              From routine preventive care to orthodontic, restorative and cosmetic treatments, Kristal Dentale Clinic provides a range of dental services for children and adults in Akure.
            </p>
          </div>

          {/* Quick Category Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#E8EDF3]">
            <div className="p-3.5 rounded-xl bg-white border border-[#E8EDF3]">
              <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Orthodontics</span>
              <span className="text-sm font-extrabold text-[#0B1730]">Alignment &amp; Bite Care</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E8EDF3]">
              <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Restorative</span>
              <span className="text-sm font-extrabold text-[#0B1730]">Bridges, Crowns &amp; Fillings</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E8EDF3]">
              <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Cosmetics</span>
              <span className="text-sm font-extrabold text-[#0B1730]">Whitening &amp; Veneers</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E8EDF3]">
              <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Preventive</span>
              <span className="text-sm font-extrabold text-[#0B1730]">Scaling &amp; Oral Hygiene</span>
            </div>
          </div>

        </div>
      </section>

      {/* 9 Services in Photographic Grid */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="relative py-20 bg-[#07152F] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E83A9B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1765A8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold !text-white tracking-tight">
            Ready To Take Care Of Your Smile?
          </h2>
          
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Book a consultation with Kristal Dentale Clinic and let our team help you understand the right next step for your dental care.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#appointment"
              className="btn-primary"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white hover:!text-[#07152F]"
            >
              <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
