import React from "react";
import {
  TfiControlShuffle,
  TfiEye,
  TfiHeart,
  TfiShoppingCart,
  TfiStar,
} from "react-icons/tfi";
import ShopAdvantageSection from "../components/ShopAdvantageSection";
import ShopCategories from "../components/ShopCategories";
import ShopHeroSection from "../components/ShopHeroSection";
import ShopLandingPageCollectionRow from "../components/ShopLandingPageCollectionRow";
import { products } from "../data/products";

const ShopLandingPage = () => {
  const fProducts = React.useMemo(() => products, []);
  return (
    <div className="w-full h-fulll ">
      <ShopHeroSection />
      <div className="h-full bg-neutral-300 py-10">
        <ShopAdvantageSection />
        <ShopCategories />
        <ShopLandingPageCollectionRow title="Featured collection">
          <div className="py-8 grid grid-cols-12 gap-4">
            {fProducts.map((product) => (
              <div
                key={product.id}
                className="col-span-2 bg-white group rounded-lg h-full relative flex flex-col justify-between overflow-hidden py-4 cursor-pointer"
              >
                <div className="flex flex-col flex-1 h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain w-full"
                  />
                  <div>
                    {/* Top product cations */}
                    <div className="absolute top-0 p-2 flex justify-between w-full items-center">
                      <div className="bg-orange-500 text-white rounded-full text-sm h-fit">
                        {product.discount ? (
                          <span className="p-2 group-hover:hidden">
                            -{product.discount}%
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <button className="hover:bg-gray-300 text-black rounded-full text-sm p-2">
                          <TfiHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar actions */}
                  <div className="absolute group-hover:right-1 bg-neutral-100 rounded-md -right-10 top-10 text-xl flex flex-col gap-4 p-2 transition-all ease-linear duration-300 ">
                    <TfiControlShuffle />
                    <TfiEye />
                    <TfiShoppingCart />
                  </div>
                  <div className="text-neutral-900 text-md mt-2 py-4 flex flex-col gap-2 px-4">
                    <div className="text-orange-600">{product.company}</div>
                    <div className="font-medium">{
                      product.name
                    }</div>
                    <div className="flex">
                      {Array.from({ length: product.rating }).map((r, i) => (
                        <TfiStar key={i} />
                      ))}
                    </div>
                    <div>
                      {product.currency} {product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShopLandingPageCollectionRow>
      </div>
    </div>
  );
};

export default ShopLandingPage;
