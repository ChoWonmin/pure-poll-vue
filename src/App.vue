<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import { store } from './vuex/store';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  store,
  components: {
    Header,
    Footer
  },
  methods: {},
  mounted() {
    console.log('hi hello');
    document.body.className = 'home';
  }
};
</script>

<style scoped lang="sass">
  @import "./style/variable"
  @import "./style/font"

  body
    margin: 0 !important
    background-color: #a5d6a7
  *
    box-sizing: border-box

  .container
    max-width: 1140px
    margin: $header-height auto 0 auto

  .test
    border: solid 1px black

</style>
