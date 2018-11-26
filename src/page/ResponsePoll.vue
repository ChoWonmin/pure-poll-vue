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
              input(type='radio' v-bind:value='choice.value' v-model='resPoll[i]').radio-input
              .num {{j+1}}.
              .choice {{choice.value}}
      .footer.question-wrapper
        .submit-btn-wrapper
          Button(:name="'제출하기'", :option="'large'" v-on:click="submit")
    .empty
</template>

<script>
import { dataModule } from '../api/firebase.wrapper';
import blockchain from '../api/blockchain';
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
      poll: undefined,
      resPoll: [],
      test: ''
    };
  },
  async mounted() {
    this.poll = (await dataModule.get('pollList/-LS4HX3UDSdh3jKbdPfU')).val();
    this.isLoad = true;
    this.resPoll = new Array(this.poll.items.length);
  },
  methods: {
    submit() {
      for (let i=0; i<this.resPoll.length; i++) {
        if (this.resPoll[i] === undefined)
          return ;
      }
      blockchain.write(JSON.stringify(this.resPoll), '0x9a41aA815537d679B0E6c0c78146457d10d98960');
    }
  }
};
</script>

<style lang="sass" scoped>
  @import "../style/variable"
  @import "../style/global"
  @import "../style/grid"

  .container
    color: $grey-color
    .poll
      margin-top: 24px
      width: 100%
      background-color: #fff
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
