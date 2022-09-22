<template>
  <div class="bg-c-grey w-full mb-3">
    <div class="mw grid grid-cols-7" >
      <h1 class="text-white text-2xl font-bold py-7 col-span-2">
        <span class="bg-c-brown px-7 py-[13px] mx-7 inline-block max-w-s">Resultaten</span>
      </h1>
      <form class="py-7 col-span-4" @submit.prevent="onSubmit()">
        <label for="searchbar" class="hidden">Zoek in data</label>
        <div class="w-full h-full max-w-fit">
          <input id="searchbar" type="text" placeholder="Zoek in databronnen" :value="currentQuery"
                 class="w-[400px] ml-7 px-7 py-[15px] text-xl border-transparent focus:border-transparent focus:ring-0 float-left"/>
          <button type="submit" class="bg-c-red float-right border border-c-red">
            <i class="material-icons text-white search-icon p-[10px]">search</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {Store} from "/src/stores/store";

export default {
  name: "SearchbarBar",
  setup() {
    const store = Store();
    let currentQuery = store.getCurrentQuery().content;

    return {
      currentQuery
    }
  },
  methods: {
    onSubmit() {
      const store = Store();
      store.setCurrentQuery({content: document.getElementById("searchbar").value})
      location.href = process.env.NODE_ENV === 'production'
          ? '/INNO-Prototype/#/Search'
          : '/#/Search';
    }
  }
}
</script>

<style scoped>

</style>
