"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Sparkles, 
  Award,
  ChevronRight
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CLINIC_INFO } from "@/data/clinicData";

export default function HeroSection() {
  return (
    <section className="relative bg-[#07152F] text-white overflow-hidden border-b border-[#0F2347]">
      {/* Background Image with Dark Cinematic Overlay (Terra Academy Inspired) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-panoramic.jpg"
          alt="Kristal Dentale Clinic modern surgery suite in Akure"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152F] via-[#07152F]/90 to-[#07152F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152F] via-transparent to-[#07152F]/80" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Status Pill, Main Title, Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Practice Status Pill */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
              <span className="text-slate-300 font-medium">
                Dental Clinic in Oke Aro, Akure &bull; Lead Clinician: <strong className="text-white font-bold">Dr. Olupona</strong>
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-[#E83A9B]">
              DENTAL CARE IN AKURE, ONDO STATE
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
              Professional Dental Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59B5FF] via-white to-[#FFA1D8]">
                With Your Comfort In Mind
              </span>
            </h1>

            {/* Hero Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              From routine dental care to orthodontics, restorative and cosmetic treatments, Kristal Dentale Clinic provides thoughtful dental care for children and adults in Oke Aro, Akure.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#appointment"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-6 py-3.5 rounded-xl shadow-lg hover:shadow-[#E83A9B]/30 hover:-translate-y-0.5 transition-all"
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

              <Link
                href="#treatments"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors ml-1"
              >
                <span>Explore 9 Dental Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#E83A9B]" />
              </Link>
            </div>

          </div>

          {/* Right Column: Featured Clinician Portrait Frame (Dr. Olupona) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#1765A8] via-[#E83A9B] to-[#25D366]/40 opacity-30 blur-xl pointer-events-none" />
              
              {/* Frame Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/15 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/ceo.jpg"
                  alt="Dr. Olupona - Lead Clinician & Practice Director at Kristal Dentale Clinic"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/95 via-transparent to-transparent opacity-85" />
                
                {/* Clinician Badges */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#07152F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-white">
                  <Award className="w-3.5 h-3.5 text-[#E83A9B]" />
                  <span>Lead Clinician</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-extrabold text-white tracking-tight">
                        Dr. Olupona
                      </p>
                      <p className="text-xs text-[#FFA1D8] font-semibold">
                        Lead Clinician &amp; Practice Director
                      </p>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Oke Aro, Akure, Ondo State
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Grounded Practice Information Rail */}
      <div className="relative z-10 border-t border-white/10 bg-[#050E20]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            
            <div className="border-r border-white/10 pr-4">
              <strong className="text-xl sm:text-2xl font-black text-white block">Oke Aro</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Convenient Location</span>
            </div>

            <div className="border-r border-white/10 pr-4">
              <strong className="text-xl sm:text-2xl font-black text-[#FFA1D8] block">Care</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Patient-Focused Care</span>
            </div>

            <div className="border-r border-white/10 pr-4">
              <strong className="text-xl sm:text-2xl font-black text-[#59B5FF] block">9</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Dental Services</span>
            </div>

            <div className="border-r border-white/10 pr-4">
              <strong className="text-xl sm:text-2xl font-black text-white block">Dr. Olupona</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Lead Clinician</span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex justify-start lg:justify-end">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA1D8] hover:text-white transition-colors"
              >
                <span>Selected Clinical Cases</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
