<template lang="jade">
  .modal-mask
    .modal-wrapper
      .modal-container
        .modal-body
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
  .modal-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .5)
    transition: opacity .3s ease
    display: none
    z-index: 1
    .modal-wrapper
      display: table-cell
      vertical-align: middle
      .modal-container
        margin: 0px auto
        background-color: #efefef
        border-radius: 4px
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
        transition: all .3s ease
        .modal-body
          width: 100%
          height: 100%
</style>
