<template lang="jade">
  .container
    .reg-poll
      .header 기본 여론조사 정보 입력
      .body
        .input-container.flex-wrapper
          .col.left.cell-6
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
          .col.right.cell-6
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
            .line
              .input-wrapper
                Input(:icon="'mail'", :placeholder="'여론조사 명칭'", ref="id")
        .notice-wrapper
          .notice 2018년 12월 7일부터 2018년 12월 12일까지 17시부터 진행되는 여론조사입니다.
      .footer
        .next-btn-wrapper
          .next-btn 다음 단계
        .mark-wrapper
          .mark-box
            .mark.active
            .mark
            .mark
</template>

<script>
import Input from '../components/Input';

export default {
  components: {
    Input
  },
  data() {
    return '';
  },
  methods: {}
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
            padding: 12px 12px 12px 48px
          .right
            padding: 12px 48px 12px 12px
          .left, .right
            .line
              height: 72px
        .notice-wrapper
          .notice
      .footer
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
