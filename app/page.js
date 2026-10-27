
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/lib/products";
import Hero from "@/components/Hero";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero: visible immediately */}
      <Hero />

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <Reveal>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-display text-2xl text-ink">
              Featured
            </h2>

            <Link
              href="/shop"
              className="font-body text-sm text-lilac-deep transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-deep"
            >
              Shop All Products
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ProductGrid products={featured} />
        </Reveal>
      </section>

      {/* Training preview */}
      <section className="border-y border-lilac-soft bg-white">
        <div className="mx-auto max-w-2xl px-4 py-14 text-center">
          <Reveal>
            <h2 className="mb-3 font-display text-2xl text-ink">
              Learn to make lip gloss
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mx-auto mb-6 max-w-md font-body text-ink/70">
              Cooper Gloss runs lip-gloss-making training for anyone who wants
              to learn the craft — online or in person.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <Link
              href="/training"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-lilac-deep px-6 py-3 font-body font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-lilac hover:shadow-md active:translate-y-0 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-deep"
            >
              See Training Details
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
