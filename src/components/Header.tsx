"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import KristalLogo from "./KristalLogo";
import { CLINIC_INFO } from "@/data/clinicData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clinical Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          
          {/* Logo on Left with Generous Breathing Room */}
          <div className="shrink-0 py-2">
            <KristalLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[0.9375rem] font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? "text-[#0A192F] font-bold border-b-2 border-[#0A3B74]"
                      : "text-slate-600 hover:text-[#0A192F]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-slate-700 hover:text-[#0A3B74] px-3 py-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact#appointment"
              className="btn-primary text-xs"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact#appointment"
              className="btn-primary !py-2 !px-3.5 text-xs"
            >
              Book
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-800 hover:text-[#E6007A] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-800 hover:text-[#E6007A] py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-400 text-xs">→</span>
              </Link>
            ))}
          </nav>

          <div className="pt-3 space-y-3">
            <p className="text-xs text-slate-500">
              116 Idanre Road, Beside Idanre Garage, Oke Aro, Akure
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs !py-2.5 text-center"
              >
                WhatsApp
              </a>
              <Link
                href="/contact#appointment"
                className="btn-primary text-xs !py-2.5 text-center"
              >
                Book
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
