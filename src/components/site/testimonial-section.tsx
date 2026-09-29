"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TestimonialItem {
  id: number;
  text: string;
  patientIdentifier: string;
  treatment: string;
  isPlaceholderNote?: string;
}

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 1,
    text: "Patient testimonial will be added here upon verified feedback submission.",
    patientIdentifier: "Verified Patient",
    treatment: "Orthodontics",
    isPlaceholderNote: "Verified clinic record space"
  },
  {
    id: 2,
    text: "Patient testimonial will be added here upon verified feedback submission.",
    patientIdentifier: "Consultation Patient",
    treatment: "Restorative Bridge Treatment",
    isPlaceholderNote: "Verified clinic record space"
  },
  {
    id: 3,
    text: "Patient testimonial will be added here upon verified feedback submission.",
    patientIdentifier: "Clinic Patient",
    treatment: "Scaling & Polishing",
    isPlaceholderNote: "Verified clinic record space"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? TESTIMONIAL_ITEMS.length - 1 : curr - 1
    );
  };

  const next = () => {
    setCurrentIndex((curr) => (curr + 1) % TESTIMONIAL_ITEMS.length);
  };

  const item = TESTIMONIAL_ITEMS[currentIndex];

  return (
    <section className="py-20 sm:py-24 bg-[#EEF6FC]/50 border-t border-b border-[#E8EDF3] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block mb-2">
          PATIENT EXPERIENCES
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1730] tracking-tight mb-12">
          What Our Patients Say
        </h2>

        {/* Testimonial Display Area */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EDF3] shadow-md max-w-2xl mx-auto">
          {/* Large Quotation Mark */}
          <div className="w-14 h-14 rounded-2xl bg-[#FFF1F8] text-[#E83A9B] flex items-center justify-center mx-auto mb-6">
            <Quote className="w-7 h-7" />
          </div>

          <div className="min-h-[110px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-base sm:text-lg text-[#0B1730] font-medium italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div>
                  <h4 className="text-sm font-bold text-[#0B1730]">
                    {item.patientIdentifier}
                  </h4>
                  <p className="text-xs font-semibold text-[#1765A8]">
                    {item.treatment}
                  </p>
                  {item.isPlaceholderNote && (
                    <span className="inline-block mt-2 text-[10px] text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full font-mono">
                      {item.isPlaceholderNote}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E8EDF3]/80">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#E8EDF3] flex items-center justify-center text-slate-600 hover:text-[#1765A8] hover:border-[#1765A8] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIAL_ITEMS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#E83A9B]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#E8EDF3] flex items-center justify-center text-slate-600 hover:text-[#1765A8] hover:border-[#1765A8] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
