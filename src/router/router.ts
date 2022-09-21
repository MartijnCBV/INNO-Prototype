import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home.vue';
import SearchResult from '../views/SearchResult.vue';

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
        }
    ]
})
