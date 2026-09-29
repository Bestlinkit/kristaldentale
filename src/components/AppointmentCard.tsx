"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";

export default function AppointmentCard({
  className = "",
  initialTreatment = "Orthodontics (Braces)"
}: {
  className?: string;
  initialTreatment?: string;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    treatment: initialTreatment,
    preferredDate: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const messageText = `Hello Kristal Dentale Clinic,\n\nI would like to request a consultation:\n• Full Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Treatment: ${formData.treatment}\n• Preferred Date: ${formData.preferredDate || "Earliest Available"}\n• Message / Note: ${formData.message || "None"}\n\nPlease confirm availability at your Akure clinic.`;

    const whatsappUrl = `https://wa.me/2348134280545?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-xs ${className}`}>
      <div className="mb-6">
        <span className="text-xs uppercase tracking-wider font-bold text-[#E6007A]">
          Consultation Request
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">
          Request An Appointment
        </h3>
        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
          Fill in your details below and our team at 116 Idanre Road, Akure will confirm your appointment promptly.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="text-base font-bold text-slate-900">Consultation Dispatched via WhatsApp</h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your appointment inquiry has been formatted. If WhatsApp did not open automatically, click below:
          </p>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs inline-flex"
          >
            Open in WhatsApp
          </a>
          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-500 underline hover:text-slate-800 cursor-pointer pt-2"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tayo Adeleke"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0812 345 6789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Treatment *
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#E6007A] focus:bg-white transition-colors cursor-pointer"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Checkup">General Consultation &amp; Checkup</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Message or Question (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about any specific symptoms or preferences..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#E6007A] focus:bg-white transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto text-xs !py-3 !px-6"
            >
              <span>Request Appointment</span>
            </button>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-xs !py-3 !px-6 gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Continue on WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-500 pt-1">
            We respect your privacy. No payment required to book a consultation.
          </p>
        </form>
      )}
    </div>
  );
}
