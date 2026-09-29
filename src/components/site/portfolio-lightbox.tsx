"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RealPortfolioItem } from "@/data/clinicData";

interface LightboxProps {
  items: RealPortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PortfolioLightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  const displayImage = currentItem.afterImage || currentItem.image || currentItem.beforeImage;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/60 text-white">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#E83FAE]">
                {currentItem.category}
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                {currentItem.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Media View */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black flex items-center justify-center">
            {currentItem.type === "video" && currentItem.videoUrl ? (
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={currentItem.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : displayImage ? (
              <Image
                src={displayImage}
                alt={currentItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            ) : null}

            {/* Previous Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-3 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-[#E83FAE] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-3 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-[#E83FAE] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption Footer */}
          <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <p className="max-w-xl">{currentItem.description}</p>
            <span className="font-mono text-slate-500">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
