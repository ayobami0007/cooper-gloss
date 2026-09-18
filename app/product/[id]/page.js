import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import ProductDetailInteractive from "@/components/ProductDetailInteractive";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 grid md:grid-cols-2 gap-10">
      <div className="aspect-square relative bg-lilac-cloud rounded-2xl overflow-hidden">
        <Image
          src={product.images?.[0] ?? "/products/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 40vw, 90vw"
        />
      </div>

      <div>
        <h1 className="font-display text-3xl text-ink mb-4">{product.name}</h1>
        <ProductDetailInteractive product={product} />
      </div>
    </div>
  );
}
