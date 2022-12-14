import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home.vue';
import SearchResult from '../views/SearchResult.vue';
import Result from '../views/Result.vue';
import Source from '../views/Source.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/search",
            name: "Search",
            component: SearchResult
        },
        {
            path: "/result",
            name: "Result",
            component: Result
        },
        {
            path: "/source",
            name: "Source",
            component: Source
        }
    ]
})
