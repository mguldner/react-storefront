import React from "react";
import { FilteredProductList } from "@/components/productList/FilteredProductList";

export function NewProducts() {
  return (
    <div className="flex flex-col gap-5 items-center mt-8">
      <p className="text-7xl font-medium w-1/2 text-center">
        Découvre nos produits fraichement péchés à la Mégacanne rien que pour toi!
      </p>
      <p className="text-2xl font-light w-1/2 text-center">
        Les nouvelles tendances du moments bientôt dans ta sacoche!
      </p>
      <div className="container px-8 mt-4">
        <FilteredProductList attributeFiltersData={[]} collectionIDs={["Q29sbGVjdGlvbjoz"]} />
      </div>
    </div>
  );
}
