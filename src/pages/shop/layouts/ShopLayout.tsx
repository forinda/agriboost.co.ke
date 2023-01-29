import React from "react";
import ShopFooter from "../components/ShopFooter";
import ShopHeader from "../components/ShopHeader";

type ShopLayoutProps = {
  children: React.ReactNode;
};

const ShopLayout: React.FunctionComponent<ShopLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-rubik">
      <ShopHeader />
      <div className="w-full bg-neutral-300">
        <div className="mx-auto w-full max-w-7xl min-h-[80vh]">{children}</div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
