"use client";

import { formatNaira, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD, BRANDS } from "@/lib/constants";

export default function OrderSummary({ items, title = "Order Summary", note }) {
  const needsDelivery = items.some((item) => item.brand !== BRANDS.TRAINING);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const showFreeDeliveryBanner =
    needsDelivery && FREE_DELIVERY_THRESHOLD && subtotal < FREE_DELIVERY_THRESHOLD;
  const total = subtotal + (needsDelivery ? DELIVERY_FEE ?? 0 : 0);

  return (
    <div className="bg-white border border-lilac-soft rounded-2xl p-6 font-body text-sm">
      <h2 className="font-display text-lg text-ink mb-4">{title}</h2>

      <ul className="space-y-2 mb-4">
        {items.map((item) => (
          <li key={item.key} className="flex justify-between text-ink/80">
            <span className="truncate pr-2">
              {item.name} ×{item.qty}
            </span>
            <span className="shrink-0">{formatNaira(item.price * item.qty)}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-lilac-soft pt-3 space-y-1 text-ink/70">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatNaira(subtotal)}</span>
        </div>
        {needsDelivery && (
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>{DELIVERY_FEE ? formatNaira(DELIVERY_FEE) : "To be confirmed"}</span>
          </div>
        )}
      </div>

      {showFreeDeliveryBanner && (
        <p className="bg-lilac-cloud text-lilac-deep text-xs rounded-lg px-3 py-2 mt-3">
          Add {formatNaira(FREE_DELIVERY_THRESHOLD - subtotal)} more for free delivery!
        </p>
      )}

      <div className="flex justify-between font-display text-lg text-ink mt-4 pt-3 border-t border-lilac-soft">
        <span>Total</span>
        <span className="text-lilac-deep">{formatNaira(total)}</span>
      </div>

      {note && (
        <p className="text-xs text-ink/60 bg-lilac-cloud rounded-lg px-3 py-2 mt-4">
          {note}
        </p>
      )}
    </div>
  );
}