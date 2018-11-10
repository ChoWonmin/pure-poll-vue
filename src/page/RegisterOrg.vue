<template lang="jade">
  .container
    .left-view.center-wrapper
      .title 어떤 것을 알아 보고 싶으세요?
    .register-view.center-wrapper-vertical
      .title 여론조사자 회원가입
      .flex-wrapper
        .sub-title 이미 회원이신가요?
        .login-nav(v-on:click="show") 로그인
        i.material-icons.blue play_arrow
      .liner
        .line_horizontal
        .line-title 계정 만들기
        .line_horizontal
      .input_container.flex-wrapper
        .box-nav
          .flexing
            .empty
            .input-nav
              Input(:placeholder="'이메일'", :icon="'mail'", ref="email")
            .empty
          .error-box(v-show="emailerror") 이메일을 입력해주세요.
          .flexing
            .empty
            .input-nav
              Input(:placeholder="'패스워드'", :icon="'lock'", :option="'password'", ref="password")
            .empty
          .error-box(v-show="passworderror") 10자리 이상 입력해주세요.
          .flexing
            .empty
            .input-nav
              Input(:placeholder="'다시 한 번 입력해주세요'", :icon="'lock'", :option="'password'", ref="repassword")
            .empty
          .error-box(v-show="repassworderror") 10자리 이상 입력해주세요.
          .error-box(v-show="!samepassword") 동일한 패스워드를 입력해주세요.
          .flexing
            .empty
            .drop-down-nav
              Dropdown(:name="'사업자 분류'", :icon="'add'",
              :optionIcons="[{text:'개인 사업자', icon:'location_on'},{text:'공공 기관', icon:'keyboard'}]", ref="org")
            .empty
          .error-box(v-show="orgerror") 필수 항목입니다.
          .flexing
            .empty
            .input-nav
              Input(:placeholder="'사업자 등록증 업로드'", :icon="'add_a_photo'", :option="'file'", ref="photo")
            .empty
          .error-box(v-show="photoerror") 필수 항목입니다.
          .flexing
            .empty
            .input-nav
              Input(:placeholder="'연락처를 입력해주세요'", :icon="'call'", ref="phone")
            .empty
          .error-box(v-show="phoneerror") 필수 항목입니다.
          .flexing
            .empty
            .btn-nav
              Button(:name="'회원가입'", v-on:click="clickRegister")
            .empty
        .line_vertical
        .box-nav
          .title 조사자 가입 안내
          .sub-title 여론조사자 가입은 여론조사 관계 법령에 의거해 아래와 같은 절차가 확인이 되면 회원가입이 진행됩니다.
          .sub-box 사업자 등록 확인
          i.material-icons arrow_downward
          .sub-box 여론조사 기관 등록 확인
          i.material-icons arrow_downward
          .sub-box 대표기관 전화 확인
          i.material-icons arrow_downward
          .sub-box 회원가입 완료
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/DropDown';
import { dataModule } from '../api/firebase.wrapper';

Vue.use(VModal);

export default {
  data() {
    return {
      question: '',
      answer: '',
      id: undefined,
      emailerror: false,
      passworderror: false,
      repassworderror: false,
      samepassword: true,
      orgerror: false,
      photoerror: false,
      phoneerror: false
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
    clickRegister() {
      if (this.$refs.email.value === '') { this.emailerror = true; } else { this.emailerror = false; }
      if (this.$refs.password.value.toString().length < 10) { this.passworderror = true; } else { this.passworderror = false; }
      if (this.$refs.repassword.value.toString().length < 10) { this.repassworderror = true; } else { this.repassworderror = false; }
      if (this.$refs.password.value === this.$refs.repassword.value) { this.samepassword = true; } else { this.samepassword = false; }
      if (this.$refs.org.name === '사업자 분류') { this.orgerror = true; } else { this.orgerror = false; }
      if (this.$refs.photo.value === '') { this.photoerror = true; } else { this.photoerror = false; }
      if (this.$refs.phone.value === '') { this.phoneerror = true; } else { this.phoneerror = false; }
      if (!(this.emailerror) && !(this.passworderror) && !(this.repassworderror) && this.samepassword &&
        !(this.orgerror) && !(this.photoerror) && !(this.phoneerror)) {
        console.log('회원가입 처리');
        dataModule.push('orgList', { orgId: this.$refs.email.value,
          orgPassword: this.$refs.password.value,
          orgPhone: this.$refs.phone.value,
          orgType: this.$refs.org.name });
        location.href = '/';
      } else { console.log('빠진게 있습니다'); }
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
    padding-top: 40px
    flex: 4
    background-color: $sub-color
    .title
      color: #fff
      font-size: 24px
      font-weight: bold
  .register-view
    height: calc(100vh - #{$header-height})
    padding-top: 40px
    flex: 6
    .title
      font-size: 24px
    .sub-title
      padding-left: 20px
      font-weight: bold
    .flex-wrapper
      margin-top: 20px
      font-size: 20px
      .login-nav
        margin-left: 6px
        color: $sub-color
        font-weight: bold
        @include hover-name-action($sub-color)
      i.blue
        color: $sub-color
    .liner
      display: flex
      .line_horizontal
        margin: 20px
        border: solid .5px #707070
        height: 0.1px
        width: 240px
      .line-title
        margin: 10px
        font-size: 18px
    .input_container
      .box-nav
        width: 300px
        flex: 3
        .flexing
          display: flex
          .empty
            flex: 0.25
          .input-nav
            padding-top: 12px
            flex: 2.5
          .drop-down-nav
            padding-top: 12px
            font-size: 12px
            flex: 2.5
        .title
          font-size : 20px
          font-weight: bold
        .sub-title
          font-size : 12px
          margin : 10px
          font-weight: normal
        .sub-box
          color : $sub-color
          margin : 5px
          font-size : 15px
          line-height: 32px
          border: solid 1px $sub-color
          @include shadow(0.08)
        .error-box
          font-size: 10px
          color : $error-color
          padding-top: 6px
      .btn-nav
        padding-top: 40px
        flex: 2.5
      .line_vertical
        height: calc(100vh - #{$header-height} - 64px - 44px - 41px - 20px)
        margin-left: 20px
        margin-right: 20px
        border: solid .5px #707070
</style>
