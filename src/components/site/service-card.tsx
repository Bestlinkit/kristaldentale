"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DentalService } from "@/data/clinicData";

interface ServiceCardProps {
  service: DentalService;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl border border-[#E8EDF3] overflow-hidden shadow-xs hover:border-[#1765A8]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Editorial Service Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/70 via-[#07152F]/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Number Badge floating on top-right */}
          <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/40 shadow-xs">
            <span className="text-xs font-mono font-bold text-[#0B1730]">
              {service.number}
            </span>
          </div>

          {/* Tagline pill at bottom-left of image */}
          <div className="absolute bottom-3 left-3.5 right-3.5">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#E83A9B]/90 backdrop-blur-xs px-2.5 py-1 rounded-md">
              {service.tagline}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0B1730] group-hover:text-[#1765A8] transition-colors mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 pb-6 pt-3 border-t border-[#E8EDF3]/60 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1765A8] group-hover:text-[#E83A9B] transition-colors"
        >
          <span>View Service</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E83A9B] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
