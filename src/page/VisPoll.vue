<template lang="jade">
  .container
    .bar-wapper
      //BarChart(:items="barData", :width="1000")
    .bar-wapper
      ParallelCoordinate(:width="900", :height="500", :items="parallelData", :axis="axis")
</template>

<script>
import _ from 'lodash';
import { dataModule } from '../api/firebase.wrapper';
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
      resList: [],
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
      parallelData: [],
      axis: []
    };
  },
  async mounted() {
    this.poll = this.$route.params.poll;
    // this.resList = (await dataModule.get(`resList/${this.poll.id}`)).val();
    this.resList = (await dataModule.get('resList/-LS4HX3UDSdh3jKbdPfU')).val();

    _.forEach(this.resList, (e) => {
      this.parallelData.push(e.poll);
    });

    this.axis = _.map(this.parallelData[0], (e, i) => `${i+1}번 문항`);
  },
  methods: {}
};
</script>

<style scoped lang="sass">

</style>
