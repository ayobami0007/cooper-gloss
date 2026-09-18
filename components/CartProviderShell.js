"use client";

import { CartProvider } from "@/lib/cart-context";

export default function CartProviderShell({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
