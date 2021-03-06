<template lang="jade">
  .header
    .content.flex-wrapper
      router-link(tag="div" to="/").logo.eng(v) PurePoll
      .nav-bar.flex-wrapper
        router-link(tag="b" to="/introduce").nav-btn 회사소개
        router-link(tag="b" to="/responsePoll").nav-btn 여론조사
        router-link(tag="b" to="/regPoll" v-show="$store.getters.currentUser").nav-btn 여론작성
      .empty
      .btn-wrapper.flex-wrapper
        b.login-nav(v-on:click="show", v-show="!$store.getters.currentUser") 로그인
        b.id-nav(v-show="$store.getters.currentUser") {{email}}님
        b.logout-nav(v-show="$store.getters.currentUser", v-on:click="clickLogout()") 로그아웃
        router-link(tag="b" to="/register" v-show="!$store.getters.currentUser").register-nav 회원가입
        router-link(tag="b" to="/register" v-show="$store.getters.currentUser").register-nav My Page
    modal(name="login-modal")
      .info-container.center-wrapper
        .info
          .title.eng PurePoll
          .sub-title 안전한 여론조사.
          .underline
          .description 신개념 블록체인 여론조사 서비스
          .sub-info
            .line 언제어디서나.
            .line 당신의 의견을
            .line 정확하게
        .login-form.center-wrapper
          .center
            .title 아이디와 비밀번호를 입력해주세요
            .btn-wrapper
              Input#a(:icon="'mail'", :placeholder="'E-MAIL'", ref="id")
            .btn-wrapper
              Input#b(:icon="'vpn_key'", :placeholder="'PASSWORD'", :option="'password'", ref="password")
            .result 로그인 하세요
            .loginbtn
              Button(:name="'로그인하기'", :option="'transparent'", v-on:click="clickLogin()")
            .registerbtn 아직 계정이 없으신가요?
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';
import { store } from '../vuex/store';
import Button from '../components/Button';
import Input from '../components/Input';
import { authModule } from '../api/firebase.wrapper';

Vue.use(VModal);

export default {
  data() {
    return {
      email: undefined
    };
  },
  mounted() {
    this.$store.state.user = authModule.currentUser;
  },
  components: { VModal, Button, Input },
  computed: {
    getUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    show() {
      this.$modal.show('login-modal');
    },
    hide() {
      this.$modal.hide('login-modal');
    },
    clickLogin() {
      const id = this.$refs.id.value;
      const password = this.$refs.password.value;

      authModule.signInWithEmailAndPassword(id, password).then(() => {
        this.$store.state.user = authModule.currentUser;
        this.email = this.$store.getters.currentUser.email;
        this.hide();
      }).catch((err) => {
        console.log(err);
      });
    },
    clickLogout() {
      this.$store.state.user = undefined;
      console.log(this.$store.getters.currentUser);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/grid"
  @import "../style/variable"
  @import "../style/global"
  .header
    width: 100vw
    height: $header-height
    padding: 33px 0 33px 39px
    position: fixed
    top: 0
    left: 0
    overflow: hidden
    background-color: #ffffff
    z-index: 1
    @include card-box-shadow
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
        .id-nav
          width: 190px
          color: $main-color
          font-size: 16px
          height: 43px
          line-height: 43px
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
    display: flex
    height: 100%
    background-color: $sub-color
    text-align: center
    line-height: 36px
    .info
      width : 50%
      color: #ffffff
      .title
        font-size: 40px
        font-weight: 900
        margin-right: 24%
        margin-top: 10%
      .sub-title
        font-size: 24px
        margin-right: 16%
        font-weight: bold
        margin-top: 10px
      .underline
        border-bottom: solid 1px #ffffff
        width: 60%
        margin: 6px 0px 0px 14%
      .description
        margin: 8px 14% 0px 0px
      .sub-info
        .line
          margin-left: 25%
          text-align: left
    .login-form
      width: 50%
      text-align: left
      background-color: #ffffff
      padding: 20px
      .center
        width: calc(100% - 40px)
        height: calc(100% - 40px)
        .title
          color: $grey-color
        .result
          color: $error-color
        .btn-wrapper
          width: 100%
        .loginbtn
          width: 100%
        .registerbtn
          height: 32px
          border-bottom: solid 1px
          color: $grey-color
          &:hover
            color: darken($grey-color,10)
</style>
