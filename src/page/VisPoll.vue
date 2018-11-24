<template lang="jade">
  .container
    .bar-wapper
      //BarChart(:items="barData", :width="1000")
    .bar-wapper
      ParallelCoordinate(:width="900", :height="500")
</template>

<script>
import dataModule from '../api/firebase.wrapper';
import BarChart from '../components/BarChart';
import ParallelCoordinate from '../components/ParallelCoordinate';

export default {
  components: {
    BarChart,
    ParallelCoordinate
  },
  data() {
    return {
      poll: [],
      resPollList: [],
      barData: [
        {
          name: 'A',
          value: 80
        },
        {
          name: 'B',
          value: 60
        },
        {
          name: 'C',
          value: 40
        },
        {
          name: 'D',
          value: 100
        },
        {
          name: 'A',
          value: 80
        },
        {
          name: 'B',
          value: 60
        },
        {
          name: 'C',
          value: 40
        },
        {
          name: 'D',
          value: 100
        }
      ],
      parallelData: [
        {
          name: 'A',
          value: 80
        },
        {
          name: 'B',
          value: 60
        },
        {
          name: 'C',
          value: 40
        },
        {
          name: 'D',
          value: 100
        }
      ]
    };
  },
  mounted() {
    this.poll = this.$route.params.poll;
    this.pollList = dataModule.get();
  },
  methods: {}
};
</script>

<style scoped lang="sass">

</style>
