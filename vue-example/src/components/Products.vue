<script setup lang="ts">
import Product from "../composables/useFilters"
defineProps<{ products: Product[] }>()
</script>

<template>
  <ul>
    <li v-for="p of products" key={p.emoji} class="product">
      <h2>{{ p.emoji }}</h2>
      <small>{{ p.category }}</small>
      <hr />
      <span class="price">💵 {{ p.price }}</span>
    </li>
  </ul>
</template>
