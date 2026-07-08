import { Product } from "../models/Product";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

/**
 * Generate the absolute URL for a product image.
 *
 * @param {string} collection - Product collection folder.
 * @param {string} filename - Image file name.
 * @returns {string}
 */

export const getProductImageURL = (
  collection: string,
  filename: string,
): string =>
  getPublicAssetPath(`assets/pages/shopx/${collection}/products/${filename}`);

/**
 * Product catalog grouped by collection.
 *
 * XCollection:
 * Original X merchandise.
 *
 * XaiCollection:
 * xAI and Grok merchandise.
 */

export type ProductCollection = {
  XCollection: Product[];
  XaiCollection: Product[];
};

export const xaiProducts: ProductCollection = {
  /**
   * X Collection products.
   */
  XCollection: [
    new Product({
      id: "x-the-everything-mug",
      name: "X The Everything Mug",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-the-everything-mug-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-the-everything-mug-2.webp",
      ),
      alt: "X The Everything Mug",
      price: 31.95,
      description: `The Everything Mug is a premium, 10 oz thermal-insulated travel mug built for everyday use at home, in the office, or on the go. It is crafted from durable powder-coated stainless steel and finished with an engraved X logo for a clean, elevated look. The mug comes with an anti-slip silicone foot and the lid features a splash-resistant X branded slider.`,
      images: [
        getProductImageURL("x-collection", "x-the-everything-mug-1.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-2.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-3.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-4.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-5.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-6.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-7.webp"),
        getProductImageURL("x-collection", "x-the-everything-mug-8.webp"),
      ],
      colors: [
        {
          label: "Black",
          value: "black",
          color: "#000000",
          available: true,
          imageIndex: 0,
        },
        {
          label: "White",
          value: "white",
          color: "#ffffff",
          available: true,
          imageIndex: 1,
        },
      ],
      defaultColor: "black",
    }),

    new Product({
      id: "the-core-x-crewneck",
      name: "The Core X Crewneck",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-x-crewneck-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-x-crewneck-2.webp",
      ),
      alt: "The Core X Crewneck",
      price: 58.95,
      description: `
        The Core X Crewneck is made from a soft and luxurious dual face fleece material and features a raised, high-density silicone X logo on the left chest. Made from 70% Cotton / 25% Polyester / 5% Elastane.
      
        
        The unisex fit leans on classic styling. See Size Chart below for best sizing and fit guidelines.`,
      images: [
        getProductImageURL("x-collection", "the-core-x-crewneck-1.webp"),
        getProductImageURL("x-collection", "the-core-x-crewneck-2.webp"),
        getProductImageURL("x-collection", "the-core-x-crewneck-3.jpg"),
        getProductImageURL("x-collection", "the-core-x-crewneck-4.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "x-thermal-beanie",
      name: "X Thermal Beanie",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-thermal-beanie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-thermal-beanie-2.webp",
      ),
      alt: "X Thermal Beanie",
      price: 27.95,
      description: `
        Designed for comfort, the X Thermal Beanie is an ultra soft thermal seamless knit cuff beanie with a channel stitch rubber embossed patch featuring the X logo. 
        
        Made from thermal knit premium acrylic. One size fits most.`,
      images: [
        getProductImageURL("x-collection", "x-thermal-beanie-1.webp"),
        getProductImageURL("x-collection", "x-thermal-beanie-2.webp"),
      ],
    }),

    new Product({
      id: "x-signature-crew-sock-set",
      name: "X Signature Crew Sock Set",
      primaryImage: getProductImageURL(
        "x-collection",
        "x-signature-crew-sock-set-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "x-signature-crew-sock-set-2.jpg",
      ),
      alt: "X Signature Crew Sock Set",
      price: 22.95,
      description: `The X Signature Crew Sock Set includes two pairs of soft and durable fiber-blend two-tone socks with an elasticized cuff. Both pairs feature a repeating pattern of the X logo.`,
      images: [
        getProductImageURL("x-collection", "x-signature-crew-sock-set-1.webp"),
        getProductImageURL("x-collection", "x-signature-crew-sock-set-2.jpg"),
        getProductImageURL("x-collection", "x-signature-crew-sock-set-3.webp"),
        getProductImageURL("x-collection", "x-signature-crew-sock-set-4.webp"),
      ],
      sizes: [
        {
          label: "S/M",
          value: "sm",
          available: true,
        },
        {
          label: "M/L",
          value: "ml",
          available: true,
        },
      ],
    }),

    new Product({
      id: "the-core-trucker-hat",
      name: "The Core Trucker Hat",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-trucker-hat-1.jpg",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-trucker-hat-2.webp",
      ),
      alt: "The Core Trucker Hat",
      price: 31.95,
      description: `The Core Trucker Hat features a 3D X logo on the front and adjustable snapback closure on the back. Designed with a lightweight, breathable mesh backing and curved visor.

      Comes in a single size with an adjustable snap closure so that one size fits most.

      Complete the look with The Core Tee.`,
      images: [
        getProductImageURL("x-collection", "the-core-trucker-hat-1.jpg"),
        getProductImageURL("x-collection", "the-core-trucker-hat-2.webp"),
        getProductImageURL("x-collection", "the-core-trucker-hat-3.webp"),
        getProductImageURL("x-collection", "the-core-trucker-hat-4.jpg"),
      ],
    }),

    new Product({
      id: "the-core-tee",
      name: "The Core Tee",
      primaryImage: getProductImageURL("x-collection", "the-core-tee-1.webp"),
      secondaryImage: getProductImageURL("x-collection", "the-core-tee-2.webp"),
      alt: "The Core Tee",
      price: 31.95,
      description: `Designed for fit, comfort and style, the Core short sleeve tee is made from 95% cotton and 5% elastane and features an understated 3D silicone X logo on the left chest.

      The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.

      Complete the look with the Core Trucker Hat.`,
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
      images: [
        getProductImageURL("x-collection", "the-core-tee-1.webp"),
        getProductImageURL("x-collection", "the-core-tee-2.webp"),
      ],
    }),

    new Product({
      id: "the-core-hoodie",
      name: "The Core Hoodie",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-hoodie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-hoodie-2.webp",
      ),
      alt: "The Core Hoodie",
      price: 72.95,
      description: `
        The Core Hoodie is made from 65% Cotton / 30% Polyester / 5% Elastane and features a raised black silicone X logo on the left chest. 

        The unisex fit elevates the classic hoodie with modern design lines. See Size Chart below for best sizing and fit guidelines. Wash inside out for best results. 
      `,
      images: [
        getProductImageURL("x-collection", "the-core-hoodie-1.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-2.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-3.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-4.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-5.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-6.webp"),
        getProductImageURL("x-collection", "the-core-hoodie-7.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
      colors: [
        {
          label: "Black",
          value: "black",
          color: "#000000",
          available: true,
          imageIndex: 0,
        },
        {
          label: "White",
          value: "white",
          color: "#ffffff",
          available: true,
          imageIndex: 1,
        },
      ],
      defaultColor: "black",
    }),

    new Product({
      id: "the-retro-tee",
      name: "The Retro Tee",
      primaryImage: getProductImageURL("x-collection", "the-retro-tee-1.webp"),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-retro-tee-2.webp",
      ),
      alt: "The Retro Tee",
      price: 36.95,
      description: `
        The Retro Tee short sleeve shirt is made from 95% cotton / 5% elastane and features the original X retro logo on the center chest as well as x.com on the left sleeve. The dual face fleece material has a luxurious feel and undergoes a wash process that gives each piece its own unique vintage distressing.

        The unisex fit leans on classic oversized styling. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("x-collection", "the-retro-tee-1.webp"),
        getProductImageURL("x-collection", "the-retro-tee-2.webp"),
        getProductImageURL("x-collection", "the-retro-tee-3.webp"),
        getProductImageURL("x-collection", "the-retro-tee-4.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "the-retro-crewneck",
      name: "The Retro Crewneck",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-retro-crewneck-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-retro-crewneck-2.webp",
      ),
      alt: "The Retro Crewneck",
      price: 67.95,
      description: `
        The Retro Crewneck is made from 65% Cotton / 30% Polyester / 5% Elastane and features the original X retro logo on the center chest and x.com on the nape. The dual face fleece material has a soft and luxurious feel and undergoes a wash process that gives each piece its own unique vintage distressing.

        The unisex fit leans on classic oversized styling. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("x-collection", "the-retro-crewneck-1.webp"),
        getProductImageURL("x-collection", "the-retro-crewneck-2.webp"),
        getProductImageURL("x-collection", "the-retro-crewneck-3.webp"),
        getProductImageURL("x-collection", "the-retro-crewneck-4.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "the-core-dad-hat",
      name: "The Core Dad Hat",
      primaryImage: getProductImageURL(
        "x-collection",
        "the-core-dad-hat-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "x-collection",
        "the-core-dad-hat-2.webp",
      ),
      alt: "The Core Dad Hat",
      price: 31.95,
      description: `
      The Core Dad Hat is a relaxed, classic fit hat that features a custom stamped metal buckle and an HD silicone X logo on the front. The interior has a printed logo crown lining and moisture wicking quilted padding.

      Comes in a single size with an adjustable buckle strap so that one size fits most.

      Made from 100% cotton.
     `,
      images: [
        getProductImageURL("x-collection", "the-core-dad-hat-1.webp"),
        getProductImageURL("x-collection", "the-core-dad-hat-2.webp"),
        getProductImageURL("x-collection", "the-core-dad-hat-3.webp"),
        getProductImageURL("x-collection", "the-core-dad-hat-4.webp"),
      ],
    }),
  ],

  /**
   * xAI Collection products.
   */
  XaiCollection: [
    new Product({
      id: "xai-multi-tumbler",
      name: "xAI Multi Tumbler",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-multi-tumbler-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-multi-tumbler-2.webp",
      ),
      alt: "xAI Multi Tumbler",
      price: 45.95,
      description: `
        The xAI Multi Tumbler is a premium 20 oz tumbler built for everyday use at home, in the office, or on the go. It is crafted from durable powder-coated stainless steel and finished with an engraved xAI logo for a clean, elevated look. It is double wall insulated and also features an anti-slip silicone foot. 
    
        This tumbler comes with two interchangeable lids so that it can be used with the included straw or as a water bottle with a handle lid.`,
      images: [
        getProductImageURL("xai-collection", "xai-multi-tumbler-1.webp"),
        getProductImageURL("xai-collection", "xai-multi-tumbler-2.webp"),
        getProductImageURL("xai-collection", "xai-multi-tumbler-3.webp"),
        getProductImageURL("xai-collection", "xai-multi-tumbler-4.webp"),
        getProductImageURL("xai-collection", "xai-multi-tumbler-5.webp"),
        getProductImageURL("xai-collection", "xai-multi-tumbler-6.webp"),
      ],
      colors: [
        {
          label: "Patterned Black",
          value: "patterned-black",
          color: "#000000",
          available: true,
          imageIndex: 0,
        },
        {
          label: "White",
          value: "white",
          color: "#ffffff",
          available: true,
          imageIndex: 1,
        },
      ],
      defaultColor: "patterned-black",
    }),

    new Product({
      id: "xai-thermal-beanie",
      name: "xAI Thermal Beanie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-thermal-beanie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-thermal-beanie-2.webp",
      ),
      alt: "xAI Thermal Beanie",
      price: 27.95,
      description: `The xAI Multi Tumbler is a premium 20 oz tumbler built for everyday use at home, in the office, or on the go. It is crafted from durable powder-coated stainless steel and finished with an engraved xAI logo for a clean, elevated look. It is double wall insulated and also features an anti-slip silicone foot. 
    
      This tumbler comes with two interchangeable lids so that it can be used with the included straw or as a water bottle with a handle lid.`,
      images: [
        getProductImageURL("xai-collection", "xai-thermal-beanie-1.webp"),
        getProductImageURL("xai-collection", "xai-thermal-beanie-2.webp"),
      ],
    }),

    new Product({
      id: "grok-reflective-tee",
      name: "Grok Reflective Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-reflective-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-reflective-tee-2.jpg",
      ),
      alt: "Grok Reflective Tee",
      price: 36.95,
      description: `
        The signature Grok wordmark is reimagined in a sharp, flowing cybersigilism style constructed from reflective high-visibility vinyl taping. The tee is garment washed for a soft feel and subtly faded retro look. Made from 95% cotton and 5% elastane.
        
        The shirt has an oversized fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("xai-collection", "grok-reflective-tee-1.webp"),
        getProductImageURL("xai-collection", "grok-reflective-tee-2.jpg"),
        getProductImageURL("xai-collection", "grok-reflective-tee-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "kids-grok-to-understand-tee",
      name: "Kids Grok to Understand Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-tee-2.webp",
      ),
      alt: "Kids Grok to Understand Tee",
      price: 31.95,
      description: `
        Cozy, durable, and ready for little universe explorers, the Kids Grok to Understand Tee features a bold Grok wordmark extending up the right side and a small left chest Grok logo with the iconic “Understand the Universe” statement below it.

        It is made from 95% cotton and 5% elastane.

        See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-tee-1.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-tee-2.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-tee-3.webp",
        ),
      ],
      sizes: [
        {
          label: "2T",
          value: "2t",
          available: true,
        },
        {
          label: "4T",
          value: "4t",
          available: false,
        },
        {
          label: "6",
          value: "6",
          available: false,
        },
        {
          label: "8",
          value: "8",
          available: true,
        },
        {
          label: "10",
          value: "10",
          available: true,
        },
        {
          label: "12",
          value: "12",
          available: true,
        },
      ],
      defaultSize: "2t",
    }),

    new Product({
      id: "kids-grok-to-understand-hoodie",
      name: "Kids Grok to Understand Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-hoodie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "kids-grok-to-understand-hoodie-2.webp",
      ),
      alt: "Kids Grok to Understand Hoodie",
      price: 58.95,
      description: `
        Cozy, durable, and ready for little universe explorers, the Kids Grok to Understand Hoodie features a bold Grok wordmark extending up the right side and a small left chest Grok logo with the iconic “Understand the Universe” statement below it. The top of the hood features an xAI logo which displays to others when the hood is down.

        It is made from 65% Cotton / 30% Polyester / 5% Elastane.

        See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-hoodie-1.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-hoodie-2.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "kids-grok-to-understand-hoodie-3.webp",
        ),
      ],
      sizes: [
        {
          label: "2T",
          value: "2t",
          available: true,
        },
        {
          label: "4T",
          value: "4t",
          available: false,
        },
        {
          label: "6",
          value: "6",
          available: false,
        },
        {
          label: "8",
          value: "8",
          available: true,
        },
        {
          label: "10",
          value: "10",
          available: true,
        },
        {
          label: "12",
          value: "12",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "xai-hydration-vessel",
      name: "xAI Hydration Vessel",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-hydration-vessel-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-hydration-vessel-2.webp",
      ),
      alt: "xAI Hydration Vessel",
      price: 45.95,
      description: `The xAI Hydration Vessel is a premium 16 oz water bottle built for everyday use at home, in the office, or on the go. It is crafted from durable powder-coated stainless steel and finished with an engraved xAI logo for a clean, elevated look. The bottle is double wall insulated and also features an anti-slip silicone foot.`,
      images: [
        getProductImageURL("xai-collection", "xai-hydration-vessel-1.webp"),
        getProductImageURL("xai-collection", "xai-hydration-vessel-2.webp"),
        getProductImageURL("xai-collection", "xai-hydration-vessel-3.webp"),
        getProductImageURL("xai-collection", "xai-hydration-vessel-4.webp"),
      ],
      colors: [
        {
          label: "Black",
          value: "black",
          color: "#000000",
          available: true,
          imageIndex: 0,
        },
        {
          label: "White",
          value: "white",
          color: "#ffffff",
          available: true,
          imageIndex: 1,
        },
      ],
      defaultColor: "black",
    }),

    new Product({
      id: "xai-human-connection-tee",
      name: "xAI Human Connection Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-human-connection-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-human-connection-tee-2.webp",
      ),
      alt: "xAI Human Connection Tee",
      price: 31.95,
      description: `
        The Human Connection tee features a futuristic high-contrast glitch portrait of a human face fused with UI and schematic fragments, capturing the space where humanity meets machine. Made from 95% cotton and 5% elastane.

        The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("xai-collection", "xai-human-connection-tee-1.webp"),
        getProductImageURL("xai-collection", "xai-human-connection-tee-2.webp"),
        getProductImageURL("xai-collection", "xai-human-connection-tee-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "xs",
    }),

    new Product({
      id: "xai-dark-ani-tee",
      name: "xAI Dark Ani Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-dark-ani-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-dark-ani-tee-2.webp",
      ),
      alt: "xAI Dark Ani Tee",
      price: 31.95,
      description: `
        The Dark Ani tee features an anime-style weathered graphic of the Grok companion Ani fused with a futuristic digital interface aesthetic. Made from 95% cotton and 5% elastane.

        The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("xai-collection", "xai-dark-ani-tee-1.webp"),
        getProductImageURL("xai-collection", "xai-dark-ani-tee-2.webp"),
        getProductImageURL("xai-collection", "xai-dark-ani-tee-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "xs",
    }),

    new Product({
      id: "understand-the-universe-tee",
      name: "Understand The Universe Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "understand-the-universe-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "understand-the-universe-tee-2.webp",
      ),
      alt: "Understand The Universe Tee",
      price: 31.95,
      description: `
        Elevate your style with the Understand The Universe T-shirt, built with a futuristic edge. Inspired by the complexity of a black hole, this tee features an iconic graphic on the front and xAI logo on the back nape.It is made from 95% cotton and 5% elastane.

        The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL(
          "xai-collection",
          "understand-the-universe-tee-1.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "understand-the-universe-tee-2.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "understand-the-universe-tee-3.webp",
        ),
        getProductImageURL(
          "xai-collection",
          "understand-the-universe-tee-4.webp",
        ),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "grok-logo-tee",
      name: "Grok Logo Tee",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-logo-tee-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-logo-tee-2.webp",
      ),
      alt: "Grok Logo Tee",
      price: 31.95,
      description: `
        Designed for fit, comfort and style, the Grok short sleeve tee is made from 95% cotton and 5% elastane and features an understated 3D silicone Grok logo on the left chest.

        The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("xai-collection", "grok-logo-tee-1.webp"),
        getProductImageURL("xai-collection", "grok-logo-tee-2.webp"),
        getProductImageURL("xai-collection", "grok-logo-tee-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "xai-logo-tee",
      name: "xAI Logo Tee",
      primaryImage: getProductImageURL("xai-collection", "xai-logo-tee-1.webp"),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-logo-tee-2.webp",
      ),
      alt: "xAI Logo Tee",
      price: 31.95,
      description: `
        Designed for fit, comfort and style, the xAI Logo short sleeve tee is made from 95% cotton and 5% elastane and features an understated 3D silicone white xAI logo on the left chest.

        The shirt has a boxy fit. See Size Chart below for best sizing and fit guidelines.
      `,
      images: [
        getProductImageURL("xai-collection", "xai-logo-tee-1.webp"),
        getProductImageURL("xai-collection", "xai-logo-tee-2.webp"),
        getProductImageURL("xai-collection", "xai-logo-tee-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "xs",
    }),

    new Product({
      id: "xai-trucker-hat",
      name: "xAI Trucker Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "xai-trucker-hat-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-trucker-hat-2.webp",
      ),
      alt: "xAI Trucker Hat",
      price: 31.95,
      description: `
        The xAI Trucker Hat features a 3D silicone white xAI logo on the front and adjustable snapback closure on the back. Designed with a lightweight, breathable mesh backing and curved visor.

        Comes in a single size with an adjustable snap closure so that one size fits most.
      `,
      images: [
        getProductImageURL("xai-collection", "xai-trucker-hat-1.webp"),
        getProductImageURL("xai-collection", "xai-trucker-hat-2.webp"),
        getProductImageURL("xai-collection", "xai-trucker-hat-3.webp"),
        getProductImageURL("xai-collection", "xai-trucker-hat-4.webp"),
      ],
    }),

    new Product({
      id: "the-xai-hoodie",
      name: "The xAI Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "the-xai-hoodie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "the-xai-hoodie-2.webp",
      ),
      alt: "The xAI Hoodie",
      price: 72.95,
      description: `
        The xAI Hoodie is made from 65% Cotton / 30% Polyester / 5% Elastane and features a raised white silicone xAI logo on the left chest. 

        The unisex fit elevates the classic hoodie with modern design lines. See Size Chart below for best sizing and fit guidelines. Wash inside out for best results. 
      `,
      images: [
        getProductImageURL("xai-collection", "the-xai-hoodie-1.webp"),
        getProductImageURL("xai-collection", "the-xai-hoodie-2.webp"),
        getProductImageURL("xai-collection", "the-xai-hoodie-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "xai-dad-hat",
      name: "xAI Dad Hat",
      primaryImage: getProductImageURL("xai-collection", "xai-dad-hat-1.webp"),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "xai-dad-hat-2.webp",
      ),
      alt: "xAI Dad Hat",
      price: 31.95,
      description: `
        The xAI Dad Hat is a relaxed, classic fit hat that features a custom stamped metal buckle and an HD silicone white xAI logo on the front. The interior has a printed logo crown lining and moisture wicking quilted padding.

        Comes in a single size with an adjustable buckle strap so that one size fits most.
      `,
      images: [
        getProductImageURL("xai-collection", "xai-dad-hat-1.webp"),
        getProductImageURL("xai-collection", "xai-dad-hat-2.webp"),
        getProductImageURL("xai-collection", "xai-dad-hat-3.webp"),
        getProductImageURL("xai-collection", "xai-dad-hat-4.webp"),
        getProductImageURL("xai-collection", "xai-dad-hat-5.jpg"),
      ],
    }),

    new Product({
      id: "grok-trucker-hat",
      name: "Grok Trucker Hat",
      primaryImage: getProductImageURL(
        "xai-collection",
        "grok-trucker-hat-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-trucker-hat-2.webp",
      ),
      alt: "Grok Trucker Hat",
      price: 31.95,
      description: `
        The Grok Trucker Hat features a 3D silicone black Grok logo on the front and adjustable snapback closure on the back. Designed with a lightweight, breathable mesh backing and curved visor.

        Comes in a single size with an adjustable snap closure so that one size fits most.
      `,
      images: [
        getProductImageURL("xai-collection", "grok-trucker-hat-1.webp"),
        getProductImageURL("xai-collection", "grok-trucker-hat-2.webp"),
        getProductImageURL("xai-collection", "grok-trucker-hat-3.webp"),
        getProductImageURL("xai-collection", "grok-trucker-hat-4.webp"),
      ],
    }),

    new Product({
      id: "the-grok-hoodie",
      name: "The Grok Hoodie",
      primaryImage: getProductImageURL(
        "xai-collection",
        "the-grok-hoodie-1.webp",
      ),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "the-grok-hoodie-2.webp",
      ),
      alt: "The Grok Hoodie",
      price: 72.95,
      description: `
        The Grok Dad Hat is a relaxed, classic fit hat that features a custom stamped metal buckle and an HD silicone black Grok logo on the front. The interior has a printed logo crown lining and moisture wicking quilted padding.

        Comes in a single size with an adjustable buckle strap so that one size fits most.
      `,
      images: [
        getProductImageURL("xai-collection", "the-grok-hoodie-1.webp"),
        getProductImageURL("xai-collection", "the-grok-hoodie-2.webp"),
        getProductImageURL("xai-collection", "the-grok-hoodie-3.webp"),
      ],
      sizes: [
        {
          label: "XS",
          value: "xs",
          available: false,
        },
        {
          label: "S",
          value: "s",
          available: false,
        },
        {
          label: "M",
          value: "m",
          available: false,
        },
        {
          label: "L",
          value: "l",
          available: true,
        },
        {
          label: "XL",
          value: "xl",
          available: true,
        },
        {
          label: "2XL",
          value: "2xl",
          available: true,
        },
        {
          label: "3XL",
          value: "3xl",
          available: true,
        },
      ],
      defaultSize: "l",
    }),

    new Product({
      id: "grok-dad-hat",
      name: "Grok Dad Hat",
      primaryImage: getProductImageURL("xai-collection", "grok-dad-hat-1.webp"),
      secondaryImage: getProductImageURL(
        "xai-collection",
        "grok-dad-hat-2.webp",
      ),
      alt: "Grok Dad Hat",
      price: 31.95,
      description: `
        The Grok Dad Hat is a relaxed, classic fit hat that features a custom stamped metal buckle and an HD silicone black Grok logo on the front. The interior has a printed logo crown lining and moisture wicking quilted padding.

        Comes in a single size with an adjustable buckle strap so that one size fits most.
      `,
      images: [
        getProductImageURL("xai-collection", "grok-dad-hat-1.webp"),
        getProductImageURL("xai-collection", "grok-dad-hat-2.webp"),
        getProductImageURL("xai-collection", "grok-dad-hat-3.webp"),
        getProductImageURL("xai-collection", "grok-dad-hat-4.webp"),
      ],
    }),
  ],
};
export { Product };
