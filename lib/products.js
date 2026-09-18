import { BRANDS } from "./constants";

// PRODUCT DATA — quick-entry format
// -------------------------------------------------------------
// To add a product:
//   1. Save the image from WhatsApp onto your computer.
//   2. Drop the image file into /public/products/ (any filename is
//      fine — just make sure the name below matches exactly).
//   3. Add ONE line below: [id, brand, name, price, imageFilename]
//      Leave shade/description as null until she sends them —
//      the product page already handles that gracefully.
//
// id must be unique. brand is BRANDS.COOPER_GLOSS or BRANDS.HAIR_BONNETS.
// featured (last column) controls whether it shows on the homepage.

const RAW_PRODUCTS = [
  // [ id,       brand,                 name,                 price, image,                  shade, description, featured ]
  ["cg1", BRANDS.COOPER_GLOSS, "Gloss Goals", 3500, "Gloss Goals.jpeg", null, null, true],
  ["cg2", BRANDS.COOPER_GLOSS, "Product name TODO", 4000, "heroImg.jpeg", null, null, false],
  ["cg3", BRANDS.COOPER_GLOSS, "Lip Obsession", 4000, "Lip Obsession.jpeg", null, null, false],
  ["cg4", BRANDS.COOPER_GLOSS, "Lipliner", 4000, "Lipliner .jpeg", null, null, true],
  ["cg5", BRANDS.COOPER_GLOSS, "Sugar pop glosses", 4000, "Sugar pop glosses.jpeg", null, null, false],
  ["cg6", BRANDS.COOPER_GLOSS, "Cooper gloss 4in1 set", 4000, "Cooper gloss 4in1 set.jpeg", null, null, true],
  ["cg7", BRANDS.COOPER_GLOSS, "Cooper Lip balm", 4000, "Cooper Lip balm .jpeg", null, null, false],
  ["cg8", BRANDS.COOPER_GLOSS, "Cooper lip scrub ", 4000, "Cooper lip scrub .jpeg", null, null, true],
  ["cg9", BRANDS.COOPER_GLOSS, "Cooper Gloss 3in1 ", 4000, "coopergloss3in1.jpeg", null, null, false],
  ["cg10", BRANDS.COOPER_GLOSS, "Cooper Gloss 3in1 set 2 ", 4000, "coopergloss3in1set.jpeg", null, null, false],
  ["cg11", BRANDS.COOPER_GLOSS, "Cooper Gloss 3in1 set 3 ", 4000, "coopergloss3in1set2.jpeg", null, null, false],
  ["cg12", BRANDS.COOPER_GLOSS, "Crystal clear gloss ", 4000, "Crystal clear gloss.jpeg", null, null, false],
  ["cg13", BRANDS.COOPER_GLOSS, "Crystal clear gloss ", 4000, "Crystal clear gloss.jpeg", null, null, false],
  ["cg14", BRANDS.COOPER_GLOSS, "Glossed & Glow collection (glitter gloss) ", 4000, "Glossed & Glow collection (glitter gloss).jpeg", null, null, false],
  ["cg15", BRANDS.COOPER_GLOSS, "Hydrating lips ", 4000, "Hydrating lips.jpeg", null, null, false],
  ["cg16", BRANDS.COOPER_GLOSS, "Lipcare products  ", 4000, "Lipcare products .jpeg", null, null, true],
  ["cg17", BRANDS.COOPER_GLOSS, "Shades Of Gloss  ", 4000, "shadesofgloss.jpeg", null, null, false],
  ["cg18", BRANDS.COOPER_GLOSS, "Sweet Lips Collection  ", 4000, "Sweet Lips Collection .jpeg", null, null, false],
  ["cg19", BRANDS.COOPER_GLOSS, "The Lip Treats Lip care ", 4000, "The Lip Treats Lip care.jpeg", null, null, true],
  ["cg20", BRANDS.COOPER_GLOSS, "The Gloss Babe Set ", 4000, "theglossbabeset.jpeg", null, null, false],
  ["cg21", BRANDS.COOPER_GLOSS, "The Gloss Babe Set 002 ", 4000, "theglossbabeset002.jpeg", null, null, true],
  ["cg23", BRANDS.COOPER_GLOSS, "The Pretty Lip Set 002 ", 4000, "theprettylipset.jpeg", null, null, false],
  // ["cg2", BRANDS.COOPER_GLOSS, "Product name TODO", 4000, "CEO.jpeg", null, null, true],
  ["cg24", BRANDS.COOPER_GLOSS, "Cooper gloss 4in1 set (Pigmented gloss)", 4000, "Cooper gloss 4in1 set (Pigmented gloss) .jpeg", null, null, true],
 
];

export const products = RAW_PRODUCTS.map(
  ([id, brand, name, price, image, shade, description, featured]) => ({
    id,
    brand,
    name,
    price,
    images: [`/products/${image}`],
    shade,
    description,
    featured: Boolean(featured),
  })
);

export function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByBrand(brand) {
  return products.filter((p) => p.brand === brand);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}