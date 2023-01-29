import { RouteObject } from "react-router-dom";
import ShopIndexErrorPage from "../pages/shop/errors/ShopIndexErrorPage";
import BaseShop from "../pages/shop/views/BaseShop";
import ShopLandingPage from "../pages/shop/views/ShopLandingPage";

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
