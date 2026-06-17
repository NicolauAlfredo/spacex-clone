import { HomePage } from "../pages/home/HomePage";
import { MoonPage } from "../pages/moon/MoonPage";
import { ShopXPage } from "../pages/shop-x/ShopXPage";
import { StarlinkPage } from "../pages/starlink/StarlinkPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
]);
