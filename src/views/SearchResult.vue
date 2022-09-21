<template>
  <AppHeader></AppHeader>
  <SearchbarBar></SearchbarBar>
  <search-result-filter></search-result-filter>
</template>

<script>
import AppHeader from "/src/components/AppHeader.vue";
import SearchbarBar from "/src/components/SearchbarBar.vue";
import SearchResultFilter from "/src/components/SearchResultFilter.vue";
export default {
name: "SearchResult",
  components: {SearchResultFilter, SearchbarBar, AppHeader}
}
</script>

<style scoped>

</style>
