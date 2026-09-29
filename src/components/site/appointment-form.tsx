"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/clinicData";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    treatment: "Orthodontics",
    preferredDate: "",
    preferredTime: "Morning (09:00 - 12:00)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send appointment request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Form error:", err);
      // Fallback: If network or server fails, allow user to continue via WhatsApp
      setErrorMsg(err?.message || "Error submitting form. You can message us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const nameGreeting = formData.fullName.trim()
    ? `Hello Kristal Dentale Clinic, my name is ${formData.fullName.trim()}.`
    : `Hello Kristal Dentale Clinic,`;

  const messageLines = [
    nameGreeting,
    `I would like to request a dental appointment:`,
    `• Treatment: ${formData.treatment}`,
    `• Preferred Date: ${formData.preferredDate || "Earliest available"}`,
    `• Preferred Time: ${formData.preferredTime}`,
    formData.message ? `• Additional Note: ${formData.message}` : null,
    `Please let me know your available times. Thank you!`
  ].filter(Boolean).join("\n");

  const formattedWhatsAppUrl = `https://wa.me/2348134280545?text=${encodeURIComponent(messageLines)}`;

  return (
    <div id="appointment" className="bg-white rounded-2xl border border-[#E8EDF3] p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1730]">
          Request an Appointment
        </h3>
        <p className="text-sm text-[#64748B] mt-1">
          Complete the form below and our team will contact you to confirm your appointment.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-[#EEF6FC] rounded-xl border border-blue-100 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#1765A8] mx-auto" />
          <h4 className="text-lg font-bold text-[#0B1730]">
            Appointment Request Received
          </h4>
          <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mx-auto">
            Thank you. Your appointment request has been received. Our team will contact you to confirm the details.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={formattedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2.5 rounded-xl transition-all shadow-xs"
            >
              <IoLogoWhatsapp className="w-4 h-4" />
              <span>Book Through WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  treatment: "Orthodontics",
                  preferredDate: "",
                  preferredTime: "Morning (09:00 - 12:00)",
                  message: "",
                });
              }}
              className="text-xs font-semibold text-[#1765A8] hover:underline py-2 cursor-pointer"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-[#0B1730] mb-1.5">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Oluwaseun Adeleke"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all bg-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#0B1730] mb-1.5">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0813 428 0545"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="treatment" className="block text-xs font-bold text-[#0B1730] mb-1.5">
                Treatment or Reason for Visit
              </label>
              <select
                id="treatment"
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all bg-white"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold text-[#0B1730] mb-1.5">
                  Preferred Date
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full text-sm px-2.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold text-[#0B1730] mb-1.5">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full text-sm px-2.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all bg-white"
                >
                  <option value="Morning (09:00 - 12:00)">Morning</option>
                  <option value="Afternoon (12:00 - 15:00)">Afternoon</option>
                  <option value="Evening (15:00 - 17:30)">Late Afternoon</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#0B1730] mb-1.5">
              Additional Information
            </label>
            <textarea
              id="message"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you would like addressed..."
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E8EDF3] focus:outline-hidden focus:border-[#1765A8] focus:ring-1 focus:ring-[#1765A8] transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#E83A9B] hover:bg-[#D22687] px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Appointment</span>
                </>
              )}
            </button>

            <a
              href={formattedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0B1730] hover:text-[#1765A8] px-5 py-3 rounded-xl border border-[#E8EDF3] hover:border-slate-300 transition-colors bg-white shadow-2xs"
            >
              <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Book Through WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
