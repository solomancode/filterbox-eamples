<script setup lang="ts">
import Products from './components/Products.vue'
import Select from './components/Select.vue'
import useFilters from './composables/useFilters'
const { products, controls, filteredProducts, queryString, payload } = useFilters();
</script>

<template>
  <template v-for="c of controls">
    <Select v-if="c.type() === 'select'" :data="c.data()" @select="c.filter().setValue($event)"
      :value="c.filter().value().value().toString()" />
  </template>
  <pre>queryString: {{ queryString }}</pre>
  <hr>
  <pre>payload: {{ payload }}</pre>
  <Products :products="filteredProducts" />
</template>
