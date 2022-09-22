<template>
  <AppHeader></AppHeader>
  <main>
    <SearchbarBar></SearchbarBar>
    <div class="grid grid-cols-7 mw">
      <search-result-filter class="col-span-2"></search-result-filter>
      <search-result-container class="col-span-4"></search-result-container>
    </div>
  </main>
</template>

<script>
import AppHeader from "/src/components/AppHeader.vue";
import SearchbarBar from "/src/components/SearchbarBar.vue";
import SearchResultFilter from "/src/components/SearchResultFilter.vue";
import SearchResultContainer from "/src/components/SearchResultContainer.vue";
export default {
  name: "SearchResult",
  components: {SearchResultContainer, SearchResultFilter, SearchbarBar, AppHeader},
}
</script>

<style scoped>

</style>
