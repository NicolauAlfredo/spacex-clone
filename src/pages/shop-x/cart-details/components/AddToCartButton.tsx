type AddToCartButtonProps = {
  onAddToCart: () => void;
};

function AddToCartButton({ onAddToCart }: AddToCartButtonProps) {
  return (
    <button
      className="product-detail__cart-button"
      type="button"
      onClick={onAddToCart}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;