"use client";

import { useCart } from "@/lib/cart-context";
import { NIGERIAN_STATES, BRANDS } from "@/lib/constants";
import OrderSummary from "@/components/OrderSummary";

const inputClass =
  "w-full border border-lilac-soft rounded-lg px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-lilac";

export default function DetailsStep({ details, onChange, onBack, onContinue }) {
  const { items } = useCart();

  // Training enrollments don't need a delivery address. Only ask for
  // one if the bag has at least one item that actually ships.
  const needsDelivery = items.some((item) => item.brand !== BRANDS.TRAINING);

  function update(field, value) {
    onChange({ ...details, [field]: value });
  }

  const canContinue =
    details.firstName?.trim() && details.lastName?.trim() && details.phone?.trim() &&
    (!needsDelivery || (details.street?.trim() && details.city?.trim() && details.state?.trim()));

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white border border-lilac-soft rounded-2xl p-6">
          <h2 className="font-display text-lg text-ink mb-4">Personal Information</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-ink/70">First Name *</label>
              <input
                className={inputClass}
                value={details.firstName || ""}
                onChange={(e) => update("firstName", e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-ink/70">Last Name *</label>
              <input
                className={inputClass}
                value={details.lastName || ""}
                onChange={(e) => update("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs font-medium text-ink/70">Phone Number (WhatsApp) *</label>
            <input
              className={inputClass}
              placeholder="+234 800 000 0000"
              value={details.phone || ""}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink/70">Email Address</label>
            <input
              className={inputClass}
              placeholder="you@email.com (optional)"
              value={details.email || ""}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
        </div>

        {needsDelivery && (
          <div className="bg-white border border-lilac-soft rounded-2xl p-6">
            <h2 className="font-display text-lg text-ink mb-4">Delivery Address</h2>
            <div className="mb-4">
              <label className="text-xs font-medium text-ink/70">Street Address *</label>
              <input
                className={inputClass}
                placeholder="e.g. 12 Broad Street, Victoria Island"
                value={details.street || ""}
                onChange={(e) => update("street", e.target.value)}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-medium text-ink/70">City *</label>
                <input
                  className={inputClass}
                  value={details.city || ""}
                  onChange={(e) => update("city", e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ink/70">State *</label>
                <select
                  className={inputClass}
                  value={details.state || ""}
                  onChange={(e) => update("state", e.target.value)}
                >
                  <option value="">Select state...</option>
                  {NIGERIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-ink/70">Additional Delivery Notes</label>
              <textarea
                className={inputClass}
                rows={2}
                placeholder="Landmark, building colour, any special instructions..."
                value={details.notes || ""}
                onChange={(e) => update("notes", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <OrderSummary items={items} />
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-full border border-lilac-soft text-ink font-body text-sm"
          >
            ← Back
          </button>
          <button
            onClick={onContinue}
            disabled={!canContinue}
            className="flex-1 py-3 rounded-full bg-lilac-deep text-white font-body text-sm font-medium disabled:opacity-40"
          >
            Choose Payment →
          </button>
        </div>
      </div>
    </div>
  );
}