import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SERVICES_DATA, CLINIC_INFO } from "@/data/clinicData";
import ServiceIcon from "@/components/site/service-icon";
import { 
  buildPageMetadata, 
  generateBreadcrumbJsonLd, 
  generateServiceJsonLd, 
  SITE_URL 
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return buildPageMetadata({
    title: `${service.title} in Akure | Kristal Dentale Clinic`,
    description: `${service.description} Professional dental care at Kristal Dentale Clinic in Oke Aro, Akure, Ondo State. Phone: 0813 428 0545.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Dental Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  const serviceSchema = generateServiceJsonLd({
    name: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  });

  const clinicalImage = service.image;
  const clinicalImageAlt = `${service.title} treatment at Kristal Dentale Clinic`;
  const clinicalCaption = `${service.title} • Kristal Dentale Clinic, Akure`;

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Standardized 4-step What To Expect
  const steps = [
    {
      num: 1,
      title: "Consultation",
      desc: "Your dentist examines your teeth and discusses your concerns."
    },
    {
      num: 2,
      title: "Assessment",
      desc: "Your dental condition is assessed and appropriate treatment options are explained."
    },
    {
      num: 3,
      title: "Treatment",
      desc: "Treatment is carried out according to the agreed plan."
    },
    {
      num: 4,
      title: "Follow-Up",
      desc: "You receive appropriate aftercare and follow-up guidance."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0B1730]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      
      {/* 1. Header with Breadcrumb & Hero */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#EEF6FC]/60 via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E8EDF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb: Home / Services / [Service Name] */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-8">
            <Link href="/" className="hover:text-[#1765A8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-[#1765A8] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#E83A9B]">{service.title}</span>
          </nav>

          {/* Hero Row: Left Text, Right Relevant Real Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className={clinicalImage ? "lg:col-span-7" : "lg:col-span-8"}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFF1F8] to-[#EEF6FC] border border-[#E8EDF3] flex items-center justify-center p-1.5 shadow-2xs">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E83A9B]">
                  DENTAL SERVICE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact#appointment"
                  className="btn-primary"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Link>

                <a
                  href={`https://wa.me/2348134280545?text=${encodeURIComponent(
                    `Hello Kristal Dentale Clinic, I would like to inquire about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Real Clinical Photo (if available) */}
            {clinicalImage && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8EDF3] bg-slate-100">
                  <Image
                    src={clinicalImage}
                    alt={clinicalImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/70 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60">
                    <p className="text-[11px] font-bold text-[#0B1730]">
                      {clinicalCaption}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 2. Content Sections */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* SECTION: About [Service] */}
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block">
              TREATMENT INFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] tracking-tight">
              About {service.title}
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* SECTION: What To Expect (4 Concise Steps) */}
          <div className="space-y-6 pt-4 border-t border-[#E8EDF3]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E83A9B] block mb-1">
                TREATMENT PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] tracking-tight">
                What To Expect
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div key={step.num} className="p-5 rounded-2xl bg-white border border-[#E8EDF3] shadow-xs space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF1F8] text-[#E83A9B] font-bold text-xs flex items-center justify-center">
                    0{step.num}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1730]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: Is This Treatment Right For You? */}
          <div className="space-y-4 pt-4 border-t border-[#E8EDF3]">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1765A8] block">
              CLINICAL SUITABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] tracking-tight">
              Is This Treatment Right For You?
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Suitability for {service.title.toLowerCase()} depends on a proper dental assessment. During your consultation, your dentist will examine your teeth and gums, discuss your individual needs, and recommend appropriate treatment options based on clinical findings.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#appointment"
                className="btn-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3. Bottom CTA Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#07152F] text-white shadow-xl relative overflow-hidden text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold !text-white tracking-tight relative z-10">
              Have Questions About Your Dental Care?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto relative z-10">
              Speak with the clinic before booking. Our team in Oke Aro, Akure is happy to help you understand what to expect.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/contact#appointment"
                className="btn-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white hover:!text-[#07152F]"
              >
                <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4. Related Services */}
          <div className="pt-8 border-t border-[#E8EDF3] space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#64748B]">
              Other Dental Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-4 rounded-xl border border-[#E8EDF3] bg-white hover:border-[#1765A8] hover:shadow-xs transition-all flex items-center justify-between text-sm font-bold text-[#0B1730] group"
                >
                  <span>{rel.title}</span>
                  <span className="text-[#E83A9B] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
