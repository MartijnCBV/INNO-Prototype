<script lang="ts">
  import { defineComponent } from "vue";
  import { Store } from "./stores/store";

  export default defineComponent({
    name: "App",
    setup() {
      const store = Store();

      store.addTheme({
        name: "Energie",
        checked: false
      });
      store.addTheme({
        name: "Wonen",
        checked: false
      });
      store.addTheme({
        name: "Stikstof",
        checked: false
      });

      store.addLabel({
        name: "Rapport",
        checked: false
      });
      store.addLabel({
        name: "Energieverbruik",
        checked: false
      });
      store.addLabel({
        name: "Zonnepanelen",
        checked: false
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
