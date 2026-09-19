"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartToast() {
  const { toast, dismissToast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 toast-enter px-4 w-full max-w-sm">
      <div className="bg-ink text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-3 shadow-lg text-sm font-body">
        <span className="truncate">{toast.message}</span>
        <Link
          href="/cart"
          onClick={dismissToast}
          className="bg-white text-ink px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
        >
          View Bag
        </Link>
      </div>
    </div>
  );
}