import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight,
  Award
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";
import AppointmentForm from "@/components/site/appointment-form";
import { buildPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Kristal Dentale Clinic | Dental Practice in Akure, Ondo State",
  description:
    "Learn about Kristal Dentale Clinic in Oke Aro, Akure, Ondo State. Meet Dr. Olupona and discover our patient-focused approach to dental care.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "About Kristal Dentale Clinic | Dental Practice in Akure, Ondo State",
    description:
      "Learn about Kristal Dentale Clinic in Oke Aro, Akure, Ondo State. Meet Dr. Olupona and discover our patient-focused approach to dental care.",
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
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="pt-12 pb-16 sm:pb-20 bg-gradient-to-b from-[#EEF6FC]/70 via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#1765A8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#E83A9B]">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FFF1F8] border border-[#E83A9B]/20 px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E83A9B]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#E83A9B]">
                ABOUT KRISTAL DENTALE CLINIC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1730] tracking-tight leading-[1.08]">
              Dental Care Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1765A8] to-[#E83A9B]">
                Around Your Needs
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
              Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, with services covering preventive, restorative, orthodontic and cosmetic dentistry.
            </p>
            <p className="mt-3 text-base text-[#64748B] leading-relaxed max-w-2xl">
              Our approach is simple: listen to the patient, explain the available options clearly and provide appropriate care in a comfortable clinical environment.
            </p>
          </div>

          {/* Quick Informational Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#E8EDF3]">
            <div className="p-4 rounded-xl bg-white border border-[#E8EDF3]/80 shadow-2xs">
              <p className="text-xl sm:text-2xl font-black text-[#1765A8]">Patient-First</p>
              <p className="text-xs font-bold text-[#64748B] mt-0.5 uppercase tracking-wide">Attentive Dental Care</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8EDF3]/80 shadow-2xs">
              <p className="text-xl sm:text-2xl font-black text-[#E83A9B]">9 Services</p>
              <p className="text-xs font-bold text-[#64748B] mt-0.5 uppercase tracking-wide">Routine &amp; Restorative</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8EDF3]/80 shadow-2xs">
              <p className="text-xl sm:text-2xl font-black text-[#0B1730]">Oke Aro</p>
              <p className="text-xs font-bold text-[#64748B] mt-0.5 uppercase tracking-wide">Akure, Ondo State</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8EDF3]/80 shadow-2xs">
              <p className="text-xl sm:text-2xl font-black text-[#25D366]">Consultation</p>
              <p className="text-xs font-bold text-[#64748B] mt-0.5 uppercase tracking-wide">In-Person &amp; WhatsApp</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          2. ABOUT THE CLINIC & DR. OLUPONA
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Clinician Photograph */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1765A8]/20 via-[#E83A9B]/15 to-transparent blur-lg -z-10" />
                
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-slate-100">
                  <Image
                    src="/images/ceo.jpg"
                    alt="Dr. Olupona - Dentist & Practice Director at Kristal Dentale Clinic"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-extrabold text-[#0B1730]">
                          Dr. Olupona
                        </p>
                        <p className="text-xs text-[#E83A9B] font-bold">
                          Dentist &amp; Practice Director
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[#FFF1F8] text-[#E83A9B] flex items-center justify-center font-bold text-xs">
                        KD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-[#07152F] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 border border-white/20">
                  <Award className="w-3.5 h-3.5 text-[#E83A9B]" />
                  <span>Dentist</span>
                </div>
              </div>
            </div>

            {/* Right: Clinician Information & About the Clinic */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B] block mb-2">
                  CLINICAL LEADERSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1730] tracking-tight leading-tight">
                  Meet Dr. Olupona
                </h2>
                <p className="text-sm font-bold text-[#1765A8] mt-1">
                  Dentist &amp; Practice Director
                </p>
              </div>

              <p className="text-base text-[#64748B] leading-relaxed">
                Dr. Olupona oversees clinical care at Kristal Dentale Clinic and is committed to providing patients with clear explanations, careful treatment and appropriate follow-up.
              </p>

              <p className="text-base text-[#64748B] leading-relaxed">
                For every consultation, the goal is to understand the patient&apos;s concerns, assess their dental needs and discuss suitable treatment options before proceeding.
              </p>

              <div className="p-6 rounded-2xl bg-[#EEF6FC]/60 border border-[#E8EDF3] space-y-2">
                <h3 className="text-sm font-bold text-[#0B1730] uppercase tracking-wider">
                  About The Clinic
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Kristal Dentale Clinic was established to provide accessible, thoughtful dental care for individuals and families in Akure and surrounding areas.
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  We understand that many people feel uncertain about visiting the dentist. That is why we focus on clear communication, careful treatment and helping patients understand what to expect at every stage of their care.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
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
                  className="btn-secondary"
                >
                  <IoLogoWhatsapp className="w-5 h-5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. CLINICAL APPROACH (LISTEN, EXPLAIN, CARE)
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#EEF6FC]/40 border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block mb-2">
              PATIENT CARE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
              Our Approach To Patient Care
            </h2>
            <p className="mt-3 text-base text-[#64748B] leading-relaxed">
              Every appointment is guided by three straightforward principles designed to make your dental care clear, respectful and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* LISTEN */}
            <div className="p-8 rounded-2xl bg-white border border-[#E8EDF3] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F8] text-[#E83A9B] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">
                LISTEN
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We take time to understand your concerns and what you want to achieve.
              </p>
            </div>

            {/* EXPLAIN */}
            <div className="p-8 rounded-2xl bg-white border border-[#E8EDF3] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FC] text-[#1765A8] flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">
                EXPLAIN
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We explain findings and available treatment options in straightforward language.
              </p>
            </div>

            {/* CARE */}
            <div className="p-8 rounded-2xl bg-white border border-[#E8EDF3] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#25D366] flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">
                CARE
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We provide appropriate treatment and guidance based on your individual dental needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          4. SERVICES RANGE OVERVIEW
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block mb-2">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight">
                Dental Care For Your Everyday Needs
              </h2>
              <p className="mt-2 text-base text-[#64748B] max-w-xl">
                We provide a range of dental treatments designed to help maintain oral health, restore damaged or missing teeth and improve the appearance of your smile.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E83A9B] hover:text-[#D22687] transition-colors"
              >
                <span>View All Dental Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-6 rounded-2xl border border-[#E8EDF3] bg-white hover:border-[#1765A8] hover:shadow-md transition-all flex items-start justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-[#64748B]/60 tracking-wider">
                    {service.number}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1730] group-hover:text-[#1765A8] transition-colors mt-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#E83A9B] group-hover:translate-x-1 transition-transform shrink-0 ml-3 mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. LOCATION & APPOINTMENT FORM
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#EEF6FC]/50 border-t border-[#E8EDF3]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E83A9B] block">
                LOCATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight">
                Visit Kristal Dentale Clinic
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                You can find us at 116 Idanre Road, beside Idanre Garage Shopping Complex (Robino Global), Oke Aro, Akure, Ondo State.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-[#E8EDF3] space-y-4 shadow-2xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1765A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">Clinic Address</h4>
                    <p className="text-sm font-semibold text-[#0B1730] mt-0.5 leading-snug">
                      116 Idanre Road, Beside Idanre Garage Shopping Complex (Robino Global), Oke Aro, Akure, Ondo State.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E83A9B] shrink-0" />
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">Telephone</h4>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-sm font-bold text-[#0B1730] hover:text-[#1765A8] transition-colors"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <IoLogoWhatsapp className="w-5 h-5 text-[#25D366] shrink-0" />
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">WhatsApp</h4>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#1765A8] hover:underline"
                    >
                      +234 813 428 0545
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. BOTTOM CTA
      ========================================================= */}
      <section className="py-16 bg-[#07152F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold !text-white tracking-tight">
            Ready To Take Care Of Your Smile?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Book a consultation with Kristal Dentale Clinic and let our team help you understand the right next step for your dental care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
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
