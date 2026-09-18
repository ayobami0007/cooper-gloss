"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatNaira, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD, BRANDS } from "@/lib/constants";
import QuantitySelector from "@/components/QuantitySelector";

export default function BagStep({ onContinue }) {
  const { items, updateQty, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="font-display text-2xl text-ink mb-3">Your bag is empty</h1>
        <p className="font-body text-ink/60 mb-6">
          Add something from the shop to get started.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 rounded-full bg-lilac-deep text-white font-body font-medium"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  const subtotal = total;
  const needsDelivery = items.some((item) => item.brand !== BRANDS.TRAINING);
  const showFreeDeliveryBanner =
    needsDelivery && FREE_DELIVERY_THRESHOLD && subtotal < FREE_DELIVERY_THRESHOLD;
  const grandTotal = subtotal + (needsDelivery ? DELIVERY_FEE ?? 0 : 0);

  return (
    <div>
      <h1 className="font-display text-2xl text-ink mb-6">Review Your Bag</h1>

      <ul className="space-y-4 mb-6">
        {items.map((item) => (
          <li
            key={item.key}
            className="flex gap-4 items-center bg-white border border-lilac-soft rounded-2xl p-4"
          >
            <div className="w-20 h-20 relative bg-lilac-cloud rounded-xl overflow-hidden shrink-0">
              <Image
                src={item.image ?? "/products/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-body text-sm text-ink truncate">{item.name}</p>
              {item.variant && (
                <p className="font-body text-xs text-ink/60">Shade: {item.variant}</p>
              )}
              <p className="font-body text-sm text-lilac-deep mt-1">
                {formatNaira(item.price)}
              </p>
            </div>

            <QuantitySelector
              qty={item.qty}
              onChange={(qty) => updateQty(item.key, qty)}
            />

            <button
              onClick={() => removeItem(item.key)}
              aria-label={`Remove ${item.name} from cart`}
              className="text-ink/40 hover:text-ink text-sm ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="bg-white border border-lilac-soft rounded-2xl p-6 space-y-2 font-body text-sm">
        <div className="flex justify-between text-ink/70">
          <span>Subtotal</span>
          <span>{formatNaira(subtotal)}</span>
        </div>
        {needsDelivery && (
          <div className="flex justify-between text-ink/70">
            <span>Delivery</span>
            <span>{DELIVERY_FEE ? formatNaira(DELIVERY_FEE) : "To be confirmed"}</span>
          </div>
        )}

        {showFreeDeliveryBanner && (
          <p className="bg-lilac-cloud text-lilac-deep text-xs rounded-lg px-3 py-2">
            Add {formatNaira(FREE_DELIVERY_THRESHOLD - subtotal)} more for free delivery!
          </p>
        )}

        <div className="flex justify-between font-display text-lg text-ink pt-3 border-t border-lilac-soft">
          <span>Total</span>
          <span className="text-lilac-deep">{formatNaira(grandTotal)}</span>
        </div>

        <button
          onClick={onContinue}
          className="w-full mt-2 py-3 rounded-full bg-lilac-deep text-white font-medium hover:opacity-90 transition-opacity"
        >
          Continue to Details →
        </button>
      </div>
    </div>
  );
}