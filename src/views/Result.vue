<template>
  <app-header></app-header>
  <search-result-detail></search-result-detail>
</template>

<script>
import AppHeader from "/src/components/AppHeader.vue";
import {Store} from "/src/stores/store";
import SearchResultDetail from "/src/components/SearchResultDetail.vue";
export default {
  name: "Result",
  components: {SearchResultDetail, AppHeader},
  setup() {
    const store = Store();
    console.log(store.getCurrentResult())
  }
}
</script>

<style scoped>

</style>
