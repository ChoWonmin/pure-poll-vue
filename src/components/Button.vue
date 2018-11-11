<template lang="jade">
  .btn(v-bind:class="[option,{disabled:disabled}]" v-on:click="onClick")
    .icon( v-show="!icon==''" )
      .material-icons {{icon}}
    .name( v-if="name !==''" v-bind:class="{only : icon === ''}" ) {{name}}
    .tooltip(v-show="!tooltip==''")
      .text {{tooltip}}
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    option: {
      type: String,
      default: 'normal'
    },
    tooltip: {
      type: String,
      default: ''
    },
    position: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    bgColor: {
      type: String,
      default: ''
    },
    circle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tooltip_visible: false,
      disabled: false
    };
  },
  methods: {
    onClick() {
      if (this.disabled) {
        // console.log('disabled');
      } else {
        this.$emit('click', '');
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/global"
  @import "../style/variable"

  .btn
    width : 100%
    height : 24px
    line-height: 24px
    position : relative
    display : flex
    color : #ffffff
    border-radius : 5px
    background-color : $sub-color
    .name
      width: 100%
      text-align: center
    &:hover
      background-color : lighten($sub-color, 10)
      //color : $main-color
      .tooltip
        display: block
      cursor: pointer
    &:active
      background-color : darken($sub-color, 10)
    &.fixed
      position : fixed
    &.small
      width : 24px
      height : 24px
      padding : 0 0
    &.big
      height : 36px
      padding : 0 0
      line-height: 36px
    &.large
      height: 48px
      padding : 0 0
      line-height: 48px
    &.circle
      border-radius : 100%
    //.icon
      color : lighten($main-color,10)
    &.transparent
      color: $sub-color
      height : 28px
      line-height : 28px
      background-color: #ffffff
      border: solid 1px
      box-shadow: 0 2px 6px -1px $black-color
      &:hover
        background-color: lighten($sub-color,30)
    .tooltip
      padding: 0 12px
      height : 24px
      background-color: #000000
      color : #ffffff
      opacity : 0.8
      border-radius: 4px
      position : absolute
      display: none
      z-index : 1
      left : 100%
      margin-left: 6px
      .text
        text-align: center
        line-height: 24px
  .btn.disabled
    color: darken($black-color,10)
    background-color: lighten($black-color,10)
    .tooltip
      display : none
</style>
