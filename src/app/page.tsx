import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin, 
  Calendar,
  Phone
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";
import HeroSection from "@/components/site/hero-section";
import ServiceCard from "@/components/site/service-card";
import AppointmentForm from "@/components/site/appointment-form";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kristal Dentale Clinic | Dentist in Akure, Ondo State",
  description:
    "Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, including general, restorative, orthodontic and cosmetic dental treatments.",
  path: "/",
});

export default function HomePage() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Kristal Dentale Clinic | Dentist in Akure, Ondo State",
    description:
      "Kristal Dentale Clinic provides professional dental care in Oke Aro, Akure, including general, restorative, orthodontic and cosmetic dental treatments.",
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
          __html: JSON.stringify(webpageSchema),
        }}
      />
      
      {/* =========================================================
          1. HERO SECTION (Terra Academy Inspired Architecture)
      ========================================================= */}
      <HeroSection />

      {/* =========================================================
          2. INTRO / ABOUT SECTION
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 2-Column Intro Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B] block mb-2">
                ABOUT KRISTAL DENTALE CLINIC
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B1730] tracking-tight leading-[1.12]">
                Dental Care That <br />
                <span className="text-[#1765A8]">Puts Patients First</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                Kristal Dentale Clinic is a dental practice in Oke Aro, Akure, providing general, restorative, orthodontic and cosmetic dental care for individuals and families.
              </p>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                We believe good dental care starts with listening. Our team takes time to understand your concerns, explain your treatment options clearly and provide appropriate care based on your individual needs.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1765A8] hover:text-[#E83A9B] transition-colors group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Clinician Feature Showcase */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E8EDF3] bg-slate-900 shadow-xl">
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full">
              <Image
                src="/images/hero/hero-consultation.jpg"
                alt="Dr. Olupona in consultation with patient at Kristal Dentale Clinic Akure"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/90 via-[#07152F]/40 to-transparent" />
            </div>

            {/* Clinician Note Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFA1D8] block mb-1">
                  LEAD CLINICIAN &amp; PRACTICE DIRECTOR
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Meet Dr. Olupona
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Dr. Olupona leads the clinical care at Kristal Dentale Clinic, with a patient-focused approach to diagnosis, treatment and follow-up. Whether you are visiting for a routine dental concern, orthodontic treatment or restorative care, our aim is to make the process clear, comfortable and well explained.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#07152F] bg-white hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <span>Meet Our Clinician</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. SERVICES SECTION
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#E8EDF3]" id="treatments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B] block mb-2">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B1730] tracking-tight leading-tight">
                Dental Care For Your <br />
                <span className="text-[#1765A8]">Everyday Needs</span>
              </h2>
            </div>
            
            <p className="text-base text-[#64748B] max-w-md leading-relaxed">
              We provide a range of dental treatments designed to help maintain oral health, restore damaged or missing teeth and improve the appearance of your smile.
            </p>
          </div>

          {/* 3-Column Grid of 9 Photographic Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          {/* Bottom Action Row */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EEF6FC]/60 border border-[#E8EDF3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#0B1730]">
                Looking for detailed information on our treatments?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Explore our full range of general, restorative, orthodontic and cosmetic dental services.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1765A8] hover:bg-[#124d80] px-5 py-3 rounded-xl transition-all shadow-xs shrink-0"
            >
              <span>View All Dental Services</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. WHY CHOOSE / PATIENT-FOCUSED CARE
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#07152F] text-white border-b border-[#0F2347]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFA1D8] block mb-2">
              WHY CHOOSE KRISTAL DENTALE CLINIC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
              Thoughtful Dental Care, <br />
              <span className="text-[#59B5FF]">Clearly Explained</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              We focus on delivering honest guidance and professional treatment in an environment where patients feel respected and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#59B5FF] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Clear Communication</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We explain your dental condition, available options and recommended treatment clearly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FFA1D8] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Patient-Focused Care</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We take time to understand your concerns and provide care suited to your needs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#25D366] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Modern Clinical Environment</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our clinic provides a clean and comfortable environment for consultations and treatment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-white">Convenient Location</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Find us on Idanre Road in Oke Aro, Akure, with easy access across the city.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          5. OUR WORK / SELECTED CLINICAL EXAMPLES
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Interactive Before/After Clinical Comparison */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-[#E8EDF3] bg-slate-950 p-2 shadow-xl">
                <BeforeAfterSlider
                  beforeImage="/images/portfolio/bridge-restoration-before.jpeg"
                  afterImage="/images/portfolio/bridge-restoration-after.jpeg"
                  beforeLabel="Before Treatment"
                  afterLabel="After Bridge Placement"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
              <p className="text-xs text-[#64748B] italic">
                Patient photographs are shared for educational purposes and with appropriate consideration for patient privacy.
              </p>
            </div>

            {/* Right: Section Text */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B] block mb-2">
                  OUR WORK
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B1730] tracking-tight leading-tight">
                  Examples From Our Clinical Work
                </h2>
              </div>

              <p className="text-base text-[#64748B] leading-relaxed">
                Explore selected clinical photographs and treatment cases from Kristal Dentale Clinic. These examples help patients understand the types of dental care we provide.
              </p>

              <div className="pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1765A8] hover:bg-[#124d80] px-5 py-3 rounded-xl transition-all shadow-xs"
                >
                  <span>View Our Work</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          6. CLINIC / FACILITY SECTION
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#07152F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#59B5FF] block">
                OUR CLINIC
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
                A Comfortable Place For <br />
                <span className="text-[#FFA1D8]">Your Dental Care</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Our clinic in Oke Aro, Akure provides a clean and welcoming environment for consultations, dental treatment and follow-up care. Whether you are visiting for your first consultation or returning for ongoing treatment, we want every visit to be straightforward and comfortable.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl transition-all"
                >
                  <span>Visit Our Clinic</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 3 Facility Features */}
            <div className="lg:col-span-6 space-y-3.5">
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-black text-[#59B5FF]">01</span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Consultation Space
                    </h3>
                    <p className="text-xs text-slate-300">Dedicated room to discuss findings and treatment options in private</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-black text-[#FFA1D8]">02</span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Treatment Facilities
                    </h3>
                    <p className="text-xs text-slate-300">Modern equipment suited for general, restorative and orthodontic care</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-black text-[#25D366]">03</span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Clinical Hygiene &amp; Safety
                    </h3>
                    <p className="text-xs text-slate-300">Sterilization procedures maintained for patient safety and comfort</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          7. PATIENT EXPERIENCE (Care That Starts With Listening)
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#EEF6FC]/50 border-t border-b border-[#E8EDF3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1765A8] block">
            PATIENT EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight">
            Care That Starts With Listening
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            We believe every patient deserves clear communication, respectful treatment and the opportunity to understand their dental care.
          </p>
        </div>
      </section>

      {/* =========================================================
          8. CTA BANNER
      ========================================================= */}
      <section className="py-20 bg-[#07152F] text-white text-center border-b border-[#0F2347]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold !text-white tracking-tight">
            Ready To Take Care Of Your Smile?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Book a consultation with Kristal Dentale Clinic and let our team help you understand the right next step for your dental care.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#appointment"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
              <span aria-hidden="true" className="text-xs">↗</span>
            </Link>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3.5 rounded-xl backdrop-blur-sm transition-all"
            >
              <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. LOCATION / CONTACT
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]" id="contact-booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Clinic Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B] block mb-2">
                  OUR LOCATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B1730] tracking-tight">
                  Visit Kristal Dentale Clinic
                </h2>
                <p className="mt-2 text-base text-[#64748B] leading-relaxed">
                  You can find us at 116 Idanre Road, beside Idanre Garage Shopping Complex (Robino Global), Oke Aro, Akure, Ondo State.
                </p>
              </div>

              {/* Clinic Detail Card */}
              <div className="p-6 rounded-2xl bg-[#EEF6FC]/60 border border-[#E8EDF3] space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1765A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#64748B]">
                      Address
                    </h4>
                    <p className="text-sm font-semibold text-[#0B1730] mt-0.5 leading-snug">
                      116 Idanre Road, Beside Idanre Garage Shopping Complex (Robino Global), Oke Aro, Akure, Ondo State.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#E83A9B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#64748B]">
                      Phone
                    </h4>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-sm font-bold text-[#0B1730] hover:text-[#E83A9B] transition-colors"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <IoLogoWhatsapp className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#64748B]">
                      WhatsApp
                    </h4>
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://maps.google.com/?q=Oke+Aro+Akure+Ondo+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1730] bg-[#EEF6FC] hover:bg-[#dbeafc] border border-[#E8EDF3] px-4 py-2.5 rounded-xl transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#1765A8]" />
                  <span>Get Directions</span>
                </a>

                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1765A8] hover:bg-[#124d80] px-4 py-2.5 rounded-xl transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book an Appointment</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Appointment Form (Integrated with Resend) */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
