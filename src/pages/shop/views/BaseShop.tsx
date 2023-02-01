import ShopLayout from "@shop-pages/layouts/ShopLayout";
import React from "react";
import { Outlet } from "react-router-dom";

const BaseShop = () => {
  return (
    <ShopLayout>
      <Outlet />
    </ShopLayout>
  );
};

export default BaseShop;
