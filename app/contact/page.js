
"use client";

import { useState } from "react";
import {
  WHATSAPP_NUMBER_LOCAL,
  WHATSAPP_NUMBER,
  SOCIAL,
  CONTACT_EMAIL,
  BUSINESS_HOURS,
} from "@/lib/constants";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

function IconCircle({ children }) {
  return (
    <div className="w-11 h-11 rounded-full bg-lilac-soft flex items-center justify-center text-lilac-deep shrink-0">
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSend() {
    const lines = [
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.subject && `Subject: ${form.subject}`,
      "",
      form.message,
    ].filter(Boolean);

    window.open(buildWhatsAppEnquiryLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const canSend = form.name.trim() && form.message.trim();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 font-body text-ink">
      <h1 className="font-display text-4xl mb-3">Contact Us</h1>
      <p className="text-ink/70 mb-8">
        We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
      </p>
      <div className="border-t border-lilac-soft mb-10" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Get In Touch */}
        <div>
          <h2 className="font-display text-2xl mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <IconCircle>
                <FaWhatsapp size={20} aria-hidden="true" />
              </IconCircle>

              <div>
                <p className="font-medium">WhatsApp</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lilac-deep underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-deep"
                >
                  {WHATSAPP_NUMBER_LOCAL}
                </a>
              </div>
            </div>

            {CONTACT_EMAIL && (
              <div className="flex gap-4 items-start">
                <IconCircle>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-lilac-deep">{CONTACT_EMAIL}</p>
                </div>
              </div>
            )}

            {BUSINESS_HOURS && (
              <div className="flex gap-4 items-start">
                <IconCircle>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="font-medium">Business Hours</p>
                  {BUSINESS_HOURS.map((row) => (
                    <p key={row.label} className="text-ink/70">
                      {row.label}: {row.hours}
                    </p>
                  ))}
                </div>
              </div>
            )}

          

          <div className="flex items-center gap-3">
  <IconCircle>
    <FaTiktok size={20} />
  </IconCircle>

  <div>
    <p className="font-medium ">TikTok</p>
    <a
      href={`https://www.tiktok.com/@${SOCIAL.tiktok.replace(/^@/, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body font-medium text-lilac-deep hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-deep"
    >
      @{SOCIAL.tiktok.replace(/^@/, "")}
    </a>
  </div>
</div>
          </div>
        </div>

        {/* Send Us a Message */}
        <div className="bg-white border border-lilac-soft rounded-2xl p-6">
          <h2 className="font-display text-xl mb-4">Send Us a Message</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-ink/70">Your Name *</label>
              <input
                className="w-full border border-lilac-soft rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-lilac"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-ink/70">Email</label>
              <input
                className="w-full border border-lilac-soft rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-lilac"
                placeholder="you@email.com (optional)"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs font-medium text-ink/70">Subject</label>
            <input
              className="w-full border border-lilac-soft rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-lilac"
              placeholder="Order enquiry, product question..."
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="text-xs font-medium text-ink/70">Message *</label>
            <textarea
              className="w-full border border-lilac-soft rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-lilac"
              rows={5}
              placeholder="Tell us how we can help..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!canSend}
            className="w-full py-3 rounded-full bg-lilac-deep text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            Send Message
          </button>
          <p className="text-xs text-ink/50 mt-2 text-center">
            Opens WhatsApp with your message pre-filled — no separate inbox to check.
          </p>
        </div>
      </div>
    </div>
  );
}