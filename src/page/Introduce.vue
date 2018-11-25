<template lang="jade">
  .container
    .first-container
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
    .second-container
      .title 언제 어디서나 여론조사 해보세요!
      .sub-title 퓨어폴은 어디서나 사용가능합니다.
      .sub-title 투명한 여론조사를 이끌어가겠습니다.
      .box-nav
        .box
          i.material-icons.icon-nav assessment
          .box-title 데이터 시각화
          .box-content 여론조사 결과를 시각화하여
          .box-content 직관적인 화면을 제공합니다.
        .box
          i.material-icons.icon-nav share
          .box-title 분산 저장
          .box-content 분산 저장 기술을 통하여
          .box-content 사용자의 답변을 저장합니다.
        .box
          i.material-icons.icon-nav tv
          .box-title 온라인 여론조사
          .box-content 온라인을 통하여 손쉽게
          .box-content 여론조사 서비스를 제공합니다.
    .third-container
      .top-view.center-wrapper
        .title About Team PurePoll
        .sub-title since 2018
        .sub-title 소개글
        .btn-nav
      .bottom-view
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
              .person-nav
                .person-circle-1
                .person-name Wonmin Cho
                .person-title · Project  Manager
                .person-contact
                  .email-nav(v-on:click="emailalert('0108257@ajou.ac.kr')")
                    Icon(:option="'email'")
                  .insta-nav(v-on:click="instagram('wonmeancho')")
                    Icon(:option="'instagram'")
                  .facebook-nav(v-on:click="facebook('wonmean.jo')")
                    Icon(:option="'facebook'")
              .person-nav
                .person-circle-2
                .person-name Taeho Lee
                .person-title · UI/UX  Designer
                .person-contact
                  .email-nav(v-on:click="emailalert('roy040302@ajou.ac.kr')")
                    Icon(:option="'email'")
                  .insta-nav(v-on:click="instagram('roy040302')")
                    Icon(:option="'instagram'")
                  .facebook-nav(v-on:click="facebook('leetaehoroy')")
                    Icon(:option="'facebook'")
              .person-nav
                .person-circle-3
                .person-name Gibaek An
                .person-title · Front-end  Engineer
                .person-contact
                  .email-nav(v-on:click="emailalert('akb0516@ajou.ac.kr')")
                    Icon(:option="'email'")
                  .insta-nav(v-on:click="instagram('gi__100')")
                    Icon(:option="'instagram'")
                  .facebook-nav(v-on:click="facebook('profile.php?id=100004034366362')")
                    Icon(:option="'facebook'")
              .person-nav
                .person-circle-4
                .person-name Daeul Park
                .person-title · Back-end  Engineer
                .person-contact
                  .email-nav(v-on:click="emailalert('pde00@ajou.ac.kr')")
                    Icon(:option="'email'")
                  .insta-nav(v-on:click="instagram('')")
                    Icon(:option="'instagram'")
                  .facebook-nav(v-on:click="facebook('profile.php?id=100002377352622')")
                    Icon(:option="'facebook'")
</template>

<script>
import VModal from 'vue-js-modal';
import Vue from 'vue';
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/DropDown';
import Icon from '../components/Icon';

Vue.use(VModal);
export default {
  data() {
    return {
    };
  },
  components: { Icon, Dropdown, VModal, Button, Input },
  methods: {
    show() {
      this.$modal.show('login-modal');
    },
    hide() {
      this.$modal.hide('login-modal');
    },
    gotoRegister() {
      location.href = '/Register';
    },
    facebook(id) {
      location.href = `http://www.facebook.com/${id}`;
    },
    instagram(id) {
      location.href = `http://www.instagram.com/${id}`;
    },
    emailalert(id) {
      alert(id);
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
  background-image: linear-gradient(90deg, #efefef 0%, #c3cfe2 100%)
  height: calc(100vh - #{$header-height})
  .first-container
    display: flex
    .left-view
      padding-left: 20px
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
      padding-right: 20px
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
              border: solid 0.5px darken(red,10)
              border-radius: 50px
              width: 25px
              height: 25px
              background-color: lighten(red,10)
            .circle-yellow
              border: solid 0.5px darken(yellow,15)
              border-radius: 50px
              width: 25px
              height: 25px
              background-color: darken(yellow,5)
            .circle-green
              border: solid 0.5px green
              border-radius: 50px
              width: 25px
              height: 25px
              background-color: lighten(green,10)
            .empty
              width: 10px
            .box-nav
              width: 500px
              border-radius: 5px
              height: 25px
              background-color: #fff
          .rec-nav
  .second-container
    background-image: linear-gradient(0deg, #89f7fe -50%, #4476ff 120%)
    height: calc(100vh - #{$header-height})
    padding-left: 150px
    padding-top: 100px
    text-align: left
    color: #fff
    .title
      font-weight: bold
      font-size: 30px
      padding-bottom: 30px
    .sub-title
      padding-bottom:  18px
      font-weight: normal
      font-size: 18px
    .box-nav
      display: flex
      .box
        color: black
        margin-right: 30px
        text-align: center
        border-radius: 20px
        background-color: #fff
        width: 250px
        height: 300px
        .icon-nav
          padding-top: 10px
          font-size: 100px
          color: $sub-color
        .box-title
          padding-top: 12px
          padding-bottom: 12px
          font-weight: bold
          color: $main-color
          font-size: 24px
        .box-content
          padding-top: 6px
          color: $grey-color
          font-size: 16px
  .third-container
    background-image: linear-gradient(90deg, #efefef 0%, #c3cfe2 100%)
    text-align: center
    height: calc(100vh - #{$header-height})
    .top-view
      padding-top: 60px
      flex: 4
      .title
        font-size: 24px
        font-weight: bold
      .sub-title
        padding-top: 20px
        font-weight: normal
        font-size: 18px
    .bottom-view
      height: calc(100vh - #{$header-height})
      padding-top: 40px
      flex: 6
      .terminal-nav
        height: 600px
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
              background-color: $main-color
            .circle-yellow
              border-radius: 50px
              width: 25px
              height: 25px
              background-color: $sub-color
            .circle-green
              border-radius: 50px
              width: 25px
              height: 25px
              background-color: $grey-color
            .empty
              width: 10px
            .box-nav
              width: 550px
              border-radius: 5px
              height: 25px
              background-color: #fff
          .rec-nav
            padding-top: 50px
            display: flex
            .person-nav
              border-radius: 10px
              margin : 25px
              width: 300px
              height: 400px
              justify-items: center
              background-color: lighten($grey-color,50)
              padding-top: 50px
              padding-left: 25px
              box-shadow: 0 2px 8px -1px $grey-color
              .person-circle-1
                background-image: url(/static/pic1.png)
                border-radius: 180px
                width: 180px
                height: 180px
              .person-circle-2
                background-image: url(/static/pic2.png)
                border-radius: 180px
                width: 180px
                height: 180px
              .person-circle-3
                background-image: url(/static/pic3.png)
                border-radius: 180px
                width: 180px
                height: 180px
              .person-circle-4
                background-image: url(/static/pic4.png)
                border-radius: 180px
                width: 180px
                height: 180px
              .person-name
                text-align: left
                padding-top: 20px
                font-weight: bold
                font-size: 18px
              .person-title
                color: $grey-color
                text-align: right
                padding-right: 20px
                padding-top: 20px
                font-weight: normal
                font-size: 12px
              .person-contact
                padding-top: 40px
                padding-left: 30px
                display: flex
                justify-items: center
                font-size: 24px
                .email-nav
                  width : 50px
                .insta-nav
                  width : 50px
                .facebook-nav
                  width : 50px

</style>
