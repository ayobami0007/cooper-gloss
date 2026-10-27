
import Link from "next/link";
import Image from "next/image";
import { formatNaira } from "@/lib/constants";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-lilac-soft bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-lilac hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-deep focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="relative aspect-square overflow-hidden bg-lilac-cloud">
        <Image
          src={product.images?.[0] ?? "/products/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>

      <div className="p-4">
        <p className="font-body text-sm text-ink">
          {product.name}
        </p>

        <p className="mt-1 font-display text-base text-lilac-deep">
          {formatNaira(product.price)}
        </p>
      </div>
    </Link>
  );
}
