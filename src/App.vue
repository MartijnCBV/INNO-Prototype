<script lang="ts">
import {defineComponent} from "vue";
import {Store} from "./stores/store";
import {ResultType} from "./models/Result";

export default defineComponent({
    name: "App",
    setup() {
      const store = Store();

      const theme1 = {
        name: "Energie",
        checked: false
      }

      const theme2 = {
        name: "Wonen",
        checked: false
      }

      store.addTheme(theme1);
      store.addTheme(theme2);
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
      store.addResult({
        id: 1,
        name: "Rapport energieverbruik woningen",
        type: ResultType.FILE,
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum.",
        longDesc: "Integer massa metus, tristique eget augue in, mattis laoreet lacus. Pellentesque eget sodales dui. Quisque malesuada interdum justo, ac vulputate nunc faucibus eget. Maecenas sit amet blandit magna, at faucibus dui. Donec tincidunt condimentum dui, at ullamcorper ipsum placerat ut. Nullam viverra accumsan dolor eget laoreet. Praesent orci nisi, aliquam eu pharetra sed, cursus ut tellus. Aenean leo lorem, dictum eu fringilla sit amet, consectetur sed enim. Proin condimentum risus sollicitudin, elementum erat eu, cursus lorem. Suspendisse a sem orci. Pellentesque non sollicitudin metus. Cras tincidunt, mauris elementum consectetur posuere, felis turpis imperdiet dolor, a ornare magna massa quis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        themes: [theme1, theme2],
        labels: []
      });
      store.addResult({
        id: 2,
        name: "Energieverbruik van woningen",
        type: ResultType.DATABASE,
        shortDesc: "Fusce quis porttitor sapien. Praesent pretium fermentum imperdiet.",
        longDesc: "Integer massa metus, tristique eget augue in, mattis laoreet lacus. Pellentesque eget sodales dui. Quisque malesuada interdum justo, ac vulputate nunc faucibus eget. Maecenas sit amet blandit magna, at faucibus dui. Donec tincidunt condimentum dui, at ullamcorper ipsum placerat ut. Nullam viverra accumsan dolor eget laoreet. Praesent orci nisi, aliquam eu pharetra sed, cursus ut tellus. Aenean leo lorem, dictum eu fringilla sit amet, consectetur sed enim. Proin condimentum risus sollicitudin, elementum erat eu, cursus lorem. Suspendisse a sem orci. Pellentesque non sollicitudin metus. Cras tincidunt, mauris elementum consectetur posuere, felis turpis imperdiet dolor, a ornare magna massa quis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        themes: [theme1, theme2],
        labels: []
      });
      store.addResult({
        id: 3,
        name: "Inwoners met zonnepanelen",
        type: ResultType.INFOGRAPHIC,
        shortDesc: "Ut consectetur bibendum arcu eu luctus. In hac habitasse platea dictumst.",
        longDesc: "Integer massa metus, tristique eget augue in, mattis laoreet lacus. Pellentesque eget sodales dui. Quisque malesuada interdum justo, ac vulputate nunc faucibus eget. Maecenas sit amet blandit magna, at faucibus dui. Donec tincidunt condimentum dui, at ullamcorper ipsum placerat ut. Nullam viverra accumsan dolor eget laoreet. Praesent orci nisi, aliquam eu pharetra sed, cursus ut tellus. Aenean leo lorem, dictum eu fringilla sit amet, consectetur sed enim. Proin condimentum risus sollicitudin, elementum erat eu, cursus lorem. Suspendisse a sem orci. Pellentesque non sollicitudin metus. Cras tincidunt, mauris elementum consectetur posuere, felis turpis imperdiet dolor, a ornare magna massa quis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        themes: [theme1, theme2],
        labels: []
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
