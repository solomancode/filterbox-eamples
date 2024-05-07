import { ref } from "vue";
import { Product, products } from "../data";
import { Filterbox } from "@filterbox/v1";
// declare select data type
interface SelectData {
  label: string;
  options: string[];
}

const selectCategoryData: SelectData = {
  label: "select category",
  options: ["Animal", "Fruit", "Drink"],
};

export default function useFilters() {
  // TODO: create & configure filterbox filters
  const filterbox = new Filterbox([
    // select category config
    {
      key: "category",
      control: {
        type: "select",
        data: selectCategoryData,
      },
      match(item: Product, ctx) {
        const selected = ctx.getFilterValue("category");
        if (selected.isNotSet()) return true; // match if nothing selected
        return item.category === selected.toString();
      },
    },
  ]);

  const controls = ref(filterbox.controls.value());
  filterbox.controls.subscribe((update) => (controls.value = update));

  const filteredProducts = ref(products);
  filterbox
    .match(products)
    .subscribe((data) => (filteredProducts.value = data));

  const queryString = ref("");
  const payload = ref("");
  filterbox.query.subscribe((q) => {
    queryString.value = q.string();
    payload.value = JSON.stringify(q.object());
  });

  return { products, controls, filteredProducts, queryString, payload };
}
