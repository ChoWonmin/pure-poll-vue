<template lang="jade">
  .icon-nav(v-bind:class="option")
</template>

<script>
export default {
  name: 'Icon',
  props: {
    option: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="sass">
@import "../style/global"
@import "../style/variable"

.icon-nav
  cursor: pointer
  width : 20px
  height : 24px
  line-height: 24px
  &.email
    background-image: url(/static/email.svg)
  &.facebook
    background-image: url(/static/facebook.svg)
  &.instagram
    background-image: url(/static/instagram.svg)
</style>
