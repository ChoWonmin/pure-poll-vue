<template lang="jade">
  .inputWithIcon( v-on:click="onClick")
    .icon( v-show="!icon==''" )
      .material-icons {{icon}}
    input(v-bind:placeholder = "placeholder", v-bind:type = "option").input
</template>
<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    option: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    onClick() {
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/global"
  @import "../style/variable"
  .inputWithIcon
    border: 1px solid #aaa
    box-shadow: 0 2px 6px -1px $grey-color
    border-radius: 5px
    width: 100%
    text-align: center
    padding: 0 18px
    height: 36px
    line-height: 36px
    position : relative
    display : flex
    color : $grey-color
    background-color : #ffffff
    .icon
      font-size: 36px
      margin-right: 6px
    .input
      width: 100%
      border: none
      outline: none
    &.fixed
      position : fixed
    &:hover
      background-color : lighten($grey-color, 30)
</style>
