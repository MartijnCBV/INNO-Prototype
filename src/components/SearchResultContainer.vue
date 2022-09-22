<template>
  <div>
    <div class="border-b border-c-grey border-solid">
      <span>{{ results.length }} resultaten voor "{{ currentQuery.content }}"</span>
    </div>
  </div>
</template>

<script>
import {Store} from "../stores/store";

export default {
  name: "SearchResultContainer",
  setup() {
    const store = Store();
    const results = store.getResults();
    const currentQuery = store.getCurrentQuery();

    return {
      results,
      currentQuery
    }
  }
}
</script>

<style scoped>

</style>
