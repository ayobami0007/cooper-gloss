"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatNaira } from "@/lib/constants";
import QuantitySelector from "./QuantitySelector";

export default function ProductDetailInteractive({ product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(product, { qty, variant: product.shade ?? null });
  }

  return (
    <div className="space-y-6">
      <p className="font-display text-2xl text-lilac-deep">
        {formatNaira(product.price)}
      </p>

      {product.shade && (
        <div>
          <p className="font-body text-sm text-ink mb-1">Shade: {product.shade}</p>
        </div>
      )}

      {product.description ? (
        <p className="font-body text-sm text-ink/80 leading-relaxed">
          {product.description}
        </p>
      ) : (
        <p className="font-body text-sm text-ink/50 italic">
          Full description coming soon.
        </p>
      )}

      <div className="flex items-center gap-4">
        <QuantitySelector qty={qty} onChange={setQty} />
      </div>

      <button
        onClick={handleAdd}
        className="w-full sm:w-auto px-8 py-3 rounded-full bg-lilac-deep text-white font-body font-medium hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>
    </div>
  );
}