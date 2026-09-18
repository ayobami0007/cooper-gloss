
"use client";

import { useState } from "react";
import {
  WHATSAPP_NUMBER_LOCAL,
  SOCIAL,
  CONTACT_EMAIL,
  BUSINESS_HOURS,
} from "@/lib/constants";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";

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
    <div className="mx-auto max-w-4xl px-4 py-14 font-body text-ink">
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
            <div className="flex gap-4 items-start">
              <IconCircle>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </IconCircle>
              <div>
                <p className="font-medium">Phone / WhatsApp</p>
                <p className="text-lilac-deep">{WHATSAPP_NUMBER_LOCAL}</p>
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

            <div className="flex gap-4 items-start">
              <IconCircle>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </IconCircle>
              <div>
                <p className="font-medium">Social Media</p>
                <p className="text-ink/70">TikTok: @{SOCIAL.tiktok}</p>
                {SOCIAL.instagram && <p className="text-ink/70">Instagram: @{SOCIAL.instagram}</p>}
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