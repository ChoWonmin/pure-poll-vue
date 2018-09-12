import Vue from 'vue';
import Router from 'vue-router';
import Main from '../page/Main';
import Hello from '../page/Hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
});
