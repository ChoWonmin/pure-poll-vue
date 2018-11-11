<template lang="jade">
  .container
    .reg-poll
      .header 기본 여론조사 정보 입력
      .body
        .input-container.flex-wrapper
          .col.left.cell-6
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="pollName")
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'조사 기관'", ref="orgName")
            .line
              date-picker(v-model="date" date="datetime" lang="en" range=true width="100%" ref="date")
          .col.right.cell-6
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'의뢰자 성명'", ref="researcher")
            .line
              .input-wrapper
                DropDown(:name="'희망 조사 분야'",
                :optionIcons="[{text:'경제', icon:'keyboard'},{text:'사회', icon:'phone'},{text:'문화', icon:'phone'},{text:'외교', icon:'phone'},{text:'안보', icon:'phone'},{text:'종합', icon:'phone'}]" ref="category")
        .notice-wrapper
          .notice 2018년 12월 7일부터 2018년 12월 12일까지 17시부터 진행되는 여론조사입니다.
      .footer
        .error-message {{error}}
        .next-btn-wrapper
          .next-btn(v-on:click="submit") 다음 단계
        //.mark-wrapper
        //  .mark-box
        //    .mark.active
        //    .mark
        //    .mark
</template>

<script>
import DatePicker from 'vue2-datepicker';
import { store } from '../vuex/store';
import DropDown from '../components/DropDown';
import Input from '../components/Input';

export default {
  components: {
    Input,
    DropDown,
    DatePicker
  },
  data() {
    return {
      date: undefined,
      error: ''
    };
  },
  methods: {
    submit() {
      const data = {};
      let isError = false;

      Object.keys(this.$refs).forEach((key) => {
        const value = this.$refs[key].value;
        if (!value) {
          isError = true;
        } else {
          data[key] = value;
        }
      });

      if (isError) {
        this.error = '누락된 값이 있습니다.';
        return null;
      } else {
        this.$store.state.regPollData = data;
        this.$router.push('/makePoll');
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/variable"
  @import "../style/global"
  @import "../style/grid"

  .container
    padding: 32px
    display: flex
    justify-content: center
    .reg-poll
      width: 840px
      @include card-box-shadow
      .header
        height: 72px
        color: $black-color
        line-height: 72px
        font-size: 24px
        font-weight: bold
        text-indent: 24px
        @include bottom-shadow(.3)
      .body
        padding: 24px
        .input-container
          .left
            padding: 12px 12px 0 48px
          .right
            padding: 12px 48px 0 12px
          .left, .right
            .line
              height: 60px
        .date-wrapper
          padding-left: 48px
        .notice-wrapper
          display: flex
          justify-content: center
          .notice
      .footer
        .error-message
          color: $error-color
          text-align: center
        .next-btn-wrapper
          height: 72px
          display: flex
          justify-content: center
          align-items: center
          .next-btn
            width: 96px
            height: 36px
            text-align: center
            line-height: 36px
            border: solid 1px $grey-color
            &:hover
              background-color: $sub-color
              border: $sub-color
              color: $white-color
              @include card-box-shadow
        .mark-wrapper
          height: 64px
          display: flex
          justify-content: center
          align-items: center
          .mark-box
            display: flex
            .mark
              width: 24px
              height: 24px
              background-color: lighten($main-color, 50)
              margin: 0 8px
              border-radius: 100%
              &.active
                background-color: $main-color
</style>
