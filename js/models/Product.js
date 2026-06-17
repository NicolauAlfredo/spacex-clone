// Product model
// Responsibility: represent a product consistently across cards and detail pages.

export function Product({
  id,
  name,
  primaryImage,
  secondaryImage,
  alt,
  price,

  description = "",

  images = [],

  colors = [],
  defaultColor = null,

  sizes = [],
  defaultSize = null,

  details = [],
}) {
  this.id = id;
  this.name = name;
  this.primaryImage = primaryImage;
  this.secondaryImage = secondaryImage;
  this.alt = alt;
  this.price = Number(price);

  this.description = description;

  this.images =
    images.length > 0 ? images : [primaryImage, secondaryImage].filter(Boolean);

  this.colors = colors;
  this.defaultColor = defaultColor;

  this.sizes = sizes;
  this.defaultSize = defaultSize;

  this.details = details;
}
