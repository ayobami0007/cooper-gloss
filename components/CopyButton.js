"use client";

import { useState } from "react";

export default function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — fail silently, the number is
      // still visible on screen for manual copying.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-xs px-2 py-1 rounded-md border border-lilac-soft text-lilac-deep hover:bg-lilac-soft/40 transition-colors shrink-0"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
