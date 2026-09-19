"use client";

import { CartProvider } from "@/lib/cart-context";
import CartToast from "@/components/CartToast";

export default function CartProviderShell({ children }) {
  return (
    <CartProvider>
      {children}
      <CartToast />
    </CartProvider>
  );
}