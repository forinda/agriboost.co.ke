import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

type ShopLandingPageCollectionRowProps = {
  children: JSX.Element;
  title: string;
};

const ShopLandingPageCollectionRow: React.FunctionComponent<
  ShopLandingPageCollectionRowProps
> = ({ children, title }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h2 className="text-neutral-900 font-semibold text-2xl">{title}</h2>
        <div className="flex items-center">
          <TiChevronLeft className="text-2xl" />
          <TiChevronRight className="text-2xl" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ShopLandingPageCollectionRow;
