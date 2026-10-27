import Link from "next/link";
import { SOCIAL, WHATSAPP_NUMBER, WHATSAPP_NUMBER_LOCAL } from "@/lib/constants";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-lilac-soft mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3 font-body text-sm text-ink">
        <div>
          <p className="font-display text-lg mb-2">Cooper Gloss</p>
          <p className="text-ink/70">
            Lip gloss and beauty essentials, made for everyday shine.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">Explore</p>
          <ul className="space-y-1">
            <li><Link href="/shop" className="hover:text-lilac-deep">Shop</Link></li>
            <li><Link href="/training" className="hover:text-lilac-deep">Training</Link></li>
            <li><Link href="/faq" className="hover:text-lilac-deep">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-lilac-deep">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Get in touch</p>
        <ul className="space-y-3">
  <li>
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 transition-colors hover:text-lilac-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-deep"
    >
      <FaWhatsapp size={17} aria-hidden="true" />
      <span>WhatsApp: {WHATSAPP_NUMBER_LOCAL}</span>
    </a>
  </li>

  {SOCIAL.tiktok && (
    <li>
      <a
        href={`https://www.tiktok.com/@${SOCIAL.tiktok.replace(/^@/, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-colors hover:text-lilac-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-deep"
      >
        <FaTiktok size={17} aria-hidden="true" />
        <span>
          TikTok: @{SOCIAL.tiktok.replace(/^@/, "")}
        </span>
      </a>
    </li>
  )}

  {/* {SOCIAL.instagram && (
    <li>
      <a
        href={`https://www.instagram.com/${SOCIAL.instagram.replace(/^@/, "")}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-colors hover:text-lilac-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-deep"
      >
        <FaInstagram size={17} aria-hidden="true" />
        <span>
          Instagram: @{SOCIAL.instagram.replace(/^@/, "")}
        </span>
      </a>
    </li>
  )} */}
</ul>
        </div>
      </div>

      <div className="border-t border-lilac-soft py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Cooper Gloss. All rights reserved.
      </div>
    </footer>
  );
}
