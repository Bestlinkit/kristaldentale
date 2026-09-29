import React from "react";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import KristalLogo from "./KristalLogo";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1528] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Clinic Overview & Logo */}
          <div className="md:col-span-4 space-y-4">
            <KristalLogo variant="light" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Kristal Dentale Clinic provides professional dental care, orthodontics, and restorative treatments in Oke Aro, Akure, Ondo State.
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: +234 813 428 0545</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Clinical Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <p>
                116 Idanre Road,<br />
                Beside Idanre Garage Shopping Complex (Robino Global),<br />
                Oke Aro, Akure, Ondo State.
              </p>
              <div>
                <span className="block text-slate-500">Phone:</span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-bold text-white hover:text-[#E6007A] transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E6007A] hover:underline"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <p>
            116 Idanre Road, Oke Aro, Akure, Ondo State, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
