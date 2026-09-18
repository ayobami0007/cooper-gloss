import { BRANDS } from "./constants";



export const TRAINING_ITEMS = [
  {
    id: "train-online",
    brand: BRANDS.TRAINING,
    name: "Cooper Gloss Training — Online Class",
    price: 15000,
    images: ["/products/placeholder.svg"],
    shade: "Telegram & WhatsApp",
    description: null,
  },
  {
    id: "train-physical",
    brand: BRANDS.TRAINING,
    name: "Cooper Gloss Training — Physical Class",
    price: 45000,
    images: ["/products/placeholder.svg"],
    shade: "Ilorin or Malete",
    description: null,
  },
];

export function getTrainingItemById(id) {
  return TRAINING_ITEMS.find((t) => t.id === id) ?? null;
}