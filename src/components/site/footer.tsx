import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IoLogoWhatsapp, IoLogoTiktok } from "react-icons/io5";
import KristalLogo from "@/components/KristalLogo";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#07152F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Overview (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <KristalLogo variant="light" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional dental care in Oke Aro, Akure, Ondo State.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact#appointment"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#E83A9B] transition-colors"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E83A9B]" />
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://www.tiktok.com/@kristaldentaleclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 transition-colors"
              >
                <IoLogoTiktok className="w-3.5 h-3.5" />
                <span>TikTok — @kristaldentaleclinic</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (md:col-span-2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dental Services (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Dental Services
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

          {/* Column 4: Contact (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-bold text-white hover:text-[#E83A9B] transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <p>
                116 Idanre Road, Oke Aro, Akure, Ondo State
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <p>
            116 Idanre Road, Oke Aro, Akure, Ondo State
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://bestlinkdigitaltech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white font-medium underline transition-colors"
            >
              Bestlink Digital Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
