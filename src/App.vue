<script lang="ts">
  import { defineComponent } from "vue";
  import { Store } from "./stores/store";

  export default defineComponent({
    name: "App",
    setup() {
      const store = Store();

      store.addTheme({
        name: "Energie"
      });
      store.addTheme({
        name: "Wonen"
      });
      store.addTheme({
        name: "Stikstof"
      });

      store.addLabel({
        name: "Rapport"
      });
      store.addLabel({
        name: "Energieverbruik"
      });
      store.addLabel({
        name: "Zonnepanelen"
      });
    }
  })
</script>

<template>
  <a href="https://www.reddit.com/r/therewasanattempt/comments/xgmzy7/to_eat_the_fish_and_complete_the_challenge/"></a>
  <router-link to="/"></router-link>
  <router-link to="/search"></router-link>
  <router-view></router-view>
</template>

<style scoped>

</style>
