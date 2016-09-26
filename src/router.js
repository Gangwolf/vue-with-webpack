import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = _ => System.import('./components/Home.vue');
const About = _ => System.import('./components/About.vue');
const Counter = _ => System.import('./components/Counter.vue');

Vue.config.debug = true;
Vue.config.devtools = true;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
     path: '/',
     name: 'home',
     component: Home
    },
    {
     path: '/about',
     name: 'about',
     component: About
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
     path: '*', 
     redirect: '/'
    }
  ]
});

export default router;
