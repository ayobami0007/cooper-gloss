"use client";

import { BRANDS, BRAND_LABELS } from "@/lib/constants";

export default function ShopTabs({ active, onChange }) {
  const tabs = [BRANDS.COOPER_GLOSS, BRANDS.HAIR_BONNETS];

  return (
    <div role="tablist" aria-label="Shop by brand" className="flex gap-2 mb-6">
      {tabs.map((brand) => {
        const isActive = brand === active;
        return (
          <button
            key={brand}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(brand)}
            className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
              isActive
                ? "bg-lilac-deep text-white"
                : "bg-white text-ink border border-lilac-soft hover:border-lilac"
            }`}
          >
            {BRAND_LABELS[brand]}
          </button>
        );
      })}
    </div>
  );
}
