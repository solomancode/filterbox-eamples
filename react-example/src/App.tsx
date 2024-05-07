import "./App.css";
import { Products } from "./Products";
import { Select } from "./Select";
import { products } from "./data";
import { SelectData, useFilters } from "./useFilters";

function App() {
  const { controls, filteredProducts, query } = useFilters();
  return (
    <div>
      {controls.map((ctrl) => {
        switch (ctrl.type()) {
          case "select":
            const selectData: SelectData = ctrl.data();
            return (
              <Select
                label={selectData.label}
                options={selectData.options}
                onChange={(value) => ctrl.filter().setValue(value)}
              />
            );

          default:
            return null;
        }
      })}
      <pre>q: {query.string()}</pre>
      <hr />
      <pre>payload: {JSON.stringify(query.object())}</pre>
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
