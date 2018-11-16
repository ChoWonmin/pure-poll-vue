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
  methods: {}
};
</script>

<style lang="sass">
  @import "./style/variable"
  @import "./style/font"

  body
    margin: 0
    background-color: #efefef
  *
    box-sizing: border-box

  .container
    max-width: 1140px
    margin: $header-height auto 0 auto

</style>
