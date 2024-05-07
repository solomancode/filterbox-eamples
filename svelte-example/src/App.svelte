<script lang="ts">
  import { filters } from "./features/filters";
  let { products, controls, filteredProducts, queryString, payload } =
    filters();
  import Products from "./components/Products.svelte";
  import Select from "./components/Select.svelte";
</script>

<main>
  {#each $controls as c}
    {#if c.type() === "select"}
      <Select
        data={c.data()}
        on:change={(e) => c.filter().setValue(e.detail)}
      />
    {/if}
  {/each}
  <pre>queryString: {$queryString}</pre>
  <pre>payload: {$payload}</pre>
  <Products products={$filteredProducts} />
</main>
