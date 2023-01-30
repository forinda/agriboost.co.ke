import React from "react";
import { advantages } from "../data/advantages";

const ShopAdvantageSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  items-center justify-center w-full py-10 gap-2 bg-neutral-300">
        {advantages.map((advantage) => {
          const { title, description, Icon } = advantage;
          return (
            <div className="flex gap-3 items-center justify-center w-full h-[100px] border rounded-md">
              <Icon className="text-6xl text-neutral-500" />
              <div>
                <div className="text-xl font-bold text-neutral-700">
                  {title}
                </div>
                <div className="text-sm text-neutral-700">{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopAdvantageSection;
