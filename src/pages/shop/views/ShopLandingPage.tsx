import React from "react";
import ShopAdvantageSection from "../components/ShopAdvantageSection";
import ShopCategories from "../components/ShopCategories";
import ShopHeroSection from "../components/ShopHeroSection";

const ShopLandingPage = () => {
  return (
    <div className="w-full h-fulll ">
      <ShopHeroSection />
      <div className="h-full bg-neutral-300">
        <ShopAdvantageSection />
        <ShopCategories />
      </div>
    </div>
  );
};

export default ShopLandingPage;
