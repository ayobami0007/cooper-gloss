
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PAYMENT_ACCOUNTS,
  formatNaira,
} from "@/lib/constants";
import { getTrainingItemById } from "@/lib/training";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";

const inputClass =
  "w-full rounded-xl border border-lilac-soft bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-lilac-deep focus:ring-2 focus:ring-lilac-soft";

export default function TrainingRegisterPage() {
  const [courseId, setCourseId] = useState("");
  const [step, setStep] = useState("details");

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCourseId(params.get("course") || "");
  }, []);

  const course = getTrainingItemById(courseId);
  const isPhysical = course?.mode === "Physical";

  const canContinue =
    details.firstName.trim() !== "" &&
    details.lastName.trim() !== "" &&
    details.phone.trim() !== "" &&
    (!isPhysical || details.location !== "");

  function updateDetails(event) {
    const { name, value } = event.target;

    setDetails((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleContinue(event) {
    event.preventDefault();

    if (canContinue) {
      setStep("payment");
    }
  }

  function handleWhatsApp() {
    const message = [
      "COOPER GLOSS TRAINING REGISTRATION",
      "",
      `Course: ${course.name}`,
      `Class: ${course.mode}`,
      `Fee: ${formatNaira(course.price)}`,
      `Name: ${details.firstName.trim()} ${details.lastName.trim()}`,
      `WhatsApp: ${details.phone.trim()}`,
      ...(details.email.trim()
        ? [`Email: ${details.email.trim()}`]
        : []),
      ...(isPhysical
        ? [`Preferred location: ${details.location}`]
        : []),
      "",
      "I am registering for this training. I will attach my bank-transfer receipt in this chat.",
    ].join("\n");

    window.open(
      buildWhatsAppEnquiryLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  if (!courseId) {
    return (
      <main className="min-h-[60vh] px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-2xl text-ink">
            Loading registration...
          </h1>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-[60vh] px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-2xl text-ink">
            Training option not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-ink/70">
            Please return to the training page and select a valid
            training option.
          </p>

          <Link
            href="/training"
            className="mt-6 inline-flex rounded-full bg-lilac-deep px-6 py-3 text-sm font-medium text-white"
          >
            Back to Training
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lilac-cloud/40 px-4 py-12 font-body text-ink sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/training"
          className="text-sm text-lilac-deep hover:underline"
        >
          ← Back to Training
        </Link>

        <div className="mt-6 rounded-2xl border border-lilac-soft bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-lilac-deep">
            Cooper Gloss Training
          </p>

          <h1 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {step === "details"
              ? "Training Registration"
              : "Payment Details"}
          </h1>

          <div className="mt-6 rounded-xl bg-lilac-cloud/70 p-4">
            <h2 className="font-display text-lg text-ink">
              {course.name}
            </h2>

            <p className="mt-1 text-sm text-ink/70">
              {course.mode} Class
            </p>

            <p className="mt-3 font-display text-2xl text-lilac-deep">
              {formatNaira(course.price)}
            </p>

            {isPhysical && (
              <p className="mt-2 text-sm leading-6 text-ink/70">
                Available in Ilorin or Malete. A starter kit is
                required for practical sessions. Contact Cooper Gloss
                to confirm the kit cost and arrangements.
              </p>
            )}

            {!isPhysical && (
              <p className="mt-2 text-sm leading-6 text-ink/70">
                Contact Cooper Gloss to confirm the online learning
                arrangements.
              </p>
            )}
          </div>

          {step === "details" ? (
            <form
              className="mt-7 space-y-5"
              onSubmit={handleContinue}
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium"
                >
                  First name *
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  value={details.firstName}
                  onChange={updateDetails}
                  autoComplete="given-name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium"
                >
                  Last name *
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  value={details.lastName}
                  onChange={updateDetails}
                  autoComplete="family-name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  WhatsApp phone number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={details.phone}
                  onChange={updateDetails}
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="e.g. 08012345678"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address (optional)
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={details.email}
                  onChange={updateDetails}
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>

              {isPhysical && (
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium"
                  >
                    Preferred training location *
                  </label>

                  <select
                    id="location"
                    name="location"
                    value={details.location}
                    onChange={updateDetails}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a location</option>
                    <option value="Ilorin">Ilorin</option>
                    <option value="Malete">Malete</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={!canContinue}
                className="w-full rounded-full bg-lilac-deep px-6 py-3 font-medium text-white transition-colors hover:bg-lilac-deep/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue to Payment →
              </button>
            </form>
          ) : (
            <section className="mt-7">
              <h2 className="font-display text-xl text-ink">
                Bank Transfer
              </h2>

              <p className="mt-2 text-sm leading-6 text-ink/70">
                Please transfer the full training fee using the
                account details below. After transferring, continue
                to WhatsApp and attach your payment receipt.
              </p>

              <div className="mt-5 space-y-4">
                {PAYMENT_ACCOUNTS.map((account) => (
                  <div
                    key={account.label}
                    className="rounded-xl border border-lilac-soft p-4"
                  >
                    <p className="font-medium text-ink">
                      {account.label}
                    </p>

                    <p className="mt-2 text-sm text-ink/70">
                      Account name: {account.accountName}
                    </p>

                    <p className="text-sm text-ink/70">
                      Bank: {account.bankName}
                    </p>

                    <p className="mt-1 break-all font-semibold text-ink">
                      Account number: {account.accountNumber}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-ink/70">
                Your registration is confirmed only after Cooper
                Gloss verifies your payment. Clicking below opens
                WhatsApp with your registration details; you must
                send the message and attach your receipt yourself.
              </p>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="mt-6 w-full rounded-full bg-lilac-deep px-6 py-3 font-medium text-white transition-colors hover:bg-lilac-deep/90"
              >
                Continue to WhatsApp →
              </button>

              <button
                type="button"
                onClick={() => setStep("details")}
                className="mt-3 w-full rounded-full border border-lilac-soft px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-lilac-cloud"
              >
                ← Back to Details
              </button>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
