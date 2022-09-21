<template>
  <div>
    <div v-for="theme in themes">{{ theme.name }}</div>
  </div>
  <div>
    <div v-for="label in labels">{{ label.name }}</div>
  </div>
</template>

<script>
import { Store } from "/src/stores/store";
import { onMounted, ref } from "vue";

export default {
  name: "SearchResultFilter",
  setup() {
    const store = Store();
    let themes = ref();
    let labels = ref();

    onMounted(() => {
      themes.value = store.getThemes();
      labels.value = store.getLabels();
    });

    return {
      themes,
      labels
    };
  }
}
</script>

<style scoped>

</style>
