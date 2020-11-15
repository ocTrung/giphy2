import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GifShow from "../views/GifShow.vue";
import Random from '../views/Random.vue';
import Mood from '../views/Mood.vue';
import SearchResult from '../views/SearchResult.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gif/:id",
    name: "gif-show",
    component: GifShow,
    props: true
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
    props: true
  },
  {
    path: "/mood",
    name: "Mood",
    component: Mood,
    props: true
  },
  {
    path: "/search/:query",
    name: "SearchResult",
    component: SearchResult,
    props: true
  }

];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
