<script setup lang="ts">

const props = defineProps<{
  value: string;
  data: {
    label: string;
    options: string[];
  }
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('select', target.value)
}

</script>

<template>
  <select class="select" @change="onChange($event)">
    <option value="">{{ props.data.label }}</option>;
    <option v-for="opt of props.data.options" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>
