<template>
  <div class="mw">
    <h1 class="text-white text-3xl font-bold pt-10">
      <span class="bg-c-brown p-7 mx-7 inline-block max-w-s">Zoek in data</span>
    </h1>
    <form class="mt-[32px]" @submit.prevent="onSubmit()">
      <label for="searchbar" class="hidden">Zoek in data</label>
      <div class="w-full h-full max-w-fit">
        <input id="searchbar" type="text" placeholder="Zoek in databronnen"
               class="w-[484px] ml-7 px-7 py-5 text-xl border-transparent focus:border-transparent focus:ring-0 float-left">
        <button type="submit" class="bg-c-red float-right border border-c-red">
          <i class="material-icons text-white search-icon p-[15px]">search</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {Store} from "/src/stores/store";

export default {
  name: "Searchbar",
  methods: {
    onSubmit() {
      const store = Store();
      console.log(store.getCurrentQuery())
      console.log(document.getElementById("searchbar").value)
      store.setCurrentQuery({content: document.getElementById("searchbar").value})
      console.log(store.getCurrentQuery())
      location.href = process.env.NODE_ENV === 'production'
          ? '/INNO-Prototype/#/Search'
          : '/#/Search';
    }
  }
}
</script>

<style scoped>

</style>
