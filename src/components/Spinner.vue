<template lang="jade">
  .triangles
    .tri.invert
    .tri.invert
    .tri
    .tri.invert
    .tri.invert
    .tri
    .tri.invert
    .tri
    .tri.invert


</template>

<script>
export default {
  progs: {

  },
  data() {
    return {
      disabled: false
    };
  },
  methods: {
  }
};
</script>

<style lang="sass" scoped>
  @-webkit-keyframes pulse
    0%
      opacity: 1
    16.666%
      opacity: 1
    100%
      opacity: 0
  @-moz-keyframes pulse
    0%
      opacity: 1
    16.666%
      opacity: 1
    100%
      opacity: 0
  @keyframes pulse
    0%
      opacity: 1
    16.666%
      opacity: 1
    100%
      opacity: 0
  .triangles
    -webkit-transform: translate(-50%, -50%)
    -moz-transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    -o-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)
    height: 81px
    width: 90px
    position: fixed
    left: 50%
    top: 50%
  .tri
    position: absolute
    -webkit-animation: pulse 750ms ease-in infinite
    -moz-animation: pulse 750ms ease-in infinite
    animation: pulse 750ms ease-in infinite
    border-top: 27px solid #215A6D
    border-left: 15px solid transparent
    border-right: 15px solid transparent
    border-bottom: 0px
    &.invert
      border-top: 0px
      border-bottom: 27px solid #215A6D
      border-left: 15px solid transparent
      border-right: 15px solid transparent
    &:nth-child(1)
      left: 30px
    &:nth-child(2)
      left: 15px
      top: 27px
      -webkit-animation-delay: -125ms
      -moz-animation-delay: -125ms
      animation-delay: -125ms
    &:nth-child(3)
      left: 30px
      top: 27px
    &:nth-child(4)
      left: 45px
      top: 27px
      -webkit-animation-delay: -625ms
      -moz-animation-delay: -625ms
      animation-delay: -625ms
    &:nth-child(5)
      top: 54px
      -webkit-animation-delay: -250ms
      -moz-animation-delay: -250ms
      animation-delay: -250ms
    &:nth-child(6)
      top: 54px
      left: 15px
      -webkit-animation-delay: -250ms
      -moz-animation-delay: -250ms
      animation-delay: -250ms
    &:nth-child(7)
      top: 54px
      left: 30px
      -webkit-animation-delay: -375ms
      -moz-animation-delay: -375ms
      animation-delay: -375ms
    &:nth-child(8)
      top: 54px
      left: 45px
      -webkit-animation-delay: -500ms
      -moz-animation-delay: -500ms
      animation-delay: -500ms
    &:nth-child(9)
      top: 54px
      left: 60px
      -webkit-animation-delay: -500ms
      -moz-animation-delay: -500ms
      animation-delay: -500ms
</style>
