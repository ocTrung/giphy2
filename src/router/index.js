import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GifShow from '../views/GifShow.vue';

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
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
