
"use client";

import { useState } from "react";

const FAQ_SECTIONS = [
  {
    title: "Ordering",
    items: [
      {
        q: "How do I place an order?",
        a: 'Add products to your cart, then tap "Order via WhatsApp" to send your order details directly to us.',
      },
      {
        q: "Can I order through WhatsApp directly?",
        a: "Yes. You can send your order to us through WhatsApp using the cart on our website.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "How do I pay?",
        a: "After sending your order on WhatsApp, we will confirm your order and provide payment instructions.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "Where do you deliver, and how long does it take?",
        a: "Please contact us on WhatsApp to confirm delivery locations, fees, and estimated delivery times.",
      },
    ],
  },
  {
    title: "Returns / Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "Please contact us before placing an order if you have questions about returns or exchanges. Our policy will be confirmed by the business.",
      },
    ],
  },
  {
    title: "Training",
    items: [
      {
        q: "How do I register for training?",
        a: "Use the Enquire About Training button on the Training page to contact us on WhatsApp for registration details.",
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState([]);

  function toggleItem(id) {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 font-body text-ink sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          Need a little help?
        </p>

        <h1 className="font-display text-3xl sm:text-4xl">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/70">
          Find answers about ordering, payment, delivery, and our lip gloss
          making training.
        </p>
      </div>

      <div className="space-y-9">
        {FAQ_SECTIONS.map((section, sectionIndex) => (
          <section key={section.title}>
            <h2 className="mb-3 font-display text-xl">
              {section.title}
            </h2>

            <div className="divide-y divide-[#E9DFF0] border-y border-[#E9DFF0]">
              {section.items.map((item, itemIndex) => {
                const id = `${sectionIndex}-${itemIndex}`;
                const isOpen = openItems.includes(id);
                const answerId = `faq-answer-${id}`;

                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => toggleItem(id)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left transition hover:text-[#80618F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80618F]"
                    >
                      <span className="text-sm font-medium sm:text-base">
                        {item.q}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3EDF7] text-lg text-[#80618F]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={answerId}
                        className="pb-5 pr-8 text-sm leading-6 text-ink/70"
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
