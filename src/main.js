import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from './state/store.js';
import router from './router.js';
import App from './App.vue';

sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

app.$mount('#app');