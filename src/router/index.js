import Vue from 'vue';
import Router from 'vue-router';
import Main from '../page/Main';
import Hello from '../page/Hello';
import RegPoll from '../page/regPoll';
import MakePoll from '../page/MakePoll';
import ResponsePoll from '../page/ResponsePoll';
import Register from '../page/Register';

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
    },
    {
      path: '/regPoll',
      name: 'RegPoll',
      component: RegPoll
    },
    {
      path: '/makePoll',
      name: 'MakePoll',
      component: MakePoll
    },
    {
      path: '/responsePoll',
      name: 'ResponsePoll',
      component: ResponsePoll
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
});
