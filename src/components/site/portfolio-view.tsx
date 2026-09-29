"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Award, 
  ExternalLink, 
  Video 
} from "lucide-react";
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { REAL_PORTFOLIO_ITEMS, TIKTOK_CLIPS, CLINIC_INFO } from "@/data/clinicData";
import PortfolioLightbox from "@/components/site/portfolio-lightbox";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type CategoryFilter = "All" | "Orthodontics" | "Restorative" | "Cosmetic" | "General Dentistry" | "Clinic";

export default function PortfolioView() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "All", value: "All" },
    { label: "Orthodontics", value: "Orthodontics" },
    { label: "Restorative", value: "Restorative" },
    { label: "Cosmetic", value: "Cosmetic" },
    { label: "General Dentistry", value: "General Dentistry" },
    { label: "Clinic", value: "Clinic" },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0B1730]">
      
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative bg-[#07152F] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#0F2347] overflow-hidden">
        {/* Background glow and subtle clinic imagery */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-panoramic.jpg"
            alt="Kristal Dentale Clinic background"
            fill
            sizes="100vw"
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152F] via-[#07152F]/90 to-[#07152F]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#FFA1D8]">Our Work</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-slate-300 font-medium">
                Selected Clinical Cases &bull; Kristal Dentale Clinic
              </span>
            </div>

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E83A9B]">
              OUR WORK
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
              Examples From Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59B5FF] via-white to-[#FFA1D8]">
                Dental Practice
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Take a look at selected treatment cases, clinical photographs and practice highlights from Kristal Dentale Clinic.
            </p>

            <p className="text-xs text-slate-400 italic">
              Patient photographs are shared for educational purposes and with appropriate consideration for patient privacy.
            </p>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-6 border-t border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#E83A9B] text-white shadow-md shadow-[#E83A9B]/20"
                    : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Hero Bottom Metric Rail */}
        <div className="mt-10 border-t border-white/10 bg-[#050E20]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <strong className="text-xl font-bold text-white block">Selected Cases</strong>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Clinical Documentation</span>
              </div>
              <div>
                <strong className="text-xl font-bold text-[#FFA1D8] block">Restorative</strong>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Bridges &amp; Crowns</span>
              </div>
              <div>
                <strong className="text-xl font-bold text-[#59B5FF] block">Orthodontics</strong>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Alignment Records</span>
              </div>
              <div>
                <strong className="text-xl font-bold text-[#25D366] block">Oke Aro</strong>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Akure, Ondo State</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================
          2. CASE STUDIES (Grid-Aligned Editorial Dossiers)
      ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* CASE 01: Lower Anterior Fixed Ceramic Bridge */}
          {(selectedCategory === "All" || selectedCategory === "Restorative") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF6FC]/40 border border-[#E8EDF3] shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left: Interactive Before & After Slider */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-[#E8EDF3] bg-slate-950 p-2 shadow-xl">
                    <BeforeAfterSlider
                      beforeImage="/images/portfolio/bridge-restoration-before.jpeg"
                      afterImage="/images/portfolio/bridge-restoration-after.jpeg"
                      beforeLabel="Pre-Restoration"
                      afterLabel="Post-Bridge Placement"
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] px-1 font-medium">
                    <span>Clinical photography: Lower arch incisor space</span>
                    <span className="text-[#E83A9B] font-bold">Interactive Slider &harr;</span>
                  </div>
                </div>

                {/* Right: Clinical Case Dossier */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 bg-[#FFF1F8] border border-[#E83A9B]/20 px-3 py-1 rounded-full text-xs font-extrabold text-[#E83A9B] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>Case Ref: KD-REST-01</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1730] tracking-tight">
                    Lower Front Tooth Fixed Ceramic Bridge
                  </h2>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Replacement of a missing lower front tooth using a custom ceramic fixed bridge anchored to adjacent teeth. This restorative procedure helps restore comfortable chewing function and tooth appearance.
                  </p>

                  {/* Structured Dossier Specs */}
                  <div className="space-y-2.5 pt-2 border-t border-[#E8EDF3]">
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#E8EDF3]/60">
                      <span className="font-bold text-[#64748B]">Procedure:</span>
                      <span className="font-extrabold text-[#0B1730]">Fixed Dental Bridge</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#E8EDF3]/60">
                      <span className="font-bold text-[#64748B]">Material:</span>
                      <span className="font-extrabold text-[#0B1730]">Ceramic Restoration</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#E8EDF3]/60">
                      <span className="font-bold text-[#64748B]">Dentist:</span>
                      <span className="font-extrabold text-[#1765A8]">Dr. Olupona</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5">
                      <span className="font-bold text-[#64748B]">Location:</span>
                      <span className="font-extrabold text-[#0B1730]">Oke Aro, Akure</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact#appointment"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1765A8] hover:bg-[#124d80] px-5 py-3 rounded-xl transition-all shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book a Consultation</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* CASE 02: In-Chair Orthodontic Archwire Fitting Video */}
          {(selectedCategory === "All" || selectedCategory === "Orthodontics" || selectedCategory === "General Dentistry") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8EDF3] shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left: Clinical Video Player */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-slate-300 shadow-xl">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src="/images/portfolio/ortho-procedure.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] px-1 font-medium">
                    <span>Clinical procedure: In-clinic bracket and archwire placement</span>
                    <span className="text-[#1765A8] font-bold">Procedure Video</span>
                  </div>
                </div>

                {/* Right: Orthodontic Case Dossier */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 bg-[#EEF6FC] border border-[#1765A8]/20 px-3 py-1 rounded-full text-xs font-extrabold text-[#1765A8] uppercase tracking-wider">
                    <Video className="w-3.5 h-3.5" />
                    <span>Case Ref: KD-ORTHO-02</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1730] tracking-tight">
                    Orthodontic Bracket &amp; Archwire Fitting
                  </h2>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Recorded in our clinic in Akure: Placement and adjustment of orthodontic brackets and archwires to guide teeth into improved alignment.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E8EDF3]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#0B1730] font-semibold">Careful tooth preparation and bracket positioning</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1765A8] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#0B1730] font-semibold">Progressive archwire adjustment</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E83A9B] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#0B1730] font-semibold">Regular progress reviews at our Oke Aro clinic</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/services/orthodontics"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#E83A9B] hover:underline"
                    >
                      <span>Learn More About Orthodontics</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* CASE 03: Diagnostic Examination Records (2-Column Aligned Grid) */}
          {(selectedCategory === "All" || selectedCategory === "Orthodontics" || selectedCategory === "General Dentistry") && (
            <div className="space-y-6 pt-4">
              <div className="border-b border-[#E8EDF3] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#1765A8]">
                    CLINICAL PHOTOGRAPHS &bull; CASE REF: KD-DIAG-03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1730] mt-1">
                    Pre-Treatment Orthodontic Examination
                  </h2>
                </div>
                <span className="text-xs font-semibold text-[#64748B]">
                  Click to Expand
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Front View */}
                <div
                  onClick={() => setLightboxIndex(1)}
                  className="group cursor-pointer p-5 rounded-2xl bg-white border border-[#E8EDF3] hover:border-[#1765A8] hover:shadow-xl transition-all space-y-4"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src="/images/portfolio/ortho-case-front.jpeg"
                      alt="Frontal orthodontic examination"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#07152F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-bold text-white bg-black/60 px-3.5 py-1.5 rounded-lg backdrop-blur-xs">
                        Click to Expand →
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1730] group-hover:text-[#1765A8] transition-colors">
                      Frontal View: Tooth Spacing Assessment
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Clinical photograph documenting tooth spacing before orthodontic treatment.
                    </p>
                  </div>
                </div>

                {/* Lateral View */}
                <div
                  onClick={() => setLightboxIndex(2)}
                  className="group cursor-pointer p-5 rounded-2xl bg-white border border-[#E8EDF3] hover:border-[#1765A8] hover:shadow-xl transition-all space-y-4"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src="/images/portfolio/ortho-case-lateral.jpeg"
                      alt="Lateral view bite examination"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#07152F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-bold text-white bg-black/60 px-3.5 py-1.5 rounded-lg backdrop-blur-xs">
                        Click to Expand →
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1730] group-hover:text-[#1765A8] transition-colors">
                      Lateral View: Bite Assessment
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Clinical photograph documenting bite relationship and arch coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CASE 04: Official Treatment Videos & Clinic Highlights */}
          {(selectedCategory === "All" || selectedCategory === "Clinic") && (
            <div className="space-y-8 pt-8 border-t border-[#E8EDF3]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#E83A9B]">
                    PRACTICE VIDEOS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1730] mt-1">
                    Practice &amp; Treatment Videos
                  </h2>
                </div>
                <a
                  href="https://www.tiktok.com/@kristaldentaleclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1730] hover:text-[#E83A9B] transition-colors"
                >
                  <IoLogoTiktok className="w-4 h-4 text-black" />
                  <span>@kristaldentaleclinic on TikTok</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TIKTOK_CLIPS.map((clip) => (
                  <div
                    key={clip.id}
                    className="p-4 rounded-3xl bg-white border border-[#E8EDF3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between px-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1765A8] bg-[#EEF6FC] px-2.5 py-1 rounded-md">
                          {clip.category}
                        </span>
                        <a
                          href={clip.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#64748B] hover:text-[#E83A9B] transition-colors"
                          aria-label="View on TikTok"
                        >
                          <IoLogoTiktok className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Embedded Playable TikTok Video */}
                      <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-slate-200">
                        {clip.videoId ? (
                          <iframe
                            src={`https://www.tiktok.com/player/v1/${clip.videoId}?autoplay=0`}
                            title={clip.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : null}
                      </div>

                      <h3 className="text-sm font-bold text-[#0B1730] px-1 pt-1 line-clamp-2">
                        {clip.title}
                      </h3>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#E8EDF3]/70 px-1 flex items-center justify-between text-xs font-bold text-[#E83A9B]">
                      <a
                        href={clip.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>Open on TikTok</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================
          3. CTA BANNER
      ========================================================= */}
      <section className="py-20 bg-[#07152F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold !text-white tracking-tight">
            Ready To Take Care Of Your Smile?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Book a consultation with Kristal Dentale Clinic and let our team help you understand the right next step for your dental care.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#appointment"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3.5 rounded-xl transition-all"
            >
              <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <PortfolioLightbox
          items={REAL_PORTFOLIO_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev + 1) % REAL_PORTFOLIO_ITEMS.length
            )
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null
                ? 0
                : prev === 0
                ? REAL_PORTFOLIO_ITEMS.length - 1
                : prev - 1
            )
          }
        />
      )}

    </div>
  );
}
