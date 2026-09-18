
// Central place for business info. 
export const SITE_NAME = "Cooper Gloss";

// Raw local-format number as given by the client. Verify before launch.
export const WHATSAPP_NUMBER_LOCAL = "09151517409";

// Converts a Nigerian local number (0XXXXXXXXXX) to WhatsApp's
// international format (234XXXXXXXXXX) for wa.me links.
export function toWhatsAppNumber(local) {
  const digits = local.replace(/\D/g, "");
  return digits.startsWith("0") ? `234${digits.slice(1)}` : digits;
}

export const WHATSAPP_NUMBER = toWhatsAppNumber(WHATSAPP_NUMBER_LOCAL);


export const PAYMENT_ACCOUNTS = [
  {
    label: "Account 1",
    bankName: "TODO — bank name",
    accountName: "TODO — account name",
    accountNumber: "TODO — account number",
  },
];


export const DELIVERY_FEE = null; // e.g. 1500
export const FREE_DELIVERY_THRESHOLD = null; // e.g. 20000

export const SOCIAL = {
  tiktok: "cooper_gloss",
  // TODO: Instagram handle not yet provided by client.
  instagram: null,
};


export const CONTACT_EMAIL = "Abdulraufgbemisola123@gmail.com";
export const BUSINESS_HOURS = null;

export const BRANDS = {
  COOPER_GLOSS: "cooper-gloss",
  HAIR_BONNETS: "hair-bonnets",
  // Not a real "brand" for shop purposes — used to tag training
  // enrollment items in the cart so checkout can tell them apart
  // from physical products (e.g. skip delivery address for these).
  TRAINING: "training",
};

export const BRAND_LABELS = {
  [BRANDS.COOPER_GLOSS]: "Cooper Gloss",
  [BRANDS.HAIR_BONNETS]: "Hair Bonnets",
};

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export function formatNaira(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}