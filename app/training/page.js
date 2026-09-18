"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { TRAINING_ITEMS } from "@/lib/training";
import { formatNaira } from "@/lib/constants";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";

const CURRICULUM = [
  "How to make different types of lip gloss",
  "How to make clear, pigmented, glitter, and shimmer glosses",
  "How to make color-changing lip gloss",
  "How to make lip scrub",
  "How to make lip balm",
  "How to formulate moisturizing lip care products",
];

const INCLUDED = [
  "Free trusted vendor contacts",
  "Raw material recommendations",
];

export default function TrainingPage() {
  const { addItem } = useCart();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(null);

  const enquiryLink = buildWhatsAppEnquiryLink(
    "Hi Cooper Gloss, I'd like to know more about the lip-gloss-making training."
  );

  function handleEnroll(item) {
    addItem(item, { qty: 1, variant: item.shade });
    setJustAdded(item.id);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 font-body text-ink text-center">
      <p className="font-display italic text-lilac-deep text-lg mb-2">
        Gloss It. Care For It.
      </p>

      <h1 className="font-display text-3xl md:text-4xl mb-3">
        Lip-Gloss-Making Training
      </h1>

      <p className="text-ink/70 max-w-xl mx-auto mb-10">
        Learn to make lip gloss and lip care products the Cooper Gloss way —
        online from anywhere, or face-to-face in Ilorin or Malete. Enroll
        below and we'll confirm your spot on WhatsApp.
      </p>

      {/* Class types */}
      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {TRAINING_ITEMS.map((item) => {
          const isThisAdded = justAdded === item.id;

          return (
            <div
              key={item.id}
              className="bg-white border border-lilac-soft rounded-2xl p-8 w-full sm:w-72"
            >
              <h2 className="font-display text-xl mb-2">
                {item.name.replace("Cooper Gloss Training — ", "")}
              </h2>

              <p className="text-sm text-ink/60 mb-4">
                {item.shade}
              </p>

              <p className="font-display text-2xl text-lilac-deep mb-6">
                {formatNaira(item.price)}
              </p>

              <button
                onClick={() => handleEnroll(item)}
                className="w-full py-3 rounded-full bg-lilac-deep text-white font-medium hover:opacity-90 transition-opacity"
              >
                {isThisAdded ? "Added ✓" : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Added to bag */}
      {justAdded && (
        <div className="bg-lilac-cloud rounded-2xl p-4 mb-14 max-w-md mx-auto">
          <p className="text-sm text-ink/80 mb-3">
            Added to your bag.
          </p>

          <button
            onClick={() => router.push("/cart")}
            className="px-6 py-2 rounded-full bg-lilac-deep text-white text-sm font-medium"
          >
            Go to Bag →
          </button>
        </div>
      )}

      {/* Curriculum */}
      <section className="mb-14">
        <h2 className="font-display text-2xl mb-6">
          What You'll Learn
        </h2>

        <ul className="max-w-md mx-auto space-y-3 text-left">
          {CURRICULUM.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-lilac-deep mt-1">✓</span>
              <span className="text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What's included */}
      <section className="mb-14">
        <h2 className="font-display text-2xl mb-6">
          What's Included
        </h2>

        <ul className="max-w-md mx-auto space-y-3 text-left">
          {INCLUDED.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-lilac-deep mt-1">✓</span>
              <span className="text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* WhatsApp enquiry */}
      <p className="text-sm text-ink/60 mb-2">
        Still have a question first?
      </p>

      <a
        href={enquiryLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 rounded-full border border-lilac-deep text-lilac-deep font-medium hover:bg-lilac-soft/40 transition-colors"
      >
        Ask a Quick Question on WhatsApp
      </a>

     
    </div>
  );
}