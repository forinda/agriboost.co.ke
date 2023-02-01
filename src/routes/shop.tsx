import { RouteObject } from "react-router-dom";
import ShopIndexErrorPage from "@error-pages/ShopIndexErrorPage";
import BaseShop from "@shop-pages/views/BaseShop";
import ShopLandingPage from "@shop-pages/views/ShopLandingPage";

export const ShopRoutes: RouteObject = {
  path: "/shop",
  element: <BaseShop />,
  id: "shop",
  errorElement: <ShopIndexErrorPage />,
  children: [
    {
      path: "/shop",
      id: "shop-landing",
      element: <ShopLandingPage />,
    },
  ],
};

export default ShopRoutes;
