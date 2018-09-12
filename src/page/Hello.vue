<template>
  <div class="hello">
    <h1>Welcome to Hanu Vue Template</h1>
    <h4>vuex store</h4>
    <h3 v-html="$store.getters.getCount"></h3>
    <div>
      <span v-on:click="increment" style="cursor: pointer">[ INCREMENT ]</span>
      <span v-on:click="decrement" style="cursor: pointer">[ DECREMENT ]</span>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="https://github.com/hyunwoo/vue-template" target="_blank">
          Github for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import { store } from '../vuex/store';

export default {
  name: 'HelloWorld',
  store,
  data() {
    return {
      msg: 'Welcome to Hanu Vue Template',
      posX: 0,
      posY: 0
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    getPosition() {
      return {
        left: `${this.posX}px`,
        top: `${this.posY}px`
      };
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment', { inc: 1 });
    },
    decrement() {
      this.$store.commit('increment', { inc: -1 });
    },
    async mousemoved() {
      console.log(this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
