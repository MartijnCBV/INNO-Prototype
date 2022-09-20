<template>
  <app-header></app-header>
  <main>
    <div class="bg-[url('/src/assets/bg-building.svg')] bg-contain bg-no-repeat w-full h-0 pb-[31.95%]">
      <searchbar></searchbar>
    </div>
  </main>
</template>

<script>
import Searchbar from "/src/components/Searchbar.vue";
import AppHeader from "/src/components/AppHeader.vue";
export default {
name: "Home",
  components: {AppHeader, Searchbar}
}
</script>

<style scoped>

</style>
