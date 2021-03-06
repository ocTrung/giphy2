import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GifCard from '@/components/GifCard.vue';

Vue.component("GifCard", GifCard)

Vue.config.productionTip = false;

var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
