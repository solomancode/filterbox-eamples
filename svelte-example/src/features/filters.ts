import { writable } from "svelte/store";
import { products, type Product } from "../data";
import { Filterbox } from "@filterbox/v1";

// declare select data type
export interface SelectData {
  label: string;
  options: string[];
}

const selectCategoryData: SelectData = {
  label: "select category",
  options: ["Animal", "Fruit", "Drink"],
};

export function filters() {
  // TODO: create & configure filterbox filters
  const filterbox = new Filterbox([
    // select category filter
    {
      key: "category",
      control: {
        type: "select",
        data: selectCategoryData,
      },
      match(item: Product, ctx) {
        const selected = ctx.getFilterValue("category");
        if (selected.isNotSet()) return true; // match when nothing selected
        return item.category === selected.toString();
      },
    },
  ]);

  let controls = writable(filterbox.controls.value());
  filterbox.controls.subscribe((update) => {
    controls.set(update);
  });

  let filteredProducts = writable(products);
  filterbox.match(products).subscribe((data) => {
    filteredProducts.set(data);
  });

  let queryString = writable("");
  let payload = writable("");

  filterbox.query.subscribe((q) => {
    queryString.set(q.string());
    payload.set(JSON.stringify(q.object()));
  });

  return { products, controls, filteredProducts, queryString, payload };
}
