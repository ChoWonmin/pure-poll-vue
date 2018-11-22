<template lang="jade">
  .container
    .left-view.center-wrapper
      .title 당신의 의견을 안전하고 정확하게
      .sub-title PurePoll은 여론조사입니다.
      .sub-title 쉽고 직관적이지만, 안전하게 여론조사를 관리합니다.
      .sub-title 당신의 소중한 의견으로 새로운 세상을 만들어 보세요.
      .btn-nav
        Button(:name="'회원가입'", :option="'big'", v-on:click="gotoRegister")
    .right-view
      .terminal-nav
        .terminal-top
          .circle-nav
            .circle-red
            .empty
            .circle-yellow
            .empty
            .circle-green
            .empty
            .box-nav
          .rec-nav
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/DropDown';

Vue.use(VModal);
export default {
  data() {
    return {
    };
  },
  components: { Dropdown, VModal, Button, Input },
  methods: {
    show() {
      this.$modal.show('login-modal');
    },
    hide() {
      this.$modal.hide('login-modal');
    },
    gotoRegister() {
      location.href = '/Register';
    }
  }
};

</script>

<style scoped lang="sass">
@import "../style/grid"
@import "../style/variable"
@import "../style/global"

.container
  text-align: center
  display: flex
  height: calc(100vh - #{$header-height})
  .left-view
    padding-top: 100px
    flex: 4
    text-align: left
    .title
      font-size: 24px
      font-weight: bold
      padding-bottom: 40px
    .sub-title
      padding-top: 20px
      font-weight: normal
      font-size: 18px
    .btn-nav
      cursor: pointer
      height: 100px
      width: 200px
      padding-top: 60px
  .right-view
    height: calc(100vh - #{$header-height})
    padding-top: 40px
    flex: 6
    .terminal-nav
      height: 400px
      border-radius: 10px
      background-color: #fff
      .terminal-top
        height: 50px
        border-top-left-radius: 10px
        border-top-right-radius: 10px
        background-color: lighten($grey-color,30)
        .circle-nav
          display: flex
          padding-top: 12.5px
          padding-left: 12.5px
          .circle-red
            border-radius: 50px
            width: 25px
            height: 25px
            background-color: lighten(red,10)
          .circle-yellow
            border-radius: 50px
            width: 25px
            height: 25px
            background-color: darken(yellow,5)
          .circle-green
            border-radius: 50px
            width: 25px
            height: 25px
            background-color: lighten(green,10)
          .empty
            width: 10px
          .box-nav
            width: 550px
            border-radius: 5px
            height: 25px
            background-color: #fff
        .rec-nav
</style>
