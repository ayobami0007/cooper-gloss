
"use client";

import { useState } from "react";


const FAQ_SECTIONS = [
  {
    title: "Ordering",
    items: [
      {
        q: "How do I place an order?",
        a: "Browse our shop, add your preferred products to your cart, and proceed to checkout. Enter your details and select an available payment method. Your order summary will then open in WhatsApp for you to send to Cooper Gloss.",
      },
      {
        q: "Can I place an order directly through WhatsApp?",
        a: "We recommend placing your order through our website so you can select your products, review your quantities, and provide your order details correctly. You can contact us on WhatsApp if you need assistance.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "What payment methods are available?",
        a: "Bank transfer is available. Follow the payment instructions provided during checkout. Other payment methods will be displayed on the website when they are available.",
      },
      {
        q: "How do I confirm my bank transfer?",
        a: "**How do I confirm my bank transfer?*After placing your order on our website, your order details will be sent to us through WhatsApp. Simply attach and send your bank-transfer receipt in the same chat so we can confirm your payment.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "Where do you deliver, and how long does it take?",
        a: "Interstate delivery takes 48–72 hours, while delivery within Kwara State takes 24–48 hours.",
      },
    ],
  },
  {
    title: "Returns / Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "Exchanges are allowed only if your order has not been dispatched. Returns are not accepted once an order has been sent out. Please ensure you confirm your order before dispatch.",
      },
    ],
  },
  {
    title: "Training",
    items: [
      {
        q: "How do I register for training?",
        a: "Choose your preferred training option on our Training page and follow the registration and payment steps provided on the website. Your training selection and details will be prepared for WhatsApp so you can send them to Cooper Gloss.",
      },
      {
        q: "Do I need to purchase a starter kit?",
        a: "Yes. You are required to purchase a starter kit for practical training sessions. Training also comes with supplier contacts to help you source your materials.",
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
    <main className="mx-auto max-w-5xl px-4 py-12 font-body text-ink sm:px-6 sm:py-16">
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
