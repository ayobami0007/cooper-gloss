import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About Us — Cooper Gloss",
  description:
    "Discover Cooper Gloss, a Nigerian lip gloss and lip-care brand making everyday lip care simple, affordable, and enjoyable.",
};

export default function AboutPage() {
  return (
    <main className="bg-lilac-cloud">
      {/* Page introduction */}
      <section className="border-b border-lilac-soft bg-white px-4 py-14 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.24em] text-lilac-deep">
              Get to know us
            </p>

            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              About Cooper Gloss
            </h1>

            <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-ink/70 sm:text-lg">
              Gloss It. Care For It. — lip gloss and lip-care essentials
              for your everyday routine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand story with portrait */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Portrait */}
          <Reveal className="w-full">
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-lilac-soft">
              <Image
                src="/products/AboutImage.jpeg"
                alt="Person holding a Cooper Gloss lip gloss"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
          </Reveal>

          {/* Story text */}
          <Reveal delay={100}>
            <div>
              <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-lilac-deep">
                Our story
              </p>

              <h2 className="mb-5 font-display text-3xl leading-tight text-ink sm:text-4xl">
                More than just lip gloss
              </h2>

              <div className="space-y-4 font-body leading-8 text-ink/75">
                <p>
                  Cooper Gloss is a Nigerian lip gloss and lip-care brand
                  dedicated to making everyday lip care affordable,
                  accessible, and enjoyable.
                </p>

                <p>
                  We believe lip care goes beyond lip gloss. Our collection
                  includes lip glosses, lip moisturizers, lip scrubs, lip oils,
                  and other lip-care essentials for your routine.
                </p>

                <p>
                  From your everyday lip routine to the finishing touch on
                  your favourite lip combo, Cooper Gloss aims to make lip care
                  simple, affordable, and enjoyable.
                </p>
              </div>

              <Link
                href="/shop"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-lilac-deep px-7 py-3 font-body text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lilac hover:shadow-md active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-deep"
              >
                Explore Our Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product photography */}
      <section className="border-y border-lilac-soft bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-14">
          {/* Everyday lip care text */}
          <Reveal className="order-2 md:order-1">
            <div>
              <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-lilac-deep">
                Everyday lip care
              </p>

              <h2 className="mb-5 font-display text-3xl leading-tight text-ink sm:text-4xl">
                A little care. A little glow.
              </h2>

              <p className="font-body leading-8 text-ink/75">
                Lip care isn't just for women — everyone deserves to enjoy
                caring for their lips. Whether you're keeping your routine
                simple or finishing a favourite lip combo, Cooper Gloss is
                here to make the experience enjoyable.
              </p>

              <Link
                href="/shop"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-lilac-deep px-7 py-3 font-body text-sm font-medium text-lilac-deep transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lilac-cloud hover:shadow-sm active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac-deep"
              >
                Find Your Favourites
              </Link>
            </div>
          </Reveal>

          {/* Product image */}
          <Reveal className="order-1 md:order-2" delay={100}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-lilac-cloud">
              <Image
                src="/products/Sugar pop glosses.jpeg"
                alt="Cooper Gloss lip gloss set"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand statement */}
      <section className="px-4 py-14 text-center sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-3xl italic leading-snug text-lilac-deep sm:text-4xl">
              Soft lips. Sweet scents. Everyday glow.
            </p>

            <p className="mt-4 font-body text-sm text-ink/60">
              Gloss It. Care For It.
            </p>

            <p className="mt-8 font-body text-sm text-ink/70">
              Based in Ilorin, Nigeria
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}