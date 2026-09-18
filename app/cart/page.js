"use client";

import { useState } from "react";
import CheckoutSteps from "@/components/CheckoutSteps";
import BagStep from "@/components/checkout/BagStep";
import DetailsStep from "@/components/checkout/DetailsStep";
import PaymentStep from "@/components/checkout/PaymentStep";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items } = useCart();
  const [step, setStep] = useState("bag");
  const [details, setDetails] = useState({});
  const [method, setMethod] = useState("whatsapp");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <CheckoutSteps current={step} />

      {step === "bag" && (
        <BagStep onContinue={() => items.length > 0 && setStep("details")} />
      )}

      {step === "details" && (
        <DetailsStep
          details={details}
          onChange={setDetails}
          onBack={() => setStep("bag")}
          onContinue={() => setStep("payment")}
        />
      )}

      {step === "payment" && (
        <PaymentStep
          details={details}
          method={method}
          onMethodChange={setMethod}
          onBack={() => setStep("details")}
        />
      )}
    </div>
  );
}
