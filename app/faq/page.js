export const metadata = { title: "FAQ — Cooper Gloss" };

const FAQ_SECTIONS = [
  {
    title: "Ordering",
    items: [
      {
        q: "How do I place an order?",
        a: "Add products to your cart, then tap \"Order via WhatsApp\" to send your order details directly to us.",
      },
      {
        q: "Can I order through WhatsApp directly?",
        a: "Yes — the cart is designed to hand your order straight to WhatsApp so nothing gets lost in translation.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "How do I pay?",
        a: "After sending your order on WhatsApp, transfer payment to the account details shown in your cart, then send your receipt back on WhatsApp to confirm.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "Where do you deliver, and how long does it take?",
        a: "Delivery details are still pending from the client.",
      },
    ],
  },
  {
    title: "Returns / Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "Return/exchange policy is still pending from the client.",
      },
    ],
  },
  {
    title: "Training",
    items: [
      {
        q: "How do I register for training?",
        a: "Use the Enquire About Training button on the Training page to reach us on WhatsApp.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 font-body text-ink">
      <h1 className="font-display text-3xl mb-8">FAQ</h1>
      <div className="space-y-10">
        {FAQ_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.q}>
                  <p className="font-medium">{item.q}</p>
                  <p className="text-ink/70 text-sm mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
