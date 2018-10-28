<template lang="jade">
  .container
    .items-wrapper
      .item(v-for="item in pollList") {{ item }}
</template>

<script>
import { dataModule } from '../api/firebase.wrapper';

export default {
  data() {
    return {
      pollList: undefined
    };
  },
  async mounted() {
    this.pollList = (await dataModule.get('pollList')).val();
  },
  methods: {}
};
</script>

<style scoped lang="sass">
</style>
