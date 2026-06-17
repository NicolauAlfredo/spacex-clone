// Modello prodotto
// Responsabilità: rappresentare un prodotto in modo consistente

export function Product({
  id,
  name,
  primaryImage,
  secondaryImage,
  alt,
  price,
}) {
  this.id = id;
  this.name = name;
  this.primaryImage = primaryImage;
  this.secondaryImage = secondaryImage;
  this.alt = alt;
  this.price = Number(price);
}
