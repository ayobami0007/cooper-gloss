"use client";

export default function QuantitySelector({ qty, onChange, min = 1 }) {
  return (
    <div className="inline-flex items-center border border-lilac-soft rounded-full overflow-hidden">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="w-9 h-9 flex items-center justify-center text-lilac-deep disabled:opacity-30"
        disabled={qty <= min}
        onClick={() => onChange(qty - 1)}
      >
        −
      </button>
      <span className="w-8 text-center font-body text-sm" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="w-9 h-9 flex items-center justify-center text-lilac-deep"
        onClick={() => onChange(qty + 1)}
      >
        +
      </button>
    </div>
  );
}
