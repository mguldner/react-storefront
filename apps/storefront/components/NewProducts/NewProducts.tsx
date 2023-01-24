import React from "react";
import { FilteredProductList } from "@/components/productList/FilteredProductList";

export function NewProducts() {
  return (
    <div className="flex flex-col gap-5 items-center mt-8">
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-medium w-5/6 sm:w-3/4 2xl:w-1/2 text-center">
        Découvre nos produits fraichement péchés à la Mégacanne rien que pour toi!
      </p>
      <p className="hidden sm:block text-base xl:text-lg font-light w-1/2 text-center">
        Les nouvelles tendances du moments bientôt dans ta sacoche!
      </p>
      <div className="container px-8 mt-4">
        <FilteredProductList attributeFiltersData={[]} collectionIDs={["Q29sbGVjdGlvbjoz"]} />
      </div>
    </div>
  );
}
