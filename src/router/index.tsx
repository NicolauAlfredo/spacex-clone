import { HomePage } from "../pages/home/HomePage";
import { MoonPage } from "../pages/moon/MoonPage";
import ProductDetailsPage from "../pages/shop-x/cart-details/ProductDetailsPage";
import { ShopXPage } from "../pages/shop-x/shop/ShopXPage";
import { StarlinkPage } from "../pages/starlink/StarlinkPage";

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
    path: "/product/:productId",
    element: <ProductDetailsPage />,
  },
]);
