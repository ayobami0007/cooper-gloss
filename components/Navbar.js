"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/training", label: "Training" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-lilac-cloud/90 backdrop-blur border-b border-lilac-soft">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo.jpg" alt="Cooper Gloss" width={36} height={36} className="rounded-full" />
          <span className="font-display text-lg text-ink">Cooper Gloss</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-body text-sm text-ink">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-lilac-deep transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="relative font-body text-sm text-ink hover:text-lilac-deep transition-colors"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-lilac-deep text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-lilac-soft bg-lilac-cloud">
          <ul className="flex flex-col px-4 py-2 font-body text-sm text-ink">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
