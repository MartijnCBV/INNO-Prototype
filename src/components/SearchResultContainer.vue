<template>
  <div>
    <div class="border-b border-c-grey border-solid">
      <span>{{ results.length }} resultaten voor "{{ currentQuery.content }}"</span>
    </div>
    <div>
      <SearchResultDesc v-for="result in results" :key="result.id" :result="result"></SearchResultDesc>
    </div>
  </div>
</template>

<script>
import {Store} from "/src/stores/store";
import {ref} from "vue";
import SearchResultDesc from "/src/components/SearchResultDesc.vue";

let currentQuery = ref();
let results = ref();

export default {
  name: "SearchResultContainer",
  components: {SearchResultDesc},
  setup() {
    const store = Store();
    results.value = store.getResults();
    currentQuery.value = store.getCurrentQuery();

    return {
      results,
      currentQuery
    }
  }
}
</script>

<style scoped>

</style>
