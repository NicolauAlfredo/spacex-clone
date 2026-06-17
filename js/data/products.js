import { Product } from "../models/Product.js";

/**
 * Generate the absolute URL for a product image.
 *
 * @param {string} collection - Product collection folder.
 * @param {string} filename - Image file name.
 * @returns {string}
 */
export const getProductImageURL = (collection, filename) =>
  new URL(
    `../../assets/pages/shopx/${collection}/products/${filename}`,
    import.meta.url,
  ).href;

/**
 * Product catalog grouped by collection.
 *
 * XCollection:
 * Original X merchandise.
 *
 * XaiCollection:
 * xAI and Grok merchandise.
 */

export const xaiProducts = {
  /**
   * X Collection products.
   */
  XCollection: [
    new Product({
      id: "x-the-everything-mug-front",
      name: "X The Everything Mug",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-the-everything-mug-front.jpg",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-the-everything-mug-verso.webp",
      ),
      alt: "X The Everything Mug",
      price: 31.95,
    }),

    new Product({
      id: "the-core-x-crewneck-front",
      name: "The Core X Crewneck",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-x-crewneck-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-x-crewneck-verso.jpg",
      ),
      alt: "The Core X Crewneck",
      price: 58.95,
    }),

    new Product({
      id: "x-thermal-beanie-front",
      name: "X Thermal Beanie",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-thermal-beanie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-thermal-beanie-verso.webp",
      ),
      alt: "X Thermal Beanie",
      price: 27.95,
    }),

    new Product({
      id: "x-signature-crew-sock-set-front",
      name: "X Signature Crew Sock Set",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-signature-crew-sock-set-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-signature-crew-sock-set-verso.jpg",
      ),
      alt: "X Signature Crew Sock Set",
      price: 22.95,
    }),

    new Product({
      id: "the-core-trucker-hat-front",
      name: "The Core Trucker Hat",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-trucker-hat-front.jpg",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-trucker-hat-verso.jpg",
      ),
      alt: "The Core Trucker Hat",
      price: 31.95,
    }),

    new Product({
      id: "the-core-tee-front",
      name: "The Core Tee",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-tee-verso.jpg",
      ),
      alt: "The Core Tee",
      price: 31.95,
    }),

    new Product({
      id: "the-core-hoodie-verso",
      name: "The Core Hoodie",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-hoodie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-hoodie-verso.webp",
      ),
      alt: "The Core Hoodie",
      price: 72.95,
    }),

    new Product({
      id: "the-retro-tee-front",
      name: "The Retro Tee",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-retro-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-retro-tee-verso.webp",
      ),
      alt: "The Retro Tee",
      price: 36.95,
    }),

    new Product({
      id: "the-retro-crewneck-front",
      name: "The Retro Crewneck",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-retro-crewneck-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-retro-crewneck-verso.webp",
      ),
      alt: "The Retro Crewneck",
      price: 67.95,
    }),
    new Product({
      id: "the-core-dad-hat-front",
      name: "The Core Dad Hat",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-dad-hat-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-dad-hat-verso.webp",
      ),
      alt: "The Core Dad Hat",
      price: 31.95,
    }),
  ],

  /**
   * xAI Collection products.
   */
  XaiCollection: [
    new Product({
      id: "xai-multi-tumbler-black",
      name: "xAI Multi Tumbler",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-multi-tumbler-black.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-multi-tumbler-white.webp",
      ),
      alt: "xAI Multi Tumbler",
      price: 45.95,
    }),

    new Product({
      id: "xai-thermal-beanie-front",
      name: "xAI Thermal Beanie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-thermal-beanie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-thermal-beanie-verso.webp",
      ),
      alt: "xAI Thermal Beanie",
      price: 27.95,
    }),

    new Product({
      id: "grok-reflective-tee-front",
      name: "Grok Reflective Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-reflective-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-reflective-tee-verso.jpg",
      ),
      alt: "Grok Reflective Tee",
      price: 36.95,
    }),

    new Product({
      id: "kids-grok-to-understand-tee-front",
      name: "Kids Grok to Understand Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-tee-verso.webp",
      ),
      alt: "Kids Grok to Understand Tee",
      price: 31.95,
    }),

    new Product({
      id: "kids-grok-to-understand-hoodie-front",
      name: "Kids Grok to Understand Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-hoodie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-hoodie-verso.webp",
      ),
      alt: "Kids Grok to Understand Hoodie",
      price: 58.95,
    }),

    new Product({
      id: "xai-hydration-vessel-black",
      name: "xAI Hydration Vessel",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-hydration-vessel-black.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-hydration-vessel-white.webp",
      ),
      alt: "xAI Hydration Vessel",
      price: 45.95,
    }),

    new Product({
      id: "xai-human-connection-tee-front",
      name: "xAI Human Connection Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-human-connection-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-human-connection-tee-verso.webp",
      ),
      alt: "xAI Human Connection Tee",
      price: 31.95,
    }),

    new Product({
      id: "xai-dark-ani-tee-front",
      name: "xAI Dark Ani Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-dark-ani-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-dark-ani-tee-verso.webp",
      ),
      alt: "xAI Dark Ani Tee",
      price: 31.95,
    }),

    new Product({
      id: "understand-the-universe-tee-front",
      name: "Understand The Universe Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "understand-the-universe-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "understand-the-universe-tee-verso.webp",
      ),
      alt: "Understand The Universe Tee",
      price: 31.95,
    }),

    new Product({
      id: "grok-logo-tee-front",
      name: "Grok Logo Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-logo-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-logo-tee-verso.webp",
      ),
      alt: "Grok Logo Tee",
      price: 31.95,
    }),

    new Product({
      id: "xai-logo-tee-front",
      name: "xAI Logo Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-logo-tee-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-logo-tee-verso.webp",
      ),
      alt: "xAI Logo Tee",
      price: 31.95,
    }),

    new Product({
      id: "xai-trucker-hat-front",
      name: "xAI Trucker Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-trucker-hat-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-trucker-hat-verso.webp",
      ),
      alt: "xAI Trucker Hat",
      price: 31.95,
    }),

    new Product({
      id: "the-xai-hoodie-front",
      name: "The xAI Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "the-xai-hoodie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "the-xai-hoodie-verso.webp",
      ),
      alt: "The xAI Hoodie",
      price: 72.95,
    }),

    new Product({
      id: "xai-dad-hat-front",
      name: "xAI Dad Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-dad-hat-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-dad-hat-verso.webp",
      ),
      alt: "xAI Dad Hat",
      price: 31.95,
    }),

    new Product({
      id: "grok-trucker-hat-front",
      name: "Grok Trucker Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-trucker-hat-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-trucker-hat-verso.webp",
      ),
      alt: "Grok Trucker Hat",
      price: 31.95,
    }),

    new Product({
      id: "the-grok-hoodie-front",
      name: "The Grok Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "the-grok-hoodie-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "the-grok-hoodie-verso.webp",
      ),
      alt: "The Grok Hoodie",
      price: 72.95,
    }),

    new Product({
      id: "grok-dad-hat-front",
      name: "Grok Dad Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-dad-hat-front.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-dad-hat-verso.webp",
      ),
      alt: "Grok Dad Hat",
      price: 31.95,
    }),
  ],
};
