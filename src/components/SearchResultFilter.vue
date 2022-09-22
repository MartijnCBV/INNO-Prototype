<template>
  <div class="ml-7 pr-7 flex flex-col">
    <div class="pb-3">
      <button id="themeFilterBtn" type="button" @click="collapse('themeFilter', 'themeFilterBtn', 'Thema')"
              class="border-b border-c-grey w-[175px] text-justify">
        <i class="material-icons text-c-red filter-icon p-[2px] bg-c-grey">remove</i>
        <span class="pl-3 text-xl">Thema</span>
      </button>
      <form id="themeFilter" style="display: block">
        <div v-for="theme in themes">
          <input type="checkbox" :name="theme.name" value="1" :id="theme.name" checked class="accent-c-red">
          <label :for="theme.name" class="pl-2">{{ theme.name }}</label>
        </div>
      </form>
    </div>

    <div class="pb-3">
      <button id="labelFilterBtn" type="button" @click="collapse('labelFilter', 'labelFilterBtn', 'Label')"
              class="border-b border-c-grey w-[175px] text-justify">
        <i class="material-icons text-c-red filter-icon p-[2px] bg-c-grey">remove</i>
        <span class="pl-3 text-xl">Label</span>
      </button>
      <form id="labelFilter" style="display: block">
        <div v-for="label in labels">
          <input type="checkbox" :name="label.name" value="1" :id="label.name" checked class="accent-c-red">
          <label :for="label.name" class="pl-2">{{ label.name }}</label>
        </div>
      </form>
    </div>
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

    function collapse(id, btn, name) {
      const collapsable = document.getElementById(id);
      const button = document.getElementById(btn);
      collapsable.style.display = collapsable.style.display === "block" ? "none" : "block";
      button.innerHTML = button.firstChild.innerHTML === 'remove' ?
          '<i class="material-icons text-white filter-icon p-[2px] bg-c-red">add</i><span class="pl-3 text-xl">' + name + '</span>' :
          '<i class="material-icons text-c-red filter-icon p-[2px] bg-c-grey">remove</i><span class="pl-3 text-xl">' + name + '</span>';
    }

    return {
      themes,
      labels,
      collapse
    };
  }
}
</script>

<style scoped>

</style>
