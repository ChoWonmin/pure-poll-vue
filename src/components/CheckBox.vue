<template lang="jade">
  #check-box
    i.material-icons.box(v-on:click="clickCheck" v-bind:style="{ width: size, height: size, fontSize: size, lineHeight: size }"
    v-bind:class="{ active: value}") {{check}}
    .text
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  },
  props: {
    check: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '16px'
    }
  },
  methods: {
    clickCheck() {
      if (this.value) {
        this.value = false;
        this.check = '';
      } else {
        this.value = true;
        this.check = 'check';
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../style/variable"

  #check-box
    .box
      border: solid 1px $main-color
      text-align: center
      color: $sub-color
      &.active
        color: $main-color

</style>
