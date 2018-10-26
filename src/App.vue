<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { store } from './vuex/store';
import Header from './components/Header';

export default {
  name: 'App',
  store,
  components: {
    Header
  },
  methods: {},
  mounted() {
    console.log('hi hello');
    document.body.className = 'home';
  }
};
</script>

<style scoped lang="sass">
  @import "./style/grid"
  @import "./style/global"
  @import "./style/variable"
  @import "./style/font"

  body.home
    margin: 0
    background-color: #a5d6a7
  *
    box-sizing: border-box

  .container
    max-width: 1140px
    margin: $header-height auto 0 auto
    background-color: #fff

  .center-wrapper
    @include align-center()

  .center-wrapper-vertical
    @include align-vertical-center

  .test
    border: solid 1px black

</style>
