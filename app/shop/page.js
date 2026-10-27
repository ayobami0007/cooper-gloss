
"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import ShopTabs from "@/components/ShopTabs";
import Reveal from "@/components/ui/Reveal";
import { getProductsByBrand } from "@/lib/products";
import { BRANDS } from "@/lib/constants";

const PRODUCTS_PER_PAGE = 8;

export default function ShopPage() {
  const [brand, setBrand] = useState(BRANDS.COOPER_GLOSS);
  const [page, setPage] = useState(1);

  const products = getProductsByBrand(brand);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  function handleBrandChange(newBrand) {
    setBrand(newBrand);
    setPage(1);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Reveal>
        <h1 className="mb-6 font-display text-3xl text-ink">
          Shop
        </h1>
      </Reveal>

      <ShopTabs active={brand} onChange={handleBrandChange} />

      <Reveal>
        <ProductGrid products={visibleProducts} />
      </Reveal>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((current) => current - 1)}
            disabled={page === 1}
            className="rounded-full border border-lilac-soft px-5 py-2 font-body text-sm text-ink transition-colors hover:bg-lilac-cloud disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="font-body text-sm text-ink/70">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setPage((current) => current + 1)}
            disabled={page === totalPages}
            className="rounded-full border border-lilac-soft px-5 py-2 font-body text-sm text-ink transition-colors hover:bg-lilac-cloud disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
