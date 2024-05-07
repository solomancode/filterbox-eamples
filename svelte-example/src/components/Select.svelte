<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SelectData } from "../features/filters";

  export let data: SelectData;

  const dispatch = createEventDispatcher();

  function onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    dispatch("change", target.value);
  }
</script>

<select class="select" on:change={onChange}>
  <option value="">{data.label}</option>;
  {#each data.options as opt}
    <option value={opt}>
      {opt}
    </option>
  {/each}
</select>
