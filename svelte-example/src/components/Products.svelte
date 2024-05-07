<script lang="ts">
  import type { Product } from "../features/filters";
  export let products: Product[];
</script>

<ul>
  {#each products as p}
    <li class="product">
      <h2>{p.emoji}</h2>
      <small>{p.category}</small>
      <hr />
      <span class="price">💵 {p.price}</span>
    </li>
  {/each}
</ul>
