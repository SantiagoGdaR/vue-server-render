// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    routes: [
      { path: '/', component: Home },
      { path: '/about/', component: About }
    ]
  });
}