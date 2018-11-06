<template lang="jade">
  .container
    .poll
      .header
        .input-area
          input(placeholder='설문지 이름을 입력하세요' v-model="poll.name").bold
        .input-area
          textarea(placeholder='설문지 설명' v-model="poll.intro")
      .body
</template>

<script>
import { dataModule } from '../api/firebase.wrapper';

export default {
  data() {
    return {
      poll: undefined
    };
  },
  async mounted() {
    this.poll = (await dataModule.get('pollList/-LQCY50X8i7-mCl9jS-B')).val();
    console.log(this.poll);
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
    .poll
      top: $top-indent
      position: absolute
      width: 980px
      min-height: 300px
      @include card-box-shadow
</style>
