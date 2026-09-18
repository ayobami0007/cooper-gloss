"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import ShopTabs from "@/components/ShopTabs";
import { getProductsByBrand } from "@/lib/products";
import { BRANDS } from "@/lib/constants";

export default function ShopPage() {
  const [brand, setBrand] = useState(BRANDS.COOPER_GLOSS);
  const products = getProductsByBrand(brand);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl text-ink mb-6">Shop</h1>
      <ShopTabs active={brand} onChange={setBrand} />
      <ProductGrid products={products} />
    </div>
  );
}
