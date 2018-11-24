<template lang="jade">
  .container
    .bar-wapper
      //BarChart(items="#{ barData }")
    .bar-wapper
      BarChart(:items="[{name: 'A', value:70}]")
    .bar-wapper
      //BarChart()
</template>

<script>
import BarChart from '../components/BarChart';

export default {
  components: {
    BarChart
  },
  data() {
    return {
      barData: [
        {
          name: 'A',
          value: 80
        },
        {
          name: 'A',
          value: 80
        },
        {
          name: 'A',
          value: 80
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="sass">
  .bar-wapper
    width: 200px
    height: 300px
</style>
