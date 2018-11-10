<template lang="jade">
  .inputWithIcon( v-on:click="onClick", v-bind:type = "option", v-if="(option!='file')")
    .icon( v-show="!icon==''" )
      .material-icons {{icon}}
    input(v-bind:placeholder = "placeholder", v-bind:type = "option", v-model="value").input
  .inputWithIconFile(v-else="(option=='file')")
    .iconfile( v-show="!icon==''" )
      .material-icons {{icon}}
    .filechoose {{placeholder}}
      input(v-bind:type="'file'", v-model="value").inputfile
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
      value: ''
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
    background-color : lighten($grey-color, 40)
.inputWithIconFile
  border: 1px solid #aaa
  box-shadow: 0 2px 6px -1px $grey-color
  border-radius: 5px
  width: 100%
  text-align: center
  padding: 0 18px
  height: 72px
  line-height: 36px
  position : relative
  display : flex
  color : $grey-color
  background-color : #ffffff
  .iconfile
    font-size: 72px
    margin-right: 6px
  .filechoose
    font-size: 12px
    display: block
    .inputfile
      width: 100%
      border: none
      outline: none
  &.fixed
    position : fixed
  &:hover
    background-color : lighten($grey-color, 40)
</style>
