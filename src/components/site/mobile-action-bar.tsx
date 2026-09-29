"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 sm:hidden shadow-lg flex items-center justify-around gap-2">
      <a
        href={`tel:${CLINIC_INFO.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-700 hover:text-[#13579B] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#13579B]" />
        <span className="text-[11px] font-semibold mt-0.5">Call</span>
      </a>

      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-700 hover:text-emerald-700 transition-colors border-x border-slate-100"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600" />
        <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
      </a>

      <Link
        href="/contact#appointment"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-700 hover:text-[#E83FAE] transition-colors"
      >
        <Calendar className="w-4 h-4 text-[#E83FAE]" />
        <span className="text-[11px] font-semibold mt-0.5">Book</span>
      </Link>
    </div>
  );
}
