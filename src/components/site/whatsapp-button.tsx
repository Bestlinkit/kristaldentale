"use client";

import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CLINIC_INFO } from "@/data/clinicData";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:block transition-all duration-300 pointer-events-none ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <div className="bg-[#07152F] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-white/10">
          Chat with us on WhatsApp
        </div>
      </div>

      {/* Floating Button with Subtle Pulse */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kristal Dentale Clinic on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Subtle pulsating ambient halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
        
        <IoLogoWhatsapp className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
