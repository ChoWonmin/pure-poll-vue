<template lang="jade">
  .footer
    .main-name PurePoll
    .empty
    .icon-box
      .icon instagram
      .icon twitter
      .icon facebook
</template>

<script>
export default {
  data() {
    return '';
  },
  methods: {}
};
</script>

<style scoped lang="sass">
  @import "../style/variable"

  .footer
    position: absolute
    bottom: 0
    width: 100%
    height: 50px
    background-color: $sub-color
    display: flex
    padding: 0 50px
    align-items: center
    color: $white-color
    .main-name
      font-size: 20px
      font-weight: bold
    .empty
      flex: 1
    .icon-box
      display: flex
      .icon
        padding: 0 10px
      &:hover
        color: $main-color
</style>
