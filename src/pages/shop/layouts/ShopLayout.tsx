import ShopFooter from "@shop-pages/components/ShopFooter";
import ShopHeader from "@shop-pages/components/ShopHeader";
import React from "react";

type ShopLayoutProps = {
  children: React.ReactNode;
};

const ShopLayout: React.FunctionComponent<ShopLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-rubik">
      <ShopHeader />
      <div className="w-full">
        <div className="mx-auto w-full min-h-[80vh]">{children}</div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
