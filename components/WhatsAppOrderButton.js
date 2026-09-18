"use client";

import { useCart } from "@/lib/cart-context";
import { buildWhatsAppOrderLink } from "@/lib/whatsapp";

export default function WhatsAppOrderButton() {
  const { items } = useCart();

  if (items.length === 0) return null;

  return (
    <a
      href={buildWhatsAppOrderLink(items)}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-lilac-deep text-white font-body font-medium py-3 rounded-full hover:opacity-90 transition-opacity"
    >
      Order via WhatsApp
    </a>
  );
}
