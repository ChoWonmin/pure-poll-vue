<template lang="jade">
  .container
    .load(v-show="!isLoad")
      Spinner()
    .poll(v-show="isLoad")
      .header
        .name {{poll.name}}
        .info {{poll.info}}
      .body
        .item(v-for="item in poll.items")
          .question {{item.question}}
          .choices(v-for="choice in item.choices")
            .choice {{choice}}

</template>

<script>
import { dataModule } from '../api/firebase.wrapper';
import Spinner from '../components/Spinner';

export default {
  components: {
    Spinner
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
    .poll
      top: $top-indent
      position: absolute
      width: 980px
      min-height: 300px
      @include card-box-shadow
</style>
