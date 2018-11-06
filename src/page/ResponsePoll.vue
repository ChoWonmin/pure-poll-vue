<template lang="jade">
  .container
    .load(v-show="!isLoad")
      Spinner()
    .poll(v-show="isLoad")
      .header
        .name-wrapper
          .name {{poll.name}}
        .intro-wrapper
          .intro {{poll.intro}}
      .body
        .item(v-for="item,i in poll.items")
          .question-wrapper.flex-wrapper
            .question {{i+1}}.{{item.question}}
          .choices(v-for="choice,j in item.choices")
            .line.flex-wrapper
              input(type='radio').radio-input
              .num {{j+1}}.
              .choice {{choice}}
      .footer.question-wrapper
        .submit-btn-wrapper
          Button(:name="'제출하기'", :option="'large'")
    .empty
</template>

<script>
import { dataModule } from '../api/firebase.wrapper';
import Spinner from '../components/Spinner';
import Button from '../components/Button';

export default {
  components: {
    Spinner,
    Button
  },
  data() {
    return {
      isLoad: false,
      poll: undefined
    };
  },
  async mounted() {
    this.poll = (await dataModule.get('pollList/-LQCY50X8i7-mCl9jS-B')).val();
    this.isLoad = true;
  },
  methods: {
  }
};
</script>

<style lang="sass" scoped>
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

  .container
    position: relative
    color: $grey-color
    .poll
      top: $top-indent
      width: 100%
      @include card-box-shadow
      .header
        padding: 12px 24px
        height: 167px
        .name-wrapper
          height: 80px
        .name
          font-weight: bold
          font-size: 32px
          color: $grey-color
          line-height: 56px
          text-indent: 12px
          @include bottom-shadow(.2)
        .intro-wrapper
          height: 87px
          .intro
            text-indent: 12px
      .body
        .item
          .question-wrapper
            height: 54px
            padding: 6px 32px
            font-size: 24px
            line-height: 44px
            .question
              height: 44px
              @include bottom-shadow(.5)
          .choices
            padding: 6px 24px
            .line
              padding: 12px
      .footer
        display: flex
        justify-content: center
        .submit-btn-wrapper
          height: 50px
          width: 100px
    .empty
      width: 100%
      height: 72px
</style>
