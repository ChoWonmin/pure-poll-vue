<template lang="jade">
  .container
    .left-view.center-wrapper
      .title 어떤 것을 알아 보고 싶으세요?
    .register-view.center-wrapper-vertical
      .title 무료 계정 만들기
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
              Dropdown(:name="'지역구를 선택해주세요'", :icon="'add'",
              :optionIcons="[{text:'서울특별시', icon:'location_on'},{text:'경기도', icon:'location_on'}]", ref="location")
            .empty
          .error-box(v-show="locationerror") 필수 항목입니다.
          .flexing
            .empty
            .drop-down-nav
              Dropdown(:name="'성별을 선택해주세요'", :icon="'wc'",
              :optionIcons="[{text:'남자', icon:'person'},{text:'여자', icon:'person_outline'}]", ref="gender")
            .empty
          .error-box(v-show="gendererror") 필수 항목입니다.
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
          .flex-wrapper
            .title 조사자이신가요?
            .sub-title(v-on:click="gotoOrg") 회원가입
            i.material-icons.blue play_arrow
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
      locationerror: false,
      gendererror: false,
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
    gotoOrg() {
      location.href = '/RegisterOrg';
    },
    clickRegister() {
      if (this.$refs.email.value === '') { this.emailerror = true; } else { this.emailerror = false; }
      if (this.$refs.password.value.toString().length < 10) { this.passworderror = true; } else { this.passworderror = false; }
      if (this.$refs.repassword.value.toString().length < 10) { this.repassworderror = true; } else { this.repassworderror = false; }
      if (this.$refs.password.value === this.$refs.repassword.value) { this.samepassword = true; } else { this.samepassword = false; }
      if (this.$refs.location.name === '지역구를 선택해주세요') { this.locationerror = true; } else { this.locationerror = false; }
      if (this.$refs.gender.name === '성별을 선택해주세요') { this.gendererror = true; } else { this.gendererror = false; }
      if (this.$refs.phone.value === '') { this.phoneerror = true; } else { this.phoneerror = false; }
      if (!(this.emailerror) && !(this.passworderror) && !(this.repassworderror) && this.samepassword &&
        !(this.gendererror) && !(this.locationerror) && !(this.phoneerror)) {
        console.log('회원가입 처리');
        dataModule.push('responderList', { resId: this.$refs.email.value,
          resPassword: this.$refs.password.value,
          resPhone: this.$refs.phone.value,
          resLocation: this.$refs.location.name,
          resGender: this.$refs.gender.name });
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
          padding-left: 24px
          font-size : 20px
          font-weight: bold
        .sub-title
          margin-left: 6px
          color: $sub-color
          font-weight: bold
          @include hover-name-action($sub-color)
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
