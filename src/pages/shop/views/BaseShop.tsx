import React from "react";
import { Outlet } from "react-router-dom";
import ShopLayout from "../layouts/ShopLayout";

const BaseShop = () => {
  return (
    <ShopLayout>
      <Outlet />
    </ShopLayout>
  );
};

export default BaseShop;
