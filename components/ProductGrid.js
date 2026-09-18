import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <p className="font-body text-sm text-ink/60 py-12 text-center">
        No products here yet — check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
