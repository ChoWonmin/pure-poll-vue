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
      .tool-btn(name='작성' v-on:click="regPoll")
        i.material-icons add
    .poll-container
      .poll-header
        .input-area
          input(placeholder='설문지 이름을 입력하세요' v-model="poll.name").bold
        .input-area
          textarea(placeholder='설문지 설명' v-model="poll.intro")
      .poll-body(v-for="(item, i) in poll.items")
        .item(v-on:click="clickItem(i)" v-bind:class="{active: activeIndex===i}")
          i.material-icons.remove-btn(v-on:click.stop="" v-on:click="removeItem(i)") clear
          .line.flex-wrapper
            .col-8.flex-wrapper
              .question-area
                input(placeholder='질문' v-model="item.question").bold
            .col-4
              i.material-icons(v-on:click.stop="" v-on:click="addChoice(item)") add
          .line.bottom(v-for="(choice,j) in item.choices")
            .col-8
              .radio-area
                .choice-area.flex-wrapper
                  .box
                  input(v-bind:placeholder="choice").bold
            .col-4
              i.material-icons(v-on:click.stop="" v-on:click="removeChoice(item,j)") clear
</template>

<script>
import { dataModule } from '../api/firebase.wrapper';

export default {
  data() {
    return {
      poll: {
        name: undefined,
        intro: undefined,
        items: [
          {
            question: undefined,
            isActive: true,
            choices: ['보기']
          }
        ]
      },
      activeIndex: 0
    };
  },
  methods: {
    addItem() {
      this.poll.items.push({
        isActive: true,
        choices: ['보기']
      });
      this.activeIndex = this.poll.items.length - 1;
    },
    regPoll() {
      dataModule.push('pollList', this.poll);
      this.$router.push('/');
    },
    clickItem(i) {
      this.activeIndex = i;
    },
    removeItem(i) {
      if (this.poll.items.length > 1) {
        this.poll.items.splice(i, 1);
        this.activeIndex = -1;
      }
    },
    addChoice(item) {
      item.choices.push('보기');
    },
    removeChoice(item, j) {
      if (item.choices.length > 1) {
        item.choices.splice(j, 1);
      }
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
      position: fixed
      width: 40px
      background-color: #fff
      border-radius: 3px
      z-index: 1
      left: calc(50vw + 422px)
      top: calc(#{$header-height} + #{$top-indent})
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
        .item
          border-bottom: solid 1px #ccc
          position: relative
          .remove-btn
            position: absolute
            top: 12px
            right: 24px
          &.active
            border-left: solid 3px $main-color
          .line
            padding: 12px 12px
            display: flex
            &.bottom
              padding-bottom: 12px

          .choice-area, .question-area
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
