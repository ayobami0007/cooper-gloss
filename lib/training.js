
import { BRANDS } from "./constants";

export const TRAINING_ITEMS = [
  {
    id: "lip-care-online",
    brand: BRANDS.TRAINING,
    course: "Lip Gloss & Lip Care Formulation",
    mode: "Online",
    name: "Lip Gloss & Lip Care Formulation — Online",
    price: 25000,
    location: "Online",
    duration: "1 weeks",
    dates: "Upcoming dates will be announced",
    platform: "Telegram",
    starterKitRequired: false,
    description:
      "Learn to formulate different types of lip gloss and lip-care products.",
    curriculum: [
      "How to make different types of lip gloss",
      "Clear, pigmented, glitter and shimmer glosses",
      "Colour-changing lip gloss",
      "Lip scrub",
      "Lip balm",
      "Moisturising lip-care products",
    ],
  },
  {
    id: "lip-care-physical",
    brand: BRANDS.TRAINING,
    course: "Lip Gloss & Lip Care Formulation",
    mode: "Physical",
    name: "Lip Gloss & Lip Care Formulation — Physical",
    price: 50000,
    location: "Ilorin or Malete",
    duration: "2 weeks",
    dates: "Upcoming dates will be announced",
    starterKitRequired: true,
    description:
      "Learn to formulate different types of lip gloss and lip-care products.",
    curriculum: [
      "How to make different types of lip gloss",
      "Clear, pigmented, glitter and shimmer glosses",
      "Colour-changing lip gloss",
      "Lip scrub",
      "Lip balm",
      "Moisturising lip-care products",
    ],
  },
  {
    id: "pink-lips-online",
    brand: BRANDS.TRAINING,
    course: "Pink Lips Cream Formulation",
    mode: "Online",
    name: "Pink Lips Cream Formulation — Online",
    price: 15000,
    location: "Online",
    duration: "1 week",
    dates: "Upcoming dates will be announced",
    platform: "Telegram",
    starterKitRequired: false,
    description:
      "A separate online class focused on pink lips cream formulation.",
  },
  {
    id: "pink-lips-physical",
    brand: BRANDS.TRAINING,
    course: "Pink Lips Cream Formulation",
    mode: "Physical",
    name: "Pink Lips Cream Formulation — Physical",
    price: 20000,
    location: "Ilorin or Malete",
    duration: "2 weeks",
    dates: "Upcoming dates will be announced",
    starterKitRequired: true,
    description:
      "A separate physical class focused on pink lips cream formulation.",
  },
];

export function getTrainingItemById(id) {
  return TRAINING_ITEMS.find((item) => item.id === id) ?? null;
}
