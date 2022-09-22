<template>
  <app-header></app-header>
  <main>
    <div class="bg-[url('/src/assets/bg-building.svg')] bg-cover bg-no-repeat w-full h-[70vh]">
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
