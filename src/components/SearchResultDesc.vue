<template>
  <div class="border-b border-c-grey border-solid grid grid-cols-5" @click="openResult()">
    <div v-html="decideType(result.type)" class="row-span-3"></div>
    <span class="text-2xl col-span-4">{{ result.name }}</span>
    <span class="col-span-4">{{ result.shortDesc }}</span>
    <div class="col-span-4 py-3">
      <p v-for="theme in result.themes" class="bg-c-red text-white px-2 max-w-fit mr-4 rounded-xl inline-block">{{ theme.name }}</p>
    </div>
  </div>
</template>

<script>
import {ResultType} from "/src/models/Result";
import {Store} from "/src/stores/store";

export default {
  name: "SearchResultDesc",
  props: ["result"],
  setup(props) {
    const store = Store();

    function decideType(type) {
      switch (type) {
        case ResultType.FILE: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/file_icon.svg" alt="file icon" class="m-auto"/>'
        }
        case ResultType.DATABASE: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/database_icon.svg" alt="database icon" class="m-auto"/>'
        }
        case ResultType.INFOGRAPHIC: {
          return '<img src="https://raw.githubusercontent.com/MartijnCBV/INNO-Prototype/master/src/assets/infographic_icon.svg" alt="infographic icon" class="m-auto"/>'
        }
      }
    }

    function openResult() {
      store.setCurrentResult(props.result);
      location.href = process.env.NODE_ENV === 'production'
        ? '/INNO-Prototype/#/Result'
        : '/#/Result';
    }

    return {
      decideType,
      openResult
    }
  }
}
</script>

<style scoped>

</style>
