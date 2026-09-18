import { WHATSAPP_NUMBER, formatNaira, BRANDS } from "./constants";



export function buildOrderMessage(cartItems, { customer, deliveryFee, paymentMethod } = {}) {
  const isTrainingOnly = cartItems.every((item) => item.brand === BRANDS.TRAINING);
  const heading = isTrainingOnly ? "Cooper Gloss Training Enrollment" : "Cooper Gloss Order";

  const itemLines = cartItems.map((item) => {
    const variantPart = item.variant ? ` — ${item.variant}` : "";
    return `- ${item.name}${variantPart} — Qty: ${item.qty}`;
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + (deliveryFee ?? 0);

  const lines = [heading, "", ...itemLines, ""];

  lines.push(`Subtotal: ${formatNaira(subtotal)}`);
  if (deliveryFee) lines.push(`Delivery: ${formatNaira(deliveryFee)}`);
  lines.push(`Total: ${formatNaira(total)}`);

  if (paymentMethod) {
    lines.push("", `Payment method: ${paymentMethod}`);
  }

  if (customer) {
    lines.push(
      "",
      "Customer details:",
      `Name: ${customer.firstName} ${customer.lastName}`.trim(),
      `Phone: ${customer.phone}`
    );
    if (customer.email) lines.push(`Email: ${customer.email}`);
    if (customer.street) {
      const addressParts = [customer.street, customer.city, customer.state]
        .filter(Boolean)
        .join(", ");
      lines.push(`Delivery address: ${addressParts}`);
    }
    if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppOrderLink(cartItems, options) {
  const message = buildOrderMessage(cartItems, options);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppEnquiryLink(presetMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(presetMessage)}`;
}