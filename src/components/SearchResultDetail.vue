<template>
  <div class="mw grid grid-cols-5 px-7">
    <div class="col-span-3">
      <div class="grid grid-cols-5">
        <div v-html="decideType(currentResult.type)" class="mb-3"></div>
        <h1 class="text-2xl col-span-4 mt-6">{{ currentResult.name }}</h1>
      </div>
      <div class="mb-4">
        <h1>Omschrijving:</h1>
        <p>{{ currentResult.longDesc }}</p>
      </div>
      <button type="button" @click="openSource()" class="bg-c-red rounded-xl text-white px-7 py-3 w-full">Open bron</button>
    </div>

    <div class="col-span-2">
      <h1 class="mt-7 ml-7">Kenmerken:</h1>
      <div class="bg-c-grey ml-7">

      </div>
    </div>
  </div>
</template>

<script>
import {Store} from "/src/stores/store";
import {ResultType} from "/src/models/Result";

let currentResult;

export default {
  name: "SearchResultDetail",
  setup() {
    const store = Store();

    currentResult = store.getCurrentResult();

    function decideType(type) {
      switch (type) {
        case ResultType.FILE: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/file_icon.svg" alt="file icon"/>'
        }
        case ResultType.DATABASE: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/database_icon.svg" alt="database icon"/>'
        }
        case ResultType.INFOGRAPHIC: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/infographic_icon.svg" alt="infographic icon"/>'
        }
      }
    }

    function openSource() {
      location.href = process.env.NODE_ENV === 'production'
        ? '/INNO-Prototype/#/Source'
        : '/#/Source';
    }

    return {
      currentResult,
      decideType,
      openSource
    }
  }
}
</script>

<style scoped>

</style>
