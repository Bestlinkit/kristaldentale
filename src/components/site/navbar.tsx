"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
import KristalLogo from "@/components/KristalLogo";
import { CLINIC_INFO } from "@/data/clinicData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar (Terra Academy Inspired) */}
      <div className="bg-[#07152F] text-white text-xs py-2 px-4 border-b border-white/10 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-semibold text-slate-200">
              Welcoming patients in Oke Aro, Akure &amp; Ondo State &bull; Professional dental care
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>Call: <a href="tel:08134280545" className="font-bold text-white hover:text-[#E83A9B]">0813 428 0545</a></span>
            <span className="text-white/20">|</span>
            <Link href="/contact#appointment" className="text-[#E83A9B] hover:underline font-bold flex items-center gap-1">
              <span>Book an Appointment</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "h-[74px] bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8EDF3]"
            : "h-[84px] bg-white border-b border-[#E8EDF3]/80"
        } flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            
            {/* Left: Kristal Dentale Clinic Logo */}
            <div className="shrink-0">
              <KristalLogo size="md" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#0B1730]">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-2 font-medium transition-colors hover:text-[#1765A8] ${
                      isActive ? "text-[#E83A9B] font-semibold" : "text-[#0B1730]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E83A9B] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1730] hover:text-[#1765A8] px-3.5 py-2.5 rounded-lg border border-[#E8EDF3] hover:border-slate-300 transition-all bg-white shadow-2xs hover:shadow-xs"
              >
                <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/contact#appointment"
                className="inline-flex items-center justify-center text-xs font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger & Quick CTA */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-[#25D366] rounded-md border border-[#E8EDF3] bg-white"
              >
                <IoLogoWhatsapp className="w-5 h-5" />
              </a>

              <Link
                href="/contact#appointment"
                className="text-xs font-bold text-white bg-[#E83A9B] px-3 py-2 rounded-lg"
              >
                Book
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0B1730] hover:text-[#E83A9B] focus:outline-hidden transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#07152F]/40 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-[#E8EDF3]"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8EDF3] pb-4">
                  <KristalLogo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-[#0B1730]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`text-base py-3 px-3 rounded-lg font-medium transition-colors flex items-center justify-between ${
                          isActive
                            ? "bg-[#FFF1F8] text-[#E83A9B] font-bold"
                            : "text-[#0B1730] hover:bg-[#EEF6FC] hover:text-[#1765A8]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-40" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E8EDF3] space-y-3">
                <Link
                  href="/contact#appointment"
                  className="w-full inline-flex items-center justify-center text-xs font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-4 py-3 rounded-lg transition-all shadow-xs"
                >
                  Book Appointment
                </Link>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#0B1730] px-4 py-3 rounded-lg border border-[#E8EDF3] transition-colors"
                >
                  <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
