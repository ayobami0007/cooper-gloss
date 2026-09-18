import Link from "next/link";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Everyday shine, made simple.
          </h1>
          <p className="font-body text-ink/70 mt-4 max-w-md">
            Cooper Gloss makes lip gloss and beauty essentials for people who
            want to look good without the fuss — plus training for anyone who
            wants to learn how it's made.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-full bg-lilac-deep text-white font-body font-medium hover:opacity-90 transition-opacity"
            >
              Shop Products
            </Link>
            <Link
              href="/training"
              className="px-6 py-3 rounded-full border border-lilac-deep text-lilac-deep font-body font-medium hover:bg-lilac-soft/40 transition-colors"
            >
              Explore Training
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-96 h-96 ">
           
            <div className="absolute inset-0 rounded-[62%_38%_53%_47%/41%_51%_49%_59%] overflow-hidden bg-lilac-soft">
              <Image
                src="/products/Sugar pop glosses.jpeg"
                alt="Cooper Gloss product photo coming soon"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-2xl text-ink">Featured</h2>
          <Link href="/shop" className="font-body text-sm text-lilac-deep hover:underline">
            Shop All Products
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* Training preview */}
      <section className="bg-white border-y border-lilac-soft">
        <div className="mx-auto max-w-2xl px-4 py-14 text-center">
          <h2 className="font-display text-2xl text-ink mb-3">
            Learn to make lip gloss
          </h2>
          <p className="font-body text-ink/70 mb-6 max-w-md mx-auto">
            Cooper Gloss runs lip-gloss-making training for anyone who wants
            to learn the craft — online or in person.
          </p>
          <Link
            href="/training"
            className="px-6 py-3 rounded-full bg-lilac-deep text-white font-body font-medium hover:opacity-90 transition-opacity inline-block"
          >
            See Training Details
          </Link>
        </div>
      </section>
    </div>
  );
}
