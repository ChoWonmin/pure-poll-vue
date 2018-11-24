<template lang="jade">
  .pie-chart
    svg#pie-chart(v-bind:style="{width:width, height: height}")
      circle.donut-ring(cx="200" cy="200" r="32" fill="#fff" stroke="#d2d3d4" stroke-width="3")
      circle.donut-segment(cx="200" cy="200" r="32" fill="transparent" stroke="#ce4b99" stroke-width="30" stroke-dasharray="100 100" stroke-dashoffset="0" transform='rotate(-90 200 200)')
      circle.donut-segment(cx="200" cy="200" r="32" fill="transparent" stroke="#5041ff" stroke-width="30" stroke-dasharray="60 140" stroke-dashoffset="100" transform='rotate(-90 200 200)')
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

</style>
