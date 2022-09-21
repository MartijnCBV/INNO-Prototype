<template>
  <div class="mw">
    <h1 class="text-white text-3xl font-bold pt-10">
      <span class="bg-c-brown p-7 mx-7 inline-block max-w-s">Zoek in databronnen</span>
    </h1>
    <form class="mt-[32px]">
      <label for="searchbar" class="hidden">Zoek in databronnen</label>
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
export default {
  name: "Searchbar"
}
</script>

<style scoped>

</style>
