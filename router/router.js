// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        { path: '/home/', component: Home }
    ]
  });
}