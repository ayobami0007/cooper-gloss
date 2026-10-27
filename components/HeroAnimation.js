
"use client";

import { useEffect, useState } from "react";

export default function HeroAnimation() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.classList.add("hero-animations-ready");

    return () => {
      document.documentElement.classList.remove("hero-animations-ready");
    };
  }, [ready]);

  return null;
}
