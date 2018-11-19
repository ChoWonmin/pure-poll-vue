<template lang="jade">
  .container
    .tool-bar
      .tool-btn(name='질문추가' v-on:click="addItem")
        i.material-icons playlist_add
      .tool-btn(name='사진추가')
        input(type='file' v-on:change="detectFiles($event.target.files)")
        i.material-icons add_a_photo
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
      .poll-body(v-for="(item, i) in computedPoll.items" v-bind:class="{active: activeIndex===i}")
        .item(v-on:click="clickItem(i)" v-bind:class="{active: activeIndex===i}")
          .line.flex-wrapper
            .cell-8.flex-wrapper
              .question-area
                input(placeholder='질문' v-model="item.question").bold
          .line.bottom(v-for="(choice,j) in item.choices")
            .cell-8
              .radio-area
                .choice-area.flex-wrapper
                  .box
                  input(v-bind:placeholder="'보기'" v-model="choice.value").bold
            .cell-4
              i.material-icons.remove-choice-btn(v-on:click.stop="" v-on:click="removeChoice(i,j)") clear
          .line.bottom
            .cell-8
              .radio-area
                .choice-area.flex-wrapper
                  .box
                  .addChoice(v-on:click.stop="" v-on:click="addChoice(i)") 보기 추가
          .footer.flex-wrapper
            .empty
            .util-wrapper
              i.material-icons.remove-btn(v-on:click.stop="" v-on:click="removeItem(i)") delete
              .filter-check
                .text 응답필터
                input(type='checkbox' v-model="item.filter")
                // CheckBox(check="check")
      .poll-body(v-for="(item, i) in poll.items")
</template>

<script>
import uuidv4 from 'uuid/v4';
import { store } from '../vuex/store';
import CheckBox from '../components/CheckBox';
import { dataModule, storageModule } from '../api/firebase.wrapper';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      member: undefined,
      mainImage: undefined,
      poll: {
        name: undefined,
        intro: undefined,
        mainImage: uuidv4(),
        items: [
          {
            question: undefined,
            isActive: true,
            choices: [{ value: '' }],
            filter: false
          }
        ],
        meta: this.$store.state.regPollData
      },
      activeIndex: 0
    };
  },
  methods: {
    addItem() {
      this.poll.items.push({
        isActive: true,
        choices: [{ value: '' }]
      });
      this.activeIndex = this.poll.items.length - 1;
    },
    detectFiles(files) {
      Array.from(Array(files.length).keys()).forEach((e) => {
        this.mainImage = files[e];
      });
    },
    async regPoll() {
      if (!this.mainImage) {
        console.log('메인 이미지를 등록해주세요');
      } else {
        const id = dataModule.getUniqueKey('pollList');
        await storageModule.upload(`pollList/${this.poll.mainImage}`, this.mainImage);
        this.poll['id'] = id;
        dataModule.update(`pollList/${id}`, this.poll);
        this.$router.push('/');
      }
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
    addChoice(i) {
      const item = this.poll.items[i];
      item.choices.push({ value: '' });
    },
    removeChoice(i, j) {
      if (this.poll.items[i].choices.length > 1) {
        this.poll.items[i].choices.splice(j, 1);
      }
    }
  },
  computed: {
    computedPoll() {
      return this.poll;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/variable"
  @import "../style/global"
  @import "../style/grid"
  @import "../style/checkBox"

  $top-indent: 48px

  @mixin line-input($width, $height)
    width: $width
    height: $height
    outline: none
    padding-left: 12px
    border: transparent

  .input-area
    padding: 12px
    input
      @include line-input(calc(100% - 12px), 56px)
      @include bold
      font-size: 32px
      @include bottom-shadow(.12)
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
        color: $grey-color
        @include tooltip(attr(name),72px)
        position: relative
        input[type='file']
          position: absolute
          top: 0
          left: 0
          width: 40px
          height: 40px
          font-size: 40px
          opacity: 0

    .poll-container
      background-color: #fff
      z-index: 10
      position: absolute
      width: 980px
      // height: calc(100vh - #{$top-indent} - 180px)
      top: $top-indent
      @include card-box-shadow()
      .poll-body
        .item
          @include bottom-shadow(.5)
          position: relative
          &.active
            border-left: solid 3px $main-color
            @include card-box-shadow
          .line
            padding: 5px 12px
            display: flex
            &.bottom
              padding-bottom: 12px
            .remove-choice-btn
              color: $grey-color

          .choice-area, .question-area
            display: flex
            padding: 6px 12px
            width: 480px
            input
              @include line-input(100%, 32px)
              font-size: 24px
            .box
              margin-top: 6px
              width: 20px
              height: 20px
              border-radius: 100%
              border: 2px solid $grey-color
            .addChoice
              font-size: 24px
              color: $grey-color
              text-indent: 12px
              &:hover
                color: $sub-color
          .question-area
            @include bottom-shadow(.5)
          .footer
            @include top-shadow(.5)
            height: 80px
            .util-wrapper
              display: flex
              align-items: center
              .remove-btn
                color: $grey-color
                padding-right: 12px
                &:hover
                  color: $black-color
              .filter-check
                width: 120px
                padding: 0 12px 0 12px
                border-left: solid 0.5px $grey-color
                display: flex
                .text
                  width: 60px
                .check-box
                  width: 20px
                  height: 20px
                  background-color: red

  </style>
