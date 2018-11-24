<template lang="jade">
  .container
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
