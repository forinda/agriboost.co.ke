import { categories } from "@shop-pages/data/categories";
import React from "react";

const ShopCategories = () => {
  const categories1 = React.useMemo(
    () =>
      categories.length % 2 === 0
        ? categories.slice(0, categories.length / 2)
        : categories.slice(0, categories.length / 2 + 1),
    []
  );
  const categories2 = React.useMemo(
    () =>
      categories.length % 2 === 0
        ? categories.slice(categories.length / 2, categories.length)
        : categories.slice(categories.length / 2 + 1, categories.length),
    []
  );
  return (
    <div className="container mx-auto p-8 rounded-md shadow-lg bg-neutral-100">
      <div className={`flex`}>
        {categories1.map((category) => (
          <div key={category.id} className="flex gap-2 h-28 items-center flex-1 border-b border-l-2 first:border-l-0 py-10 px-4">
            <div>
              <div className="text-neutral-900 font-semibold text-md mt-2">
                {category.name}
              </div>
              <div className="text-neutral-600 text-sm">
                {category.items} items
              </div>
            </div>
            <img
              src={category.image}
              alt={category.name}
              className=" h-20 rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      <div className={`flex`}>
        {categories2.map((category) => (
          <div key={category.id} className="flex gap-2 h-28 items-center flex-1 border-t border-l-2 first:border-l-0 py-10 px-4">
            <div>
              <div className="text-neutral-900 font-semibold text-md mt-2">
                {category.name}
              </div>
              <div className="text-neutral-600 text-sm">
                {category.items} items
              </div>
            </div>
            <img
              src={category.image}
              alt={category.name}
              className=" h-20 rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
