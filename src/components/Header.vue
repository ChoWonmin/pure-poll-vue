<template lang="jade">
  .header
    .content.flex-wrapper
      .logo.eng PurePoll
      .nav-bar.flex-wrapper
        b.nav-btn 회사소개
        b.nav-btn 여론조사
        b.nav-btn 여론조사
      .col-12
      .btn-wrapper.flex-wrapper
        b.login-nav(v-on:click="show") 로그인
        b.logout-nav 로그아웃
        b.register-nav 회원가입
    modal(name="login-modal")
      .info-container.center-wrapper
        .info
          .title.eng PurePoll
          .sub-title 안전한 여론조사
          .description 신 개념 블록체인 여론조사 서비스
          .sub-info
            .line 언제어디서나.
            .line 당신의 의견을
            .line 정확하게
      .login-form.center-wrapper
        .center
          .title 아이디와 비밀번호를 입력해주세요
          .line
            .inputWithIcon
              input#id-input(placeholder='ID', type='text')
              i.material-icons mail
            .inputWithIcon
              input#password-input(placeholder='password', type='password')
              i.material-icons vpn_key
          .line
            .result 로그인 하세요
          .line
            .btn#login-btn 로그인
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';

Vue.use(VModal);

export default {
  data() {
    return {};
  },
  components: { VModal },
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
  @import "../style/grid"
  @import "../style/variable"
  @import "../style/global"
  .header
    width: 100%
    height: $header-height
    padding: 33px 0 33px 39px
    position: fixed
    top: 0
    overflow: hidden
    background-color: #ffffff
    z-index: 1
    .content
      .logo
        width: 180px
        font-size: 40px
        color: $main-color
        font-weight: bold
      .nav-bar
        .nav-btn
          margin-right: 40px
          color: $sub-color
          line-height: 60px
          font-size: 16px
      .btn-wrapper
        .login-nav, .logout-nav
          width: 90px
          color: $main-color
          font-size: 16px
          height: 43px
          line-height: 43px
        .register-nav
          width: 168px
          height: 43px
          text-indent: 18px
          line-height: 43px
          color: #ffffff
          background-color: $main-color
          border-top-left-radius: 10px
          border-bottom-left-radius: 10px
          @include shadow(0.24)
  .info-container
    width: 50%
    background-color: $sub-color
    .info
      color: #ffffff
      .title
        font-size: 40px
        font-weight: bold
      .sub-title
        font-size: 24px
        font-weight: bold
        border-bottom: solid 1px #ffffff
        width: 170px
        margin-top: 10px
        padding-bottom: 4px
      .description
        margin-top: 8px
      .sub-info
        margin-top: 12px
        .line

    .login-form
      width: 50%
      .center
        .title
          margin-bottom: 8px
        .line
          margin-bottom: 4px
</style>
