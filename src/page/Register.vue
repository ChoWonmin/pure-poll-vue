<template lang="jade">
  .container
    .left-view.center-wrapper
      .title 어떤 것을 알아 보고 싶으세요?
    .register-view.right-view.center-wrapper-vertical
      .main-title 회원가입
      .flex-wrapper
        .sub-title 이미 회원이신가요?
        .login-nav(v-on:click="show") 로그인
        i.material-icons.blue play_arrow
      .register-selecter.flex-wrapper
        .box-nav.center-wrapper-vertical
          i.material-icons person
          .title 개인 회원
          .sub-title 만 14세 이상 가능
          .btn-nav
            .empty
            Button.btn(:name="'회원가입'", :option="'big'")
            .empty
        .line
        .box-nav.center-wrapper-vertical
          i.material-icons account_balance
          .title 기관 회원
          .sub-title 사업자 등록증을 보유한 기관회원
          .btn-nav
            .empty
            Button.btn(:name="'회원가입'", :option="'big'")
            .empty

    .person-form.right-view.center-wrapper-vertical
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';
import Button from '../components/Button';
import Input from '../components/Input';

Vue.use(VModal);

export default {
  data() {
    return {
    };
  },
  components: { VModal, Button, Input },
  methods: {
    show() {
      this.$modal.show('login-modal');
    },
    hide() {
      this.$modal.hide('login-modal');
    }
  }
};
</script>

<style scoped lang="sass">
@import "../style/variable"
@import "../style/global"
@import "../style/grid"

$top-indent: 48px

@mixin line-input($width, $height)
  width: $width
  height: $height
  outline: none
  padding-left: 12px
  border: transparent

.container
  display: flex
  text-align: center
  align-items: center
  background-color: $sub-color
  height: calc(100vh - #{$header-height})
  .left-view
    flex: 4
    .title
      color: #fff
      font-size: 24px
      font-weight: bold
  .right-view
    background-color: #fff
    border-top-left-radius: 10px
    border-bottom-left-radius: 10px
    flex: 6
    box-shadow: inset 0px 2px 6px -1px $black-color
    .main-title
      padding-top: 20px
      font-size: 24px
    .sub-title
      font-weight: bold
    .flex-wrapper
      justify-content: center
      margin-top: 20px
      font-size: 20px
      .login-nav
        margin-left: 6px
        color: $sub-color
        font-weight: bold
        @include hover-name-action($sub-color)
      i.blue
        color: $sub-color
    .register-selecter
      height: 330px
      .box-nav
        justify-items: center
        flex: 3
        i
          font-size: 100px
        .title
          margin-top: 36px
          font-weight: bold
        .sub-title
          margin-top: 20px
          font-size: 12px
        .btn-nav
          display: flex
          margin-top: 20px
          .empty
            flex: .5
          .btn
            box-shadow: 0 2px 6px -1px $black-color
            width: 200px
      .line
        border: solid .5px #707070


.login-form, .person-form
  display: none

</style>
