type ShopCollectionButtonProps = {
  children: string;
};

export function ShopCollectionButton({ children }: ShopCollectionButtonProps) {
  return <span className="content__button">{children}</span>;
}
