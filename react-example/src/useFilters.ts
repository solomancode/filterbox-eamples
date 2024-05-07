import { Filterbox } from "@filterbox/v1";
import { useEffect, useMemo, useState } from "react";
import { Product, products } from "./data";

// declare select data type
export interface SelectData {
  label: string;
  options: string[];
}

const categorySelectData: SelectData = {
  label: "select category",
  options: ["Animal", "Fruit", "Drink"],
};

export const useFilters = () => {
  // TODO: create & configure filterbox filters
  const filterbox = useMemo(() => {
    return new Filterbox([
      // category select filter
      {
        key: "category",
        control: {
          type: "select",
          data: categorySelectData,
        },
        match(item: Product, ctx) {
          const selected = ctx.getFilterValue("category");
          if (selected.isNotSet()) return true; // match all
          return item.category === selected.toString();
        },
      },
    ]);
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    filterbox.match(products).subscribe((data) => {
      setFilteredProducts(data);
    });
  }, []);

  return {
    controls: filterbox.controls.value(),
    filteredProducts,
    query: filterbox.query.value(),
  };
};
