"use client";

const STEPS = [
  { id: "bag", label: "Your Bag" },
  { id: "details", label: "Your Details" },
  { id: "payment", label: "Payment" },
];

export default function CheckoutSteps({ current }) {
  const currentIndex = STEPS.findIndex((s) => s.id === current);

  return (
    <div className="grid grid-cols-3 gap-2 mb-8">
      {STEPS.map((step, i) => {
        const isActive = step.id === current;
        const isDone = i < currentIndex;
        return (
          <div
            key={step.id}
            className={`text-center py-3 rounded-xl font-body text-sm border ${
              isActive
                ? "bg-lilac-soft/60 border-lilac text-lilac-deep font-medium"
                : isDone
                ? "bg-lilac-cloud border-lilac-soft text-ink/60"
                : "bg-white border-lilac-soft text-ink/40"
            }`}
          >
            {isDone ? "✓ " : ""}
            {step.label}
          </div>
        );
      })}
    </div>
  );
}
