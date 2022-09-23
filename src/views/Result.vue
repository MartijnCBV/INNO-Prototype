<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from "/src/components/AppHeader.vue";
import {Store} from "/src/stores/store";
export default {
  name: "Result",
  components: {AppHeader},
  setup() {
    const store = Store();
    console.log(store.getCurrentResult())
  }
}
</script>

<style scoped>

</style>
