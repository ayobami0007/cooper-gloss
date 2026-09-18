"use client";

import { useCart } from "@/lib/cart-context";
import { PAYMENT_ACCOUNTS, DELIVERY_FEE, BRANDS } from "@/lib/constants";
import { buildWhatsAppOrderLink } from "@/lib/whatsapp";
import OrderSummary from "@/components/OrderSummary";
import CopyButton from "@/components/CopyButton";

const METHODS = [
  {
    id: "whatsapp",
    label: "Order via WhatsApp",
    description:
      "Send your order details to us on WhatsApp. We'll confirm your order and send payment instructions.",
  },
  {
    id: "bank_transfer",
    label: "Bank Transfer",
    description:
      "Transfer to our account before delivery. We'll confirm and dispatch once payment is received.",
  },
];

const METHOD_LABELS = {
  whatsapp: "Order via WhatsApp",
  bank_transfer: "Bank Transfer",
};

export default function PaymentStep({ details, method, onMethodChange, onBack }) {
  const { items, clearCart } = useCart();
  const needsDelivery = items.some((item) => item.brand !== BRANDS.TRAINING);

  const orderLink = buildWhatsAppOrderLink(items, {
    customer: details,
    deliveryFee: needsDelivery ? DELIVERY_FEE : 0,
    paymentMethod: METHOD_LABELS[method] ?? undefined,
  });

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white border border-lilac-soft rounded-2xl p-6">
          <h2 className="font-display text-lg text-ink mb-4">Payment Method</h2>
          <div className="space-y-3">
            {METHODS.map((m) => (
              <label
                key={m.id}
                className={`flex gap-3 p-4 rounded-xl border cursor-pointer ${
                  method === m.id
                    ? "border-lilac-deep bg-lilac-soft/30"
                    : "border-lilac-soft"
                }`}
              >
                <input
                  type="radio"
                  name="payment-method"
                  className="mt-1"
                  checked={method === m.id}
                  onChange={() => onMethodChange(m.id)}
                />
                <div>
                  <p className="font-body text-sm font-medium text-ink">{m.label}</p>
                  <p className="font-body text-xs text-ink/60 mt-1">{m.description}</p>
                </div>
              </label>
            ))}
          </div>

          {method === "bank_transfer" && (
            <div className="mt-4 space-y-3">
              {PAYMENT_ACCOUNTS.map((acc) => (
                <div
                  key={acc.label}
                  className="bg-lilac-cloud rounded-xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="text-sm">
                    <p className="text-xs text-ink/60 uppercase tracking-wide">{acc.label}</p>
                    <p className="font-medium text-ink">{acc.accountName}</p>
                    <p className="text-ink/80">{acc.bankName} — {acc.accountNumber}</p>
                  </div>
                  <CopyButton value={acc.accountNumber} />
                </div>
              ))}
              <p className="text-xs text-ink/60">
                After transferring, click "Send Order via WhatsApp" below and send us
                your payment receipt so we can confirm and dispatch quickly.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white border border-lilac-soft rounded-2xl p-6 font-body text-sm text-ink/80 space-y-1">
          <h2 className="font-display text-lg text-ink mb-2">Order Review</h2>
          <p><span className="text-ink/50">Name:</span> {details.firstName} {details.lastName}</p>
          <p><span className="text-ink/50">Phone:</span> {details.phone}</p>
          {details.email && <p><span className="text-ink/50">Email:</span> {details.email}</p>}
          {details.street && (
            <p><span className="text-ink/50">Delivery Address:</span> {details.street}, {details.city}, {details.state}</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <OrderSummary
          items={items}
          title="Final Summary"
          note="Your order will be sent to us via WhatsApp for confirmation."
        />
        
         < a href={orderLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => clearCart()}
          className="block w-full text-center bg-[#25D366] text-white font-body font-medium py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Send Order via WhatsApp
        </a>
        <button
          onClick={onBack}
          className="w-full py-3 rounded-full border border-lilac-soft text-ink font-body text-sm"
        >
          ← Back to Details
        </button>
      </div>
    </div>
  );
}