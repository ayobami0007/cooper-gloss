import Link from "next/link";
import { SOCIAL, WHATSAPP_NUMBER_LOCAL } from "@/lib/constants";

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
          <ul className="space-y-1">
            <li>WhatsApp: {WHATSAPP_NUMBER_LOCAL}</li>
            <li>TikTok: @{SOCIAL.tiktok}</li>
            {SOCIAL.instagram && <li>Instagram: @{SOCIAL.instagram}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-lilac-soft py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Cooper Gloss. All rights reserved.
      </div>
    </footer>
  );
}
