<template lang="jade">
  .container
    .tool-bar
      .tool-btn(name='질문추가' v-on:click="addItem")
        i.material-icons playlist_add
      .tool-btn(name='사진추가')
        i.material-icons add_a_photo
      .tool-btn(name='제목추가')
        i.material-icons add_comment
      .tool-btn(name='미리보기')
        i.material-icons search
    .poll-container
      .poll-header
        .input-area
          input(placeholder='설문지 이름을 입력하세요').bold
        .input-area
          textarea(placeholder='설문지 설명')
      .poll-body(v-for="item in items")
        PollItem(:option="item", v-on:clickItem="clickItem")
</template>

<script>
import PollItem from '../components/PollItem';

export default {
  components: {
    PollItem
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.getPollItems;
    }
  },
  methods: {
    addItem() {
      this.items.push('radio');
    },
    clickItem() {
      console.log('hello world');
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/variable"
  @import "../style/global"
  @import "../style/grid"

  $top-indent: 48px

  @mixin line-input($width, $height)
    width: $width
    height: $height
    outline: none
    padding-left: 12px
    border: transparent

  .input-area
    padding: 12px
    @include shadow(.12)
    input
      @include line-input(calc(100% - 12px), 48px)
      @include bold
      font-size: 32px
    textarea
      @include line-input(calc(100% - 12px), 60px)

  .container
    position: relative

    .tool-bar
      position: absolute
      width: 40px
      background-color: #fff
      border-radius: 3px
      z-index: 1
      right: 8px
      top: $top-indent
      @include card-box-shadow()
      .tool-btn
        @include align-center()
        @include hover-name-action($sub-color)
        height: 40px
        color: $black-color
        @include tooltip(attr(name),72px)

    .poll-container
      position: absolute
      width: 980px
      top: $top-indent
      @include card-box-shadow()
      .poll-body
        //padding: 12px 0
  </style>
