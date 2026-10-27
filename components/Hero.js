
import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "@/components/HeroAnimation";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-lilac-cloud text-white">
       <HeroAnimation />
      {/* Hero images */}
      <div className="grid h-[460px] grid-cols-1 sm:h-[520px] md:h-[480px] md:grid-cols-2 lg:h-[540px]">
        {/* Portrait: mobile and left side of desktop */}
        <div className="relative overflow-hidden">
          <Image
            src="/products/heroLip.jpeg"
            alt="Person holding a lip gloss"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* Product image: desktop only */}
        <div className="relative hidden overflow-hidden md:block">
          <Image
            src="/products/3in1-set-choco-barbie-choco-gloss.jpeg"
            alt="Cooper Gloss lip gloss set"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Image overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent md:bg-black/10" />

      {/* Shared hero content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center px-5 pb-8 text-center md:items-center md:px-6 md:pb-0">
        <div className="pointer-events-auto w-full max-w-3xl">
          <p className="hero-fade-up mb-3 text-[10px] font-medium uppercase tracking-[0.22em] sm:text-xs md:mb-4 md:tracking-[0.24em]">
            Discover Cooper Gloss
          </p>

          <h1 className="hero-fade-up text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Gloss It.
            <br />
            <span className="font-display italic">Care For It.</span>
          </h1>

          {/* Calls to action */}
          <div className="hero-fade-up-delay mt-5 flex w-full flex-col justify-center gap-3 sm:flex-row md:mt-7">
            <Link
              href="/shop"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-lilac-deep px-6 py-3 text-sm font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-lilac hover:shadow-md active:translate-y-0 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-48 sm:px-7"
            >
              Shop Products
            </Link>

            <Link
              href="/training"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-0 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-48 sm:px-7"
            >
              Explore Training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
