<template lang="jade">
  .item(v-on:click="onClick" v-bind:class="{active: isActive}")
    .line.flex-wrapper
      .col-8.flex-wrapper
        .question-area
          input(placeholder='질문').bold
      .col-4
    .line.bottom
      .col-8
        .radio-area
          .question-area.flex-wrapper
            .box
            input(placeholder='보기').bold
          .question-area.flex-wrapper
            .box
            input(placeholder='보기').bold
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
  },
  methods: {
    onClick() {
      this.$emit('clickItem');
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/grid"
  @import "../style/global"
  @import "../style/variable"

  @mixin line-input($width, $height)
    width: $width
    height: $height
    outline: none
    padding-left: 12px
    border: transparent

  .item
    border-bottom: solid 1px #ccc
    &.active
      border-left: solid 3px $main-color
    .line
      padding: 12px 12px
      &.bottom
        padding-bottom: 12px

    .question-area
      display: flex
      padding: 12px
      border-bottom: solid 2px #aaaaaa
      width: 480px
      input[type='radio']
        width: 30px
      input
        @include line-input(100%, 32px)
        font-size: 24px
      textarea
        @include line-input(100%, 60px)
      .box
        width: 18px
        height: 18px
        border-radius: 100%
        border: 1px solid #ccc

</style>
