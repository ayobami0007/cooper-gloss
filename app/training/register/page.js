
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { PAYMENT_ACCOUNTS, formatNaira } from "@/lib/constants";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";


const COURSES = [
  {
    id: "online-lipgloss",
    name: "Lip Gloss & Lip Care Formulation",
    mode: "Online Class",
    price: 25000,
  },
  {
    id: "online-pink-lips",
    name: "Pink Lips Cream Formulation",
    mode: "Online Class",
    price: 15000,
  },
  {
    id: "physical-lipgloss",
    name: "Lip Gloss & Lip Care Formulation",
    mode: "Physical Class",
    price: 50000,
  },
  {
    id: "physical-pink-lips",
    name: "Pink Lips Cream Formulation",
    mode: "Physical Class",
    price: 20000,
  },
];

const inputClass =
  "w-full rounded-lg border border-lilac-soft px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lilac";

export default function TrainingRegistrationPage() {
  const [course, setCourse] = useState(null);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
  });



  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");

    setCourse(COURSES.find((item) => item.id === courseId) ?? null);
  }, []);

  function update(field, value) {
    setDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  }
const [step, setStep] = useState("details");

  const isPhysical = course?.mode === "Physical Class";

  const canContinue =
    details.firstName.trim() &&
    details.lastName.trim() &&
    details.phone.trim() &&
    (!isPhysical || details.location);

  if (!course) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl text-ink">
          Training Registration
        </h1>
        <p className="mt-3 text-sm text-ink/70">
          Please select a training option before registering.
        </p>
        <Link
          href="/training"
          className="mt-6 inline-flex rounded-full bg-lilac-deep px-6 py-3 text-sm text-white"
        >
          View Training Options
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lilac-cloud/40 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/training"
          className="text-sm text-lilac-deep hover:underline"
        >
          ← Back to Training
        </Link>

        <header className="mb-8 mt-6">
          <p className="text-sm font-medium uppercase tracking-widest text-lilac-deep">
            Cooper Gloss
          </p>
          <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Training Registration
          </h1>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Enter your details to register for your selected training.
            Full payment is required.
          </p>
        </header>

        <section className="mb-6 rounded-2xl border border-lilac-soft bg-white p-5 sm:p-6">
          <p className="text-xs uppercase tracking-wider text-ink/60">
            Your selected training
          </p>
          <h2 className="mt-2 font-display text-xl text-ink">
            {course.name}
          </h2>
          <p className="mt-1 text-sm text-ink/70">{course.mode}</p>
          <p className="mt-4 font-display text-3xl text-lilac-deep">
            {formatNaira(course.price)}
          </p>

          {isPhysical && (
            <p className="mt-3 text-sm text-ink/70">
              Physical classes are available in Ilorin or Malete.
              The exact venue will be confirmed.
            </p>
          )}
        </section>

        
{step === "details" ? (
  <form
    className="space-y-6 rounded-2xl border border-lilac-soft bg-white p-5 sm:p-8"
    onSubmit={(event) => {
      event.preventDefault();
      setStep("payment");
    }}
  >
    <div>
      <h2 className="font-display text-xl text-ink">Your Details</h2>
      <p className="mt-1 text-sm text-ink/60">
        Enter the details we need for your registration.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm text-ink">First name *</label>
        <input
          className={inputClass}
          autoComplete="given-name"
          required
          value={details.firstName}
          onChange={(e) => update("firstName", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-ink">Last name *</label>
        <input
          className={inputClass}
          autoComplete="family-name"
          required
          value={details.lastName}
          onChange={(e) => update("lastName", e.target.value)}
        />
      </div>
    </div>

    <div>
      <label className="mb-2 block text-sm text-ink">
        WhatsApp phone number *
      </label>
      <input
        className={inputClass}
        type="tel"
        autoComplete="tel"
        placeholder="+234..."
        required
        value={details.phone}
        onChange={(e) => update("phone", e.target.value)}
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-ink">
        Email address (optional)
      </label>
      <input
        className={inputClass}
        type="email"
        autoComplete="email"
        value={details.email}
        onChange={(e) => update("email", e.target.value)}
      />
    </div>

    {isPhysical && (
      <div>
        <label className="mb-2 block text-sm text-ink">
          Preferred location *
        </label>
        <select
          className={inputClass}
          required
          value={details.location}
          onChange={(e) => update("location", e.target.value)}
        >
          <option value="">Choose a location</option>
          <option value="Ilorin">Ilorin</option>
          <option value="Malete">Malete</option>
        </select>
      </div>
    )}

    <button
      type="submit"
      disabled={!canContinue}
      className="w-full rounded-full bg-lilac-deep px-6 py-3 font-medium text-white disabled:opacity-40"
    >
      Continue to Payment →
    </button>
  </form>
) : (
  <section className="space-y-6 rounded-2xl border border-lilac-soft bg-white p-5 sm:p-8">
    <div>
      <h2 className="font-display text-xl text-ink">Payment Instructions</h2>
      <p className="mt-2 text-sm leading-6 text-ink/70">
        Transfer the full course fee using the account details below.
        Then continue to WhatsApp to send your registration details and
        attach your payment receipt.
      </p>
    </div>

    <div className="rounded-xl bg-lilac-cloud p-4">
      <p className="text-sm text-ink/60">Full course fee</p>
      <p className="mt-1 font-display text-3xl text-lilac-deep">
        {formatNaira(course.price)}
      </p>
    </div>

    {PAYMENT_ACCOUNTS.map((account) => (
      <div
        key={account.label}
        className="rounded-xl border border-lilac-soft p-4 text-sm"
      >
        <p className="font-medium text-ink">{account.label}</p>
        <p className="mt-2">{account.accountName}</p>
        <p>{account.bankName}</p>
        <p className="font-semibold">{account.accountNumber}</p>
      </div>
    ))}

    <div className="rounded-xl bg-lilac-cloud p-4 text-sm leading-6 text-ink/70">
      Your registration is not confirmed until Cooper Gloss verifies
      your full payment. Please attach your transfer receipt in the
      same WhatsApp conversation.
    </div>

    <button
      type="button"
      onClick={() => {
        const message = [
          "COOPER GLOSS TRAINING REGISTRATION",
          "",
          `Course: ${course.name}`,
          `Class: ${course.mode}`,
          `Fee: ${formatNaira(course.price)}`,
          `Name: ${details.firstName} ${details.lastName}`,
          `WhatsApp: ${details.phone}`,
          ...(details.email ? [`Email: ${details.email}`] : []),
          ...(isPhysical ? [`Preferred location: ${details.location}`] : []),
          "",
          "I am registering for this training. I will attach my bank-transfer receipt in this chat.",
        ].join("\n");

        window.open(
          buildWhatsAppEnquiryLink(message),
          "_blank",
          "noopener,noreferrer"
        );
      }}
      className="w-full rounded-full bg-[#25D366] px-6 py-3 font-medium text-white"
    >
      Continue to WhatsApp →
    </button>

    <button
      type="button"
      onClick={() => setStep("details")}
      className="w-full rounded-full border border-lilac-soft px-6 py-3 text-sm text-ink"
    >
      ← Back to Details
    </button>
  </section>
)}

      </div>
    </main>
  );
}
