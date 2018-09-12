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
        b.login-nav 로그인
        b.logout-nav 로그아웃
        b.register-nav 회원가입
</template>

<script>
export default {
  data() {
    return '';
  },
  methods: {}
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
</style>
