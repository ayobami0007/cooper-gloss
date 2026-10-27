
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect the visitor's motion preference.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If animation is unnecessary or unsupported, show content immediately.
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    let observer;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      observer.observe(el);

      // Only enable the hidden starting state after observation is set up.
      setReady(true);
    } catch {
      // If setup fails, leave the content visible.
      observer?.disconnect();
      setShown(true);
    }

    return () => observer?.disconnect();
  }, []);

  const shouldHide = ready && !shown;

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: shouldHide ? "0ms" : `${delay}ms`,
      }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        shouldHide
          ? "translate-y-6 opacity-0"
          : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
