import { HomePage } from "../pages/home/HomePage";
import { MoonPage } from "../pages/moon/MoonPage";
import ProductDetailsPage from "../pages/shop-x/cart-details/ProductDetailsPage";
import CartPage from "../pages/shop-x/cart/CartPage";
import { ShopXPage } from "../pages/shop-x/shop/ShopXPage";
import { StarlinkPage } from "../pages/starlink/StarlinkPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";

import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop-x",
    element: <ShopXPage />,
  },
  {
    path: "/starlink",
    element: <StarlinkPage />,
  },
  {
    path: "/moon",
    element: <MoonPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
