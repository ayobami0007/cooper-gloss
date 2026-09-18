import Link from "next/link";
import Image from "next/image";
import { formatNaira } from "@/lib/constants";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-lilac-soft hover:border-lilac transition-colors"
    >
      <div className="aspect-square relative bg-lilac-cloud">
        <Image
          src={product.images?.[0] ?? "/products/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>
      <div className="p-4">
        <p className="font-body text-sm text-ink">{product.name}</p>
        <p className="font-display text-base text-lilac-deep mt-1">
          {formatNaira(product.price)}
        </p>
      </div>
    </Link>
  );
}
